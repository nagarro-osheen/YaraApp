package com.nagarro.nagp.yara.claimmanagement.services.impl-app.ordermanagement.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.nagp.yara-app.ordermanagement.models.Address;
import com.nagarro.nagp.yara-app.ordermanagement.models.PurchaseOrder;
import com.nagarro.nagp.yara-app.ordermanagement.repositories.AddressRepository;
import com.nagarro.nagp.yara-app.ordermanagement.services.IAddressService;

@Service
public class AddressServiceImpl implements IAddressService {

	@Autowired
	private AddressRepository addressRepository;

	@Override
	public void updateAddressesWithOrder(final List<Address> addresses, final Long orderId) {
		addresses.stream().forEach(address -> {
			address.setId(null);
			address.setOrder(new PurchaseOrder(orderId));
		});
		addressRepository.saveAll(addresses);
	}

}
