package com.nagarro.nagp.yara.employeemanagement.models-app.models;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.nagarro.nagp.yara-app.datasource.mysql.config.LocalDateConverter;

/**
 * The Class UserProfile.
 */
@Entity
public class UserProfile {

	/** The id. */
	@Id
	@GeneratedValue
	private Long id;

	/** The first name. */
	private String firstName;

	/** The last name. */
	private String lastName;

	/** The email. */
	private String email;

	/** The phone. */
	private String phone;

	/** The image. */
	private String image;

	private String userId;

	@Convert(converter = LocalDateConverter.class)
	private LocalDate dob;

	private String title;

	/** The addresses. */
	@OneToMany(mappedBy = "user")
	private List<Address> addresses;

	/**
	 * Instantiates a new user profile.
	 */
	public UserProfile() {

	}

	/**
	 * Instantiates a new user profile.
	 *
	 * @param id the id
	 */
	public UserProfile(final Long id) {
		super();
		this.id = id;
	}

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
	 * Gets the email.
	 *
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * Sets the email.
	 *
	 * @param email the new email
	 */
	public void setEmail(final String email) {
		this.email = email;
	}

	/**
	 * Gets the phone.
	 *
	 * @return the phone
	 */
	public String getPhone() {
		return phone;
	}

	/**
	 * Sets the phone.
	 *
	 * @param phone the new phone
	 */
	public void setPhone(final String phone) {
		this.phone = phone;
	}

	/**
	 * Gets the image.
	 *
	 * @return the image
	 */
	public String getImage() {
		return image;
	}

	/**
	 * Sets the image.
	 *
	 * @param image the new image
	 */
	public void setImage(final String image) {
		this.image = image;
	}

	/**
	 * Gets the addresses.
	 *
	 * @return the addresses
	 */
	public List<Address> getAddresses() {
		return addresses;
	}

	/**
	 * Sets the addresses.
	 *
	 * @param addresses the new addresses
	 */
	public void setAddresses(final List<Address> addresses) {
		this.addresses = addresses;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(final String userId) {
		this.userId = userId;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(final LocalDate dob) {
		this.dob = dob;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(final String title) {
		this.title = title;
	}

}