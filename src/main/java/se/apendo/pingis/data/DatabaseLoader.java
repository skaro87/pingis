package se.apendo.pingis.data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final UserRepository userRepository;
	private final MatchRepository matchRepository;

	@Autowired
	public DatabaseLoader(UserRepository userRepository, MatchRepository matchRepository) {
		this.userRepository = userRepository;
		this.matchRepository = matchRepository;
	}

	@Override
	public void run(String... strings) throws Exception {
		User user1 = new User("Anton", 1100);
		User user2 = new User("Rickard", 1000);
		User user3 = new User("Niklas", 900);
		User user4 = new User("Tyrone", 1200);
		this.userRepository.save(user1);
		this.userRepository.save(user2);
		this.userRepository.save(user3);
		this.userRepository.save(user4);
		
		/*
		List<PingisSet> match1score = new ArrayList<>();
		match1score.add(new PingisSet(user1.getName(), 11, user2.getName(), 9));
		match1score.add(new PingisSet(user2.getName(), 11, user1.getName(), 9));
		match1score.add(new PingisSet(user1.getName(), 11, user2.getName(), 9));
		
		this.matchRepository.save(new Match(Arrays.asList(this.userRepository.findOne(1l), this.userRepository.findOne(2l)), match1score));
		
		List<PingisSet> match2score = new ArrayList<>();
		match2score.add(new PingisSet(user1.getName(), 11, user2.getName(), 3));
		match2score.add(new PingisSet(user2.getName(), 11, user1.getName(), 9));
		match2score.add(new PingisSet(user1.getName(), 11, user2.getName(), 9));
		
		this.matchRepository.save(new Match(Arrays.asList(this.userRepository.findOne(1l), this.userRepository.findOne(2l)), match2score));
		*/
	}
}
