package com.nagarro.nagp.yara.employeemanagement.services-app.services;

import java.util.List;

import com.nagarro.nagp.yara-app.models.Address;

/**
 * The Interface IAddressService.
 */
public interface IAddressService {

	/**
	 * Gets the addresses by user id.
	 *
	 * @param userId the user id
	 * @return the addresses by user id
	 */
	public List<Address> getAddressesByUserId(Long userId);

	/**
	 * Edits the address.
	 * 
	 * @param userProfileId TODO
	 * @param addressId     the address id
	 * @param address       the address
	 *
	 * @return the address
	 */
	public Address editAddress(Long userProfileId, final Long addressId, final Address address);

	/**
	 * Delete address.
	 *
	 * @param addressId the address id
	 */
	public void deleteAddress(Long addressId);

	/**
	 * Adds the address.
	 *
	 * @param userId  the user id
	 * @param address the address
	 * @return the address
	 */
	Address addAddress(Long userId, Address address);

	public void deleteAddressByUserId(Long userId);

}
