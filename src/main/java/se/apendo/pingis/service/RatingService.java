package se.apendo.pingis.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import se.apendo.pingis.controller.MatchForm;
import se.apendo.pingis.data.Match;
import se.apendo.pingis.data.MatchRepository;
import se.apendo.pingis.data.User;
import se.apendo.pingis.data.UserRepository;
import se.apendo.pingis.util.MatchOutcome;
import se.apendo.pingis.util.NumberOfSets;

@Component
public class RatingService {
	
	@Autowired
	private MatchRepository matchRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	public Match playMatch(MatchForm matchForm) {
		return playMatch(matchForm.getPlayer1(), matchForm.getPlayer2(), matchForm.getResult());
	}
	
	public Match playMatch(Long user1, Long user2, String result) {
		User player1 = userRepository.findOne(user1);
		User player2 = userRepository.findOne(user2);
		Match match = new Match(player1, player2, result);
		NumberOfSets matchType = null;
		
		int setsPlayed = result.split(",").length;
		if (setsPlayed == 1) {
			matchType = NumberOfSets.BEST_OFF_ONE;
		}
		else if (setsPlayed == 2 || setsPlayed == 3) {
			matchType = NumberOfSets.BEST_OFF_THREE;
		}
		
		Map<String, MatchOutcome> matchResult = createMatchOutcome(player1.getName(), player2.getName(), result);
		
		int player1elo = calculateELO(player1.getRating(), player2.getRating(), matchResult.get(player1.getName()), matchType);
		int player2elo = calculateELO(player2.getRating(), player1.getRating(), matchResult.get(player2.getName()), matchType);
		
		player1.setRating(player1elo);
		player2.setRating(player2elo);
		
		userRepository.save(player1);
		userRepository.save(player2);
		matchRepository.save(match);
		
		return match;
	}

	private Map<String, MatchOutcome> createMatchOutcome(String player1name, String player2name, String result) {
		Map<String, MatchOutcome> ret = new HashMap<>();
		int player1SetsWon = 0;
		int player2SetsWon = 0;
		
		for (String setResult : result.split(",")) {
			String[] score = setResult.split("-");
			if (Integer.parseInt(score[0]) > Integer.parseInt(score[1])) {
				player1SetsWon++;
			}
			if (Integer.parseInt(score[0]) < Integer.parseInt(score[1])) {
				player2SetsWon++;
			}
		}
		
		
		if (player1SetsWon > player2SetsWon) {
			ret.put(player1name, MatchOutcome.WIN);
			ret.put(player2name, MatchOutcome.LOSS);
		}
		
		else if (player1SetsWon < player2SetsWon) {
			ret.put(player1name, MatchOutcome.LOSS);
			ret.put(player2name, MatchOutcome.WIN);
		}
		
		else {
			ret.put(player1name, MatchOutcome.DRAW);
			ret.put(player2name, MatchOutcome.DRAW);
		}
		
		return ret;
	}

	public int calculateELO(int player1Rating, int player2Rating, MatchOutcome outcome, NumberOfSets sets) {

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
		int K = 16;
		
		
		double expectedOutcome = 0;
		
		if (sets == NumberOfSets.BEST_OFF_ONE) {
			expectedOutcome = (1 / (1 + (Math.pow(10, exponent))));
			K = 8;
		}
		else if (sets == NumberOfSets.BEST_OFF_THREE) {
			expectedOutcome = (1 / (1 + (Math.pow(10, exponent))));
			//expectedOutcome = (expectedOutcome * expectedOutcome) * (3 - 2 * expectedOutcome);			
		}

		// calculate new rating
		int newRating = (int) Math.round(player1Rating + K * (actualScore - expectedOutcome));

		return newRating;
	}
}
