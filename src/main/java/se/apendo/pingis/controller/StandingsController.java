package se.apendo.pingis.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import se.apendo.pingis.data.Match;
import se.apendo.pingis.data.User;
import se.apendo.pingis.data.UserRepository;
import se.apendo.pingis.service.MatchService;

@Controller
@RequestMapping("/api/standings")
public class StandingsController {   
	
	@Autowired
	private UserRepository userRepository;
	
	
	 @GetMapping
	 public ResponseEntity<List<UserStanding>> getStandings() {
		List<User> users = userRepository.findAllByOrderByRatingDesc();
		List<UserStanding> standings = new ArrayList<>();
		users.forEach(u -> standings.add(new UserStanding(standings.size() +1, u.getName(), u.getRating())));
		return new ResponseEntity<>(standings, HttpStatus.OK);
	 }
	 
	 
}
