package se.apendo.pingis.controller;

import java.util.List;
import java.util.Map;

public class MatchForm {
	
	private long player1;
	private long player2;
	private List<Map<String, Integer>> sets;
	
	public MatchForm() {
	}
	
	public long getPlayer1() {
		return player1;
	}
	public void setPlayer1(long player1) {
		this.player1 = player1;
	}
	public long getPlayer2() {
		return player2;
	}
	public void setPlayer2(long player2) {
		this.player2 = player2;
	}
	
	
	public List<Map<String, Integer>> getSets() {
		return sets;
	}
	public void setSets(List<Map<String, Integer>> score) {
		this.sets = score;
	}
	

}
