package se.apendo.pingis.data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Data
@Entity
public class Match {
	
	private @Id @GeneratedValue Long id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="match_player_1")
	private User player1;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="match_player_2")
	private User player2;
	
	
	private String result;

	private Match() {}

	public Match(User player1, User player2, String result) {
		this.player1 = player1;
		this.player2 = player2;
		this.result = result;
	}

	public User getPlayer1() {
		return player1;
	}

	public void setPlayer1(User player1) {
		this.player1 = player1;
	}

	public User getPlayer2() {
		return player2;
	}

	public void setPlayer2(User player2) {
		this.player2 = player2;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	

}
