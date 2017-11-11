package se.apendo.pingis.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import se.apendo.pingis.data.Match;
import se.apendo.pingis.data.User;
import se.apendo.pingis.data.UserRepository;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/{name}")
	public ResponseEntity<User> getUser(@PathVariable(value = "name") String name) {
		List<User> users = userRepository.findByNameIgnoreCase(name);
		if (users.isEmpty()){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);			
		}
		
		return new ResponseEntity<>(users.get(0), HttpStatus.OK);		
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<User>> getAllUsers() {
		return new ResponseEntity<>(userRepository.findAllByOrderByNameAsc(), HttpStatus.OK);
	}

}
