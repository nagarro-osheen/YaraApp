package com.nagarro.nagp.yara.ideasmanagement.models-app.ordermanagement.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * The Class Guest User Profile.
 */
@Entity
public class GuestUser {

	/** The Guest User Id. */
	@Id
	@GeneratedValue
	private Long guestUserId;

	/** The Guest User Email. */
	private String email;

	/** The Guest User First Name. */
	private String firstName;

	/** The Guest User Last Name. */
	private String lastName;

	/** The Guest User Phone Number. */
	private String phoneNumber;

	/**
	 * Gets the Guest User Id.
	 * 
	 * @return Guest User Id
	 */
	public Long getGuestUserId() {
		return guestUserId;
	}

	/**
	 * Sets the Guest User Id.
	 * 
	 * @param guestUserId
	 */
	public void setGuestUserId(Long guestUserId) {
		this.guestUserId = guestUserId;
	}

	/**
	 * Gets the Guest User Email.
	 * 
	 * @return Guest User Email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * Sets the Guest User Email.
	 * 
	 * @param email
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * Gets the Guest User First Name.
	 * 
	 * @return Guest User First Name
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * Sets the Guest User First Name.
	 * 
	 * @param firstName
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * Gets the Guest User Last Name.
	 * 
	 * @return Guest User Last Name
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * Sets the Guest User Last Name.
	 * 
	 * @param lastName
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	/**
	 * Gets the Guest User Phone Number.
	 * 
	 * @return Guest User Phone Number
	 */
	public String getPhoneNumber() {
		return phoneNumber;
	}

	/**
	 * Sets the Guest User Phone Number.
	 * 
	 * @param phoneNumber
	 */
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
}
