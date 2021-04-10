/**
 * 
 */
package com.nagarro.nagp.yara.assetmanagement.document-app.inventory.document;

public class ReviewDTO {
	
	public String name;

	
	public String email;
	
	public Number ratings;
	
	public String review;
	
	public Number likes;
	
	public Number dislike;

	public ReviewDTO() {}
	
	public ReviewDTO(String name, String email, Number ratings, String review, Number likes, Number dislike) {
		super();
		this.name = name;
		this.email = email;
		this.ratings = ratings;
		this.review = review;
		this.likes = likes;
		this.dislike = dislike;
		
	}

	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Number getRatings() {
		return ratings;
	}

	public void setRatings(Number ratings) {
		this.ratings = ratings;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public Number getLikes() {
		return likes;
	}

	public void setLikes(Number likes) {
		this.likes = likes;
	}

	public Number getDislike() {
		return dislike;
	}

	public void setDislike(Number dislike) {
		this.dislike = dislike;
	}
	
}
