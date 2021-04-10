package com.nagarro.nagp.yara.travelmanagement.models-app.ordermanagement.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Cart {

	/** The Invoice Id. */
	@Id
	@GeneratedValue
	@Column(name = "cart_id")
	private Long cartId;

	/** The User Id. */
	private Long userId;

	/** List of order items. */
	@OneToMany(mappedBy = "cart")
	private List<OrderItem> orderItems;

	public Cart() {

	}

	public Cart(final Long id) {
		this.cartId = id;
	}

	public Long getCartId() {
		return cartId;
	}

	public void setCartId(final Long cartId) {
		this.cartId = cartId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(final Long userId) {
		this.userId = userId;
	}

	public List<OrderItem> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(final List<OrderItem> orderItems) {
		this.orderItems = orderItems;
	}
}
