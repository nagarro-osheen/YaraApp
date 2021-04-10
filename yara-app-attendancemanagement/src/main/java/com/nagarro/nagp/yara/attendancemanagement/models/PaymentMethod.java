package com.nagarro.nagp.yara.attendancemanagement.models-app.ordermanagement.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class PaymentMethod {

	@Id
	@GeneratedValue
	private Long paymentMethodId;

	private String displayValue;

	@Lob
	private String description;

	private String imageUrl;

	public Long getPaymentMethodId() {
		return paymentMethodId;
	}

	public void setPaymentMethodId(final Long paymentMethodId) {
		this.paymentMethodId = paymentMethodId;
	}

	public String getDisplayValue() {
		return displayValue;
	}

	public void setDisplayValue(final String displayValue) {
		this.displayValue = displayValue;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(final String description) {
		this.description = description;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(final String imageUrl) {
		this.imageUrl = imageUrl;
	}

}
