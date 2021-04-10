package com.nagarro.nagp.yara.claimmanagement.models-app.ordermanagement.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class OrderStatus {

	/** The Order Status Id. */
	@Id
	@GeneratedValue
	private Long orderStatusId;

	/** The Order Status Code. */
	private String orderStatusCode;

	/** The Order Status Description. */
	private String orderStatusDescription;

	/**
	 * Gets the Order Status Id.
	 * 
	 * @return Order Status Id
	 */
	public Long getOrderStatusId() {
		return orderStatusId;
	}

	/**
	 * Sets the Order Status Id.
	 * 
	 * @param orderStatusId
	 */
	public void setOrderStatusId(Long orderStatusId) {
		this.orderStatusId = orderStatusId;
	}

	/**
	 * Gets the Order Status Code.
	 * 
	 * @return Order Status Code
	 */
	public String getOrderStatusCode() {
		return orderStatusCode;
	}

	/**
	 * Sets the Order Status Code.
	 * 
	 * @param orderStatusCode
	 */
	public void setOrderStatusCode(String orderStatusCode) {
		this.orderStatusCode = orderStatusCode;
	}

	/**
	 * Gets the Order Status Description.
	 * 
	 * @return
	 */
	public String getOrderStatusDescription() {
		return orderStatusDescription;
	}

	/**
	 * Sets the Order Status Description.
	 * 
	 * @param orderStatusDescription
	 */
	public void setOrderStatusDescription(String orderStatusDescription) {
		this.orderStatusDescription = orderStatusDescription;
	}

}
