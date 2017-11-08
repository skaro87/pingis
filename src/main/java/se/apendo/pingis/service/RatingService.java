package se.apendo.pingis.service;

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
		
		int player1elo = calculateELO(player1.getRating(), player2.getRating(), MatchOutcome.WIN, NumberOfSets.ONE);
		int player2elo = calculateELO(player2.getRating(), player1.getRating(), MatchOutcome.LOSS, NumberOfSets.ONE);
		
		player1.setRating(player1elo);
		player2.setRating(player2elo);
		
		userRepository.save(player1);
		userRepository.save(player2);
		matchRepository.save(match);
		
		return match;
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
		int K = 32;
		
		
		double expectedOutcome = 0;
		
		if (sets == NumberOfSets.ONE) {
			expectedOutcome = (1 / (1 + (Math.pow(10, exponent))));
			K = 16;
		}
		else if (sets == NumberOfSets.THREE) {
			expectedOutcome = (1 / (1 + (Math.pow(10, exponent))));
			//expectedOutcome = (expectedOutcome * expectedOutcome) * (3 - 2 * expectedOutcome);			
		}

		// calculate new rating
		int newRating = (int) Math.round(player1Rating + K * (actualScore - expectedOutcome));

		return newRating;
	}
}
