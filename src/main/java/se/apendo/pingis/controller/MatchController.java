package se.apendo.pingis.controller;

import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import se.apendo.pingis.data.Match;
import se.apendo.pingis.service.MastchService;

@Controller
public class MatchController {   
	
	@Autowired
	private MastchService ratingService;
	
	@PostMapping(path = "/addmatch")
	public ResponseEntity<Match> addMatch(@RequestBody MatchForm matchForm) {
		Match matchResult = ratingService.playMatch(matchForm);
		return new ResponseEntity<>(matchResult, HttpStatus.OK);
	}

}
