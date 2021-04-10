package com.nagarro.nagp.yara.approvalmanagement.models-app.ordermanagement.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Invoice {

	/** The Invoice Id. */
	@Id
	@GeneratedValue
	private Long invoiceId;

	/** The price. */
	private Long price;

	/** The Billing Address. */
	private Long billingAddressId;

	/** The Order id. */
	@ManyToOne
	@JoinColumn(name = "order_id")
	@JsonIgnore
	private PurchaseOrder orderId;

	/** The Coupon Id. */
	@ManyToOne
	@JoinColumn(name = "coupon_id")
	@JsonIgnore
	private PurchaseOrder couponId;

	/**
	 * Gets the Invoice Id.
	 * 
	 * @return Invoice Id
	 */
	public Long getInvoiceId() {
		return invoiceId;
	}

	/**
	 * Sets the Invoice Id.
	 *  
	 * @param invoiceId
	 */
	public void setInvoiceId(Long invoiceId) {
		this.invoiceId = invoiceId;
	}

	/**
	 * Gets the price.
	 * 
	 * @return price
	 */
	public Long getPrice() {
		return price;
	}

	/**
	 * Sets the price.
	 * 
	 * @param price
	 */
	public void setPrice(Long price) {
		this.price = price;
	}

	/**
	 * Gets the Billing Address.
	 * 
	 * @return Billing Address
	 */
	public Long getBillingAddressId() {
		return billingAddressId;
	}

	/**
	 * Sets the Billing Address.
	 * 
	 * @param billingAddressId
	 */
	public void setBillingAddressId(Long billingAddressId) {
		this.billingAddressId = billingAddressId;
	}

	/**
	 * Gets the order.
	 * 
	 * @return order
	 */
	public PurchaseOrder getOrderId() {
		return orderId;
	}

	/**
	 * Sets the order.
	 * 
	 * @param orderId
	 */
	public void setOrderId(PurchaseOrder orderId) {
		this.orderId = orderId;
	}

	/**
	 * Gets the addresses.
	 * 
	 * @return
	 */
	public PurchaseOrder getCouponId() {
		return couponId;
	}

	/**
	 * Sets the addresses.
	 * 
	 * @param couponId
	 */
	public void setCouponId(PurchaseOrder couponId) {
		this.couponId = couponId;
	}
}
