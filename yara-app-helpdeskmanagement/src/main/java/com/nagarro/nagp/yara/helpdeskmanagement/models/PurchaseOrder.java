package com.nagarro.nagp.yara.helpdeskmanagement.models-app.ordermanagement.models;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;

import com.nagarro.nagp.yara-app.datasource.mysql.config.LocalDateTimeConverter;

@Entity
public class PurchaseOrder {

	@Id
	@GeneratedValue
	private Long orderId;

	private Long userId;

	private String createdBy;

	@Convert(converter = LocalDateTimeConverter.class)
	private LocalDateTime createdTime;

	@Convert(converter = LocalDateTimeConverter.class)
	private LocalDateTime modifiedTime;

	@OneToMany(mappedBy = "purchaseOrder")
	private List<OrderItem> orderItems;

	@Lob
	private String notes;

	@OneToMany(mappedBy = "order")
	private List<Address> addresses;

	public PurchaseOrder() {

	}

	public PurchaseOrder(final Long id) {
		this.orderId = id;
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(final Long orderId) {
		this.orderId = orderId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(final Long userId) {
		this.userId = userId;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(final String createdBy) {
		this.createdBy = createdBy;
	}

	public LocalDateTime getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(final LocalDateTime createdTime) {
		this.createdTime = createdTime;
	}

	public LocalDateTime getModifiedTime() {
		return modifiedTime;
	}

	public void setModifiedTime(final LocalDateTime modifiedTime) {
		this.modifiedTime = modifiedTime;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(final String notes) {
		this.notes = notes;
	}

	public List<OrderItem> getOrderItems() {
		return orderItems;
	}

	public void setOrderItems(final List<OrderItem> orderItems) {
		this.orderItems = orderItems;
	}

	public List<Address> getAddresses() {
		return addresses;
	}

	public void setAddresses(final List<Address> addresses) {
		this.addresses = addresses;
	}

}
