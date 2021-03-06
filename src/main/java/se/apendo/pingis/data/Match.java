package se.apendo.pingis.data;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "pingis_matches")
public class Match {

	@Column(name="pingis_match_id")
	private @Id @GeneratedValue Long id;

	@ManyToMany(mappedBy="matches")
	@JsonBackReference
	@LazyCollection(LazyCollectionOption.FALSE)
	private List<User> users;

	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@OrderBy("id ASC")
	@JsonManagedReference
	@Column(name = "pingis_sets")
	private List<PingisSet> sets = new ArrayList<>();

	private Timestamp time;

	private Match() {
	}

	public Match(List<User> users, List<Map<String, Integer>> result) {
		this.users = users;
		result.forEach(m -> addSetFromMap(m));
		this.time = Timestamp.valueOf(LocalDateTime.now());
	}

	public Match(List<User> users) {
		this.users = users;
	}

	private void addSetFromMap(Map<String, Integer> map) {
		String player1 = null;
		String player2 = null;
		int player1score = 0;
		int player2score = 0;

		for (Entry<String, Integer> e : map.entrySet()) {
			if (player1 == null) {
				player1 = e.getKey();
				player1score = e.getValue();
			}

			else if (player2 == null) {
				player2 = e.getKey();
				player2score = e.getValue();
			}

		}

		PingisSet set = new PingisSet(player1, player1score, player2, player2score);
		set.setPingisMatch(this);
		sets.add(set);
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public List<PingisSet> getSets() {
		return sets;
	}

	public void setSets(List<PingisSet> result) {
		this.sets = result;
	}

	public Timestamp getTime() {
		return time;
	}

	public void setTime(Timestamp time) {
		this.time = time;
	}

	public Long getId() {
		return id;
	}

}
