package se.apendo.pingis;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Before;
import org.junit.Test;

import se.apendo.pingis.data.Match;
import se.apendo.pingis.data.User;
import se.apendo.pingis.service.MatchService;

public class MatchServiceTest {

	private MatchService matchService;

	@Before
	public void beforeClass() {
		matchService = new MatchService();
	}

	@Test
	public void playMatchTest() {
		User player1 = new User("Mario", 1000, 1500);
		User player2 = new User("Luigi", 1000, 1500);
		List<Map<String, Integer>> sets = Arrays.asList(createSet(player1.getName(), 11, player2.getName(), 7), createSet(player1.getName(), 11, player2.getName(), 7));
		Match match = new Match(Arrays.asList(player1, player2), sets);
		matchService.playMatch(match);
		matchService.playMatch(match);
		matchService.playMatch(match);
		assertEquals(1094, player1.getRating());
		assertEquals(1573, player1.getHiddenRating());
		assertEquals(1000, player2.getRating());
		assertEquals(1427, player2.getHiddenRating());
	}

	@Test
	public void recalculateRatingTest() {
		User player1 = new User("Mario", 1000, 1500);
		User player2 = new User("Luigi", 1000, 1500);
		User player3 = new User("Bowser", 1000, 1500);

		List<Map<String, Integer>> sets = Arrays.asList(createSet(player1.getName(), 11, player2.getName(), 7), createSet(player1.getName(), 11, player2.getName(), 7));

		Match match = new Match(Arrays.asList(player1, player2), sets);
		List<Map<String, Integer>> sets2 = Arrays.asList(createSet(player1.getName(), 11, player2.getName(), 7), createSet(player1.getName(), 11, player2.getName(), 7));

		Match match2 = new Match(Arrays.asList(player1, player2), sets2);
		List<Map<String, Integer>> sets3 = Arrays.asList(createSet(player1.getName(), 11, player2.getName(), 7), createSet(player1.getName(), 11, player2.getName(), 7));

		Match match3 = new Match(Arrays.asList(player1, player2), sets3);
		List<User> users = Arrays.asList(player1, player2, player3);

		Match match4 = new Match(Arrays.asList(player3));

		List<Match> matches = Arrays.asList(match, match2, match3, match4);
		matchService.recalculateRatings(users, matches);

		assertEquals(1094, player1.getRating());
		assertEquals(1573, player1.getHiddenRating());
		assertEquals(1000, player2.getRating());
		assertEquals(1427, player2.getHiddenRating());
		assertEquals(990, player3.getRating());
	}

	private Map<String, Integer> createSet(String player1, int player1score, String player2, int player2score) {
		Map<String, Integer> ret = new HashMap<>();
		ret.put(player1, player1score);
		ret.put(player2, player2score);
		return ret;
	}

}
