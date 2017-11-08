package se.apendo.pingis.controller;

public class MatchForm {
	
	private long player1;
	private long player2;
	private String result;
	
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
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}

}
