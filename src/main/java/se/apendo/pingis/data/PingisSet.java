package se.apendo.pingis.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name = "pingis_sets")
public class PingisSet {

	@Column(name="set_id")
	private @Id @GeneratedValue Long id;

	@ManyToOne
	@JsonBackReference
	private Match pingismatch;

	@Column(name = "player_1")
	private String player1;
	@Column(name = "player_1_score")
	private int player1score;
	@Column(name = "player_2")
	private String player2;
	@Column(name = "player_2_score")
	private int player2score;

	private PingisSet() {
	}

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
	
	public void setPingisMatch(Match match) {
		this.pingismatch = match;
	}

}
