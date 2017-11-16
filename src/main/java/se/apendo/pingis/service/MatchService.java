package se.apendo.pingis.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import se.apendo.pingis.controller.MatchForm;
import se.apendo.pingis.data.Match;
import se.apendo.pingis.data.MatchRepository;
import se.apendo.pingis.data.PingisSet;
import se.apendo.pingis.data.User;
import se.apendo.pingis.data.UserRepository;
import se.apendo.pingis.util.MatchOutcome;
import se.apendo.pingis.util.NumberOfSets;

@Component
public class MatchService {

	private static final Logger LOG = Logger.getLogger(MatchService.class);

	@Autowired
	private MatchRepository matchRepository;

	@Autowired
	private UserRepository userRepository;

	public Match playMatch(MatchForm matchForm) {
		return playMatch(matchForm.getPlayer1(), matchForm.getPlayer2(), matchForm.getSets());
	}

	public Match playMatch(Long user1, Long user2, List<Map<String, Integer>> sets) {
		User player1 = userRepository.findOne(user1);
		User player2 = userRepository.findOne(user2);
		
		Match match = new Match(Arrays.asList(player1, player2), sets);
		playMatch(match);

		LOG.debug("Updating user rating for " + player1.getName());
		userRepository.save(player1);
		LOG.debug("Updating user rating for " + player2.getName());
		userRepository.save(player2);

		LOG.debug("Saving match");
		matchRepository.save(match);

		return match;
	}
	
	public void playMatch(Match match) {
		User player1 = match.getUsers().get(0);
		User player2 = match.getUsers().get(1);
		
		NumberOfSets matchType = null;
		int kValueShownRating = 0;

		int setsPlayed = match.getSets().size();
		if (setsPlayed == 1) {
			matchType = NumberOfSets.BEST_OFF_ONE;
			kValueShownRating = 16;
		} else if (setsPlayed == 2 || setsPlayed == 3) {
			matchType = NumberOfSets.BEST_OFF_THREE;
			kValueShownRating = 32;
		}

		LOG.debug("Playing " + matchType + " match between " + player1.getName() + " and " + player2.getName());

		Map<String, MatchOutcome> matchResult = createMatchOutcome(match);
		
		int player1hiddenRating = calculateRating(player1.getHiddenRating(), player2.getHiddenRating(),
				matchResult.get(player1.getName()), matchType, kValueShownRating * 2);
		int player2hiddenRating = calculateRating(player2.getHiddenRating(), player1.getHiddenRating(),
				matchResult.get(player2.getName()), matchType, kValueShownRating * 2);

		int player1shownRating = calculateRating(player1.getRating(), player2.getHiddenRating(),
				matchResult.get(player1.getName()), matchType, kValueShownRating);
		int player2shownRating = calculateRating(player2.getRating(), player1.getHiddenRating(),
				matchResult.get(player2.getName()), matchType, kValueShownRating);

		LOG.debug("New shown rating for " + player1.getName() + ": " + player1shownRating);
		LOG.debug("New hidden rating for " + player1.getName() + ": " + player1hiddenRating);
		LOG.debug("New shown rating for " + player2.getName() + ": " + player2shownRating);
		LOG.debug("New hidden rating for " + player2.getName() + ": " + player2hiddenRating);

		player1.setHiddenRating(player1hiddenRating);
		player1.setRating(player1shownRating);
		player2.setHiddenRating(player2hiddenRating);
		player2.setRating(player2shownRating);
		
	}
	
	private Map<String, MatchOutcome> createMatchOutcome(Match match) {
		Map<String, MatchOutcome> ret = new HashMap<>();
		int player1SetsWon = 0;
		int player2SetsWon = 0;

		for (PingisSet setResult : match.getSets()) {
			int player1score = setResult.getPlayer1score();
			int player2score = setResult.getPlayer2score();

			if (player1score > player2score) {
				player1SetsWon++;
			}
			if (player1score < player2score) {
				player2SetsWon++;
			}

		}

		if (player1SetsWon > player2SetsWon) {
			ret.put(match.getSets().get(0).getPlayer1(), MatchOutcome.WIN);
			ret.put(match.getSets().get(0).getPlayer2(), MatchOutcome.LOSS);
			LOG.debug(match.getSets().get(0).getPlayer1() + " won the match");
		}

		else if (player1SetsWon < player2SetsWon) {
			ret.put(match.getSets().get(0).getPlayer1(), MatchOutcome.LOSS);
			ret.put(match.getSets().get(0).getPlayer2(), MatchOutcome.WIN);
			LOG.debug(match.getSets().get(0).getPlayer2() + " won the match");
		}

		else {
			ret.put(match.getSets().get(0).getPlayer1(), MatchOutcome.DRAW);
			ret.put(match.getSets().get(0).getPlayer2(), MatchOutcome.DRAW);
			LOG.debug("Match ended in a draw");
		}

		return ret;
	}

	public int calculateRating(int player1Rating, int player2Rating, MatchOutcome outcome, NumberOfSets sets, int kValue) {

		double actualScore;

		if (outcome == MatchOutcome.WIN) {
			actualScore = 1.0;
		} else if (outcome == MatchOutcome.DRAW) {
			actualScore = 0.5;
		} else if (outcome == MatchOutcome.LOSS) {
			actualScore = 0;
		} else {
			return player1Rating;
		}

		double exponent = (double) (player2Rating - player1Rating) / 400;
		double expectedOutcome = (1 / (1 + (Math.pow(10, exponent))));

		if (sets == NumberOfSets.BEST_OFF_THREE) {
			expectedOutcome = (expectedOutcome * expectedOutcome) * (3 - 2 * expectedOutcome);
		}
		int newRating = (int) Math.round(player1Rating + kValue * (actualScore - expectedOutcome));
		return newRating;
	}
	
	
	public void recalculateRatings() {
		Iterable<User> users = userRepository.findAll();
		Iterable<Match> matches = matchRepository.findAll();
		List<User> userList = new ArrayList<>();
		List<Match> matchList = new ArrayList<>();
		users.forEach(userList::add);
		matches.forEach(matchList::add);
		recalculateRatings(userList, matchList);
		
	}

	public void recalculateRatings(List<User> users, List<Match> matches) {
		//Map<String, User> userMap = users.stream().collect(Collectors.toMap(User::getName, u -> u));
		matches.forEach(match -> {
			playMatch(match);
		});
	}
	
	
}
