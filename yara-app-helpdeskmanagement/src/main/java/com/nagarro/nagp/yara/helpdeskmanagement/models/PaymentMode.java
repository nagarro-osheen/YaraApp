package com.nagarro.nagp.yara.helpdeskmanagement.models-app.ordermanagement.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class PaymentMode {
	
	/** The Payment Mode Id. */
	@Id
	@GeneratedValue
	private Long orderStatusId;

	public Long getOrderStatusId() {
		return orderStatusId;
	}

	public void setOrderStatusId(Long orderStatusId) {
		this.orderStatusId = orderStatusId;
	}
	
	

}
