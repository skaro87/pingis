package se.apendo.pingis.data;

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
		User user1 = new User("Anton", 1000);
		User user2 = new User("Rickard", 1000);
		this.userRepository.save(user1);
		this.userRepository.save(user2);
		
		this.matchRepository.save(new Match(this.userRepository.findOne(1l), this.userRepository.findOne(2l), "11-7,9-11,11-4"));
	}
}
