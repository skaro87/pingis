package se.apendo.pingis.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class PingisSet {
	
	private @Id @GeneratedValue Long id;
	
	@ManyToOne
	@JsonBackReference
	private Match match;
	
	private String player1;
	private int player1score;
	private String player2;
	private int player2score;
	
	private PingisSet() {}
	
	public PingisSet(String player1, int player1score, String player2, int player2score) {
		this.player1 = player1;
		this.player1score = player1score;
		this.player2 = player2;
		this.player2score = player2score;
	}

	public String getPlayer1() {
		return player1;
	}
	public void setPlayer1(String player1) {
		this.player1 = player1;
	}
	public int getPlayer1score() {
		return player1score;
	}
	public void setPlayer1score(int player1score) {
		this.player1score = player1score;
	}
	public String getPlayer2() {
		return player2;
	}
	public void setPlayer2(String player2) {
		this.player2 = player2;
	}
	public int getPlayer2score() {
		return player2score;
	}
	public void setPlayer2score(int player2score) {
		this.player2score = player2score;
	}

	public Match getMatch() {
		return match;
	}

	public void setMatch(Match match) {
		this.match = match;
	}
	
	

}
