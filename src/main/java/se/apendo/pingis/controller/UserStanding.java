package se.apendo.pingis.controller;

public class UserStanding {
	
	private int rank;
	private String name;
	private int rating;
	
	private UserStanding() {
	}
	
	public UserStanding(int rank, String name, int rating) {
		this.rank = rank;
		this.name = name;
		this.rating = rating;
	}

	public int getRank() {
		return rank;
	}

	public void setRank(int rank) {
		this.rank = rank;
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

	public void setRating(int rating) {
		this.rating = rating;
	}
	
	
	
	

}
