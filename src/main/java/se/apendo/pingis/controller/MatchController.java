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
import se.apendo.pingis.data.MatchRepository;
import se.apendo.pingis.service.MatchService;

@Controller
@RequestMapping("/api/match")
public class MatchController {   
	
	@Autowired
	private MatchService ratingService;
	
	@Autowired
	private MatchRepository matchRepository;
	
	@PostMapping
	public ResponseEntity<Match> addMatch(@RequestBody MatchForm matchForm) {
		Match matchResult = ratingService.playMatch(matchForm);
		return new ResponseEntity<>(matchResult, HttpStatus.OK);
	}
	
	@GetMapping("/history")
	public ResponseEntity<List<Match>> getMatchHistory() {
		return new ResponseEntity<>(matchRepository.findFirst10ByOrderByIdDesc(), HttpStatus.OK);
	}
	
	 @GetMapping
	 public ResponseEntity<MatchForm> getTemplate() {
		 MatchForm form = new MatchForm();
		 form.setPlayer1(1);
		 form.setPlayer2(2);
		 List<Map<String, Integer>> sets = new ArrayList<>();
		 sets.add(createMap());
		 sets.add(createMap());
		 form.setSets(sets);
		 return new ResponseEntity<>(form, HttpStatus.OK);
	 }
	 
	 private Map<String, Integer> createMap() {
		 Map<String, Integer> ret = new HashMap<>();
		 ret.put("Anton", 11);
		 ret.put("Rickard", 7);
		 return ret;
	 }
	 
	 @PostMapping("/redoMatches")
	 public ResponseEntity<String> redoAllMatches() {
		 ratingService.recalculateRatings();
		 return new ResponseEntity<>(HttpStatus.OK);
	 }

}
