package com.nagarro.nagp.yara.claimmanagement.models-app.ordermanagement.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Wishlist {
	
	/** The Invoice Id. */
	@Id
	@GeneratedValue
	@Column(name="wishlist_id")
	private Long wishlistId;

	/** The User Id. */
	private Long userId;

	/** List of order items. */
	@OneToMany(mappedBy="wishlist")
	private List<OrderItem> orderItems;

	public Long getWishlistId() {
		return wishlistId;
	}

	public void setWishlistId(Long wishlistId) {
		this.wishlistId = wishlistId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public List<OrderItem> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(List<OrderItem> orderItems) {
		this.orderItems = orderItems;
	}

	

}
