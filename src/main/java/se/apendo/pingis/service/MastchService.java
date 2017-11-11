package se.apendo.pingis.service;

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
public class MastchService {

	private static final Logger LOG = Logger.getLogger(MastchService.class);

	@Autowired
	private MatchRepository matchRepository;

	@Autowired
	private UserRepository userRepository;

	public Match playMatch(MatchForm matchForm) {
		return playMatch(matchForm.getPlayer1(), matchForm.getPlayer2(), matchForm.getSets());
	}

	public Match playMatch(Long user1, Long user2, List<Map<String, Integer>> list) {
		User player1 = userRepository.findOne(user1);
		User player2 = userRepository.findOne(user2);
		Match match = new Match(Arrays.asList(player1, player2), list);
		NumberOfSets matchType = null;

		int setsPlayed = list.size();
		if (setsPlayed == 1) {
			matchType = NumberOfSets.BEST_OFF_ONE;
		} else if (setsPlayed == 2 || setsPlayed == 3) {
			matchType = NumberOfSets.BEST_OFF_THREE;
		}

		LOG.debug("Playing " + matchType + " match between " + player1.getName() + " and " + player2.getName());

		Map<String, MatchOutcome> matchResult = createMatchOutcome(player1.getName(), player2.getName(), list);

		int player1rating = calculateRating(player1.getRating(), player2.getRating(),
				matchResult.get(player1.getName()), matchType);
		int player2rating = calculateRating(player2.getRating(), player1.getRating(),
				matchResult.get(player2.getName()), matchType);

		LOG.debug("New rating for " + player1.getName() + ": " + player1rating);
		LOG.debug("New rating for " + player2.getName() + ": " + player2rating);

		player1.setRating(player1rating);
		player2.setRating(player2rating);

		LOG.debug("Updating user rating for " + player1.getName());
		userRepository.save(player1);
		LOG.debug("Updating user rating for " + player2.getName());
		userRepository.save(player2);

		LOG.debug("Saving match");
		matchRepository.save(match);

		return match;
	}

	private Map<String, MatchOutcome> createMatchOutcome(String player1name, String player2name,
			List<Map<String, Integer>> list) {
		Map<String, MatchOutcome> ret = new HashMap<>();
		int player1SetsWon = 0;
		int player2SetsWon = 0;

		for (Map<String, Integer> setResult : list) {
			int player1score = setResult.get(player1name);
			int player2score = setResult.get(player2name);

			if (player1score > player2score) {
				player1SetsWon++;
			}
			if (player1score < player2score) {
				player2SetsWon++;
			}

		}

		if (player1SetsWon > player2SetsWon) {
			ret.put(player1name, MatchOutcome.WIN);
			ret.put(player2name, MatchOutcome.LOSS);
			LOG.debug(player1name + " won the match");
		}

		else if (player1SetsWon < player2SetsWon) {
			ret.put(player1name, MatchOutcome.LOSS);
			ret.put(player2name, MatchOutcome.WIN);
			LOG.debug(player2name + " won the match");
		}

		else {
			ret.put(player1name, MatchOutcome.DRAW);
			ret.put(player2name, MatchOutcome.DRAW);
			LOG.debug("Match ended in a draw");
		}

		return ret;
	}

	public int calculateRating(int player1Rating, int player2Rating, MatchOutcome outcome, NumberOfSets sets) {

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
		int kValue = 16;
		double expectedOutcome = (1 / (1 + (Math.pow(10, exponent))));

		if (sets == NumberOfSets.BEST_OFF_ONE) {
			kValue = 8;
		} else if (sets == NumberOfSets.BEST_OFF_THREE) {
			expectedOutcome = (expectedOutcome * expectedOutcome) * (3 - 2 * expectedOutcome);
		}
		int newRating = (int) Math.round(player1Rating + kValue * (actualScore - expectedOutcome));
		return newRating;
	}
}
