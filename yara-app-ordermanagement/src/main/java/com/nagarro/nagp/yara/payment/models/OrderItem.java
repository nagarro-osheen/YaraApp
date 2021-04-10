package com.nagarro.nagp.yara.payment.models-app.ordermanagement.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class OrderItem {

	/** The Order Item Id. */
	@Id
	@GeneratedValue
	private Long orderItemId;

	/** The Product id. */
	private String productId;

	@ManyToOne
	@JoinColumn(name = "cart_id")
	@JsonIgnore
	/** The Cart. */
	private Cart cart;

	@ManyToOne
	@JoinColumn(name = "wishlist_id")
	@JsonIgnore
	/** The Wishlist. */
	private Wishlist wishlist;

	private String productName;

	private String imageURL;

	/** The Variant id. */
	private String variantId;

	private String color;

	private String size;

	/** Quantity of the item. */
	private int quantity;

	/** The Price of the item. */
	private Double price;

	@ManyToOne
	@JoinColumn(name = "order_id")
	@JsonIgnore
	private PurchaseOrder purchaseOrder;

	private Long subtotal;

	/**
	 * Gets the Order Item Id.
	 *
	 * @return Order Item Id
	 */
	public Long getOrderItemId() {
		return orderItemId;
	}

	/**
	 * Sets the Order Item Id.
	 *
	 * @param orderItemId
	 */
	public void setOrderItemId(final Long orderItemId) {
		this.orderItemId = orderItemId;
	}

	/**
	 * Gets the Product id.
	 *
	 * @return Product id
	 */
	public String getProductId() {
		return productId;
	}

	/**
	 * Sets the Product id.
	 *
	 * @param productId
	 */
	public void setProductId(final String productId) {
		this.productId = productId;
	}

	/**
	 * Gets the Variant id.
	 *
	 * @return Variant id
	 */
	public String getVariantId() {
		return variantId;
	}

	public void setVariantId(final String variantId) {
		this.variantId = variantId;
	}

	/**
	 * Gets the Quantity of the item.
	 *
	 * @return Quantity of the item
	 */
	public int getQuantity() {
		return quantity;
	}

	/**
	 * Sets the Quantity of the item.
	 *
	 * @param quantity
	 */
	public void setQuantity(final int quantity) {
		this.quantity = quantity;
	}

	/**
	 * Gets the Price of the item.
	 *
	 * @return
	 */
	public Double getPrice() {
		return price;
	}

	/**
	 * Sets the Price of the item.
	 *
	 * @param price
	 */
	public void setPrice(final Double price) {
		this.price = price;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(final Cart cart) {
		this.cart = cart;
	}

	/**
	 * Gets the Wishlist.
	 *
	 * @return
	 */
	public Wishlist getWishlist() {
		return wishlist;
	}

	/**
	 * Sets the Wishlist.
	 *
	 * @param wishlist
	 */
	public void setWishlist(final Wishlist wishlist) {
		this.wishlist = wishlist;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(final String productName) {
		this.productName = productName;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(final String imageURL) {
		this.imageURL = imageURL;
	}

	public String getColor() {
		return color;
	}

	public void setColor(final String color) {
		this.color = color;
	}

	public String getSize() {
		return size;
	}

	public void setSize(final String size) {
		this.size = size;
	}

	public Long getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(final Long subtotal) {
		this.subtotal = subtotal;
	}

	public PurchaseOrder getPurchaseOrder() {
		return purchaseOrder;
	}

	public void setPurchaseOrder(final PurchaseOrder purchaseOrder) {
		this.purchaseOrder = purchaseOrder;
	}

}
