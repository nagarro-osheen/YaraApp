package com.nagarro.nagp.yara.models-app.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * The Class Address.
 */
@Entity
public class Address {

	/** The id. */
	@Id
	@GeneratedValue
	private Long id;

	/** The first name. */
	private String firstName;

	/** The last name. */
	private String lastName;

	/** The company. */
	private String company;

	/** The country. */
	private String country;

	/** The city. */
	private String city;

	/** The state. */
	private String state;

	/** The postal code. */
	private String postalCode;

	/** The billing address. */
	private boolean billingAddress;

	/** The shipping address. */
	private boolean shippingAddress;

	private String addressValue;

	private String email;

	private String phone;

	@ManyToOne
	@JoinColumn(name = "user_id")
	@JsonIgnore
	private UserProfile user;

	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	public Long getId() {
		return id;
	}

	/**
	 * Sets the id.
	 *
	 * @param id the new id
	 */
	public void setId(final Long id) {
		this.id = id;
	}

	/**
	 * Gets the first name.
	 *
	 * @return the first name
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * Sets the first name.
	 *
	 * @param firstName the new first name
	 */
	public void setFirstName(final String firstName) {
		this.firstName = firstName;
	}

	/**
	 * Gets the last name.
	 *
	 * @return the last name
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * Sets the last name.
	 *
	 * @param lastName the new last name
	 */
	public void setLastName(final String lastName) {
		this.lastName = lastName;
	}

	/**
	 * Gets the company.
	 *
	 * @return the company
	 */
	public String getCompany() {
		return company;
	}

	/**
	 * Sets the company.
	 *
	 * @param company the new company
	 */
	public void setCompany(final String company) {
		this.company = company;
	}

	/**
	 * Gets the country.
	 *
	 * @return the country
	 */
	public String getCountry() {
		return country;
	}

	/**
	 * Sets the country.
	 *
	 * @param country the new country
	 */
	public void setCountry(final String country) {
		this.country = country;
	}

	/**
	 * Gets the city.
	 *
	 * @return the city
	 */
	public String getCity() {
		return city;
	}

	/**
	 * Sets the city.
	 *
	 * @param city the new city
	 */
	public void setCity(final String city) {
		this.city = city;
	}

	/**
	 * Gets the state.
	 *
	 * @return the state
	 */
	public String getState() {
		return state;
	}

	/**
	 * Sets the state.
	 *
	 * @param state the new state
	 */
	public void setState(final String state) {
		this.state = state;
	}

	/**
	 * Gets the postal code.
	 *
	 * @return the postal code
	 */
	public String getPostalCode() {
		return postalCode;
	}

	/**
	 * Sets the postal code.
	 *
	 * @param postalCode the new postal code
	 */
	public void setPostalCode(final String postalCode) {
		this.postalCode = postalCode;
	}

	/**
	 * Checks if is billing address.
	 *
	 * @return true, if is billing address
	 */
	public boolean isBillingAddress() {
		return billingAddress;
	}

	/**
	 * Sets the billing address.
	 *
	 * @param billingAddress the new billing address
	 */
	public void setBillingAddress(final boolean billingAddress) {
		this.billingAddress = billingAddress;
	}

	/**
	 * Checks if is shipping address.
	 *
	 * @return true, if is shipping address
	 */
	public boolean isShippingAddress() {
		return shippingAddress;
	}

	/**
	 * Sets the shipping address.
	 *
	 * @param shippingAddress the new shipping address
	 */
	public void setShippingAddress(final boolean shippingAddress) {
		this.shippingAddress = shippingAddress;
	}

	public UserProfile getUser() {
		return user;
	}

	/**
	 * Sets the user.
	 *
	 * @param user the new user
	 */
	public void setUser(final UserProfile user) {
		this.user = user;
	}

	public String getAddressValue() {
		return addressValue;
	}

	public void setAddressValue(final String addressValue) {
		this.addressValue = addressValue;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(final String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(final String phone) {
		this.phone = phone;
	}

}