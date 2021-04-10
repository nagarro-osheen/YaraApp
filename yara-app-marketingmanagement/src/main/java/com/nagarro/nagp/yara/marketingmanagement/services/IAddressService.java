package com.nagarro.nagp.yara.marketingmanagement.services-app.ordermanagement.services;

import java.util.List;

import com.nagarro.nagp.yara-app.ordermanagement.models.Address;

public interface IAddressService {

	void updateAddressesWithOrder(List<Address> addresses, Long orderId);

}
