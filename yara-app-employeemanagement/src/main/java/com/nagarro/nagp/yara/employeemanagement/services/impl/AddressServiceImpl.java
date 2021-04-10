package com.nagarro.nagp.yara.employeemanagement.services.impl-app.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nagarro.nagp.yara-app.models.Address;
import com.nagarro.nagp.yara-app.models.UserProfile;
import com.nagarro.nagp.yara-app.repositories.AddressRepository;
import com.nagarro.nagp.yara-app.services.IAddressService;

/**
 * The Class AddressServiceImpl.
 */
@Service
public class AddressServiceImpl implements IAddressService {

	/** The address repo. */
	@Autowired
	private AddressRepository addressRepo;

	@Override
	public List<Address> getAddressesByUserId(final Long userId) {
		return addressRepo.findByUserId(userId);
	}

	@Override
	public Address addAddress(final Long userId, final Address address) {
		address.setUser(new UserProfile(userId));
		return this.addressRepo.save(address);
	}

	@Override
	public Address editAddress(final Long userProfileId, final Long addressId, final Address address) {
		address.setUser(new UserProfile(userProfileId));
		address.setId(addressId);
		return this.addressRepo.save(address);
	}

	@Override
	public void deleteAddress(final Long addressId) {
		this.addressRepo.deleteById(addressId);
	}

	@Override
	@Transactional
	public void deleteAddressByUserId(final Long userId) {
		this.addressRepo.deleteAllByUserId(userId);
	}

}