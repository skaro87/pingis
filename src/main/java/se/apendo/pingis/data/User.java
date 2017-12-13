package se.apendo.pingis.data;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "pingis_users")
public class User {

	@Column(name = "user_id")
	private @Id @GeneratedValue Long id;

	@Column(name = "user_name")
	private String name;
	@Column(name = "user_rating")
	private int rating;
	@Column(name = "user_hidden_rating")
	private int hiddenRating;

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@OrderBy("id ASC")
	@JsonManagedReference
	@Column(name = "user_matches")
	@JoinTable(name = "user_match_join_table", joinColumns = { @JoinColumn(name = "match_user") }, inverseJoinColumns = {
			@JoinColumn(name = "user_match") })
	private List<Match> matches;

	private User() {
	}

	public User(String name, int rating, int hiddenRating) {
		this.name = name;
		this.rating = rating;
		this.hiddenRating = hiddenRating;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getRating() {
		return rating;
	}

	@JsonIgnore
	public int getHiddenRating() {
		return hiddenRating;
	}

	public void setHiddenRating(int hiddenRating) {
		this.hiddenRating = hiddenRating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public List<Match> getMatches() {
		return matches;
	}

	public void setMatches(List<Match> matches) {
		this.matches = matches;
	}

}
