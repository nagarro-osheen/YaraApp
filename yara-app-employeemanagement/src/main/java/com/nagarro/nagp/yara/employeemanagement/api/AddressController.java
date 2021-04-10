package com.nagarro.nagp.yara.employeemanagement.api-app.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.nagp.yara-app.exception.models.BaseResponse;
import com.nagarro.nagp.yara-app.models.Address;
import com.nagarro.nagp.yara-app.services.IAddressService;

/**
 * The Class AddressController.
 */
@RestController
@RequestMapping("/users/{userId}/addresses")
@CrossOrigin(value = "http://localhost:4200")
public class AddressController {

	/** The user service. */
	@Autowired
	private IAddressService addressService;

	/**
	 * Gets the all user profiles.
	 *
	 * @param userId the user id
	 * @return the all user profiles
	 */
	@GetMapping("/")
	public BaseResponse<List<Address>> getAllAddresses(@PathVariable("userId") final Long userId) {
		return new BaseResponse<>(addressService.getAddressesByUserId(userId));
	}

	/**
	 * Adds the address.
	 *
	 * @param userId  the user id
	 * @param address the address
	 * @return the base response
	 */
	@PostMapping("/")
	public BaseResponse<Address> addAddress(@PathVariable("userId") final Long userId,
			@RequestBody final Address address) {
		return new BaseResponse<>(addressService.addAddress(userId, address));
	}

	/**
	 * Delete profile.
	 *
	 * @param userId the user id
	 * @param id     the id
	 */
	@DeleteMapping("/{id}")
	public void deleteProfile(@PathVariable("userId") final Long userId, @PathVariable("id") final Long id) {
		addressService.deleteAddress(id);
	}

	@DeleteMapping("/")
	public void deleteProfile(@PathVariable("userId") final Long userId) {
		addressService.deleteAddressByUserId(userId);
	}

	/**
	 * Edits the address.
	 *
	 * @param userId  the user id
	 * @param id      the id
	 * @param address the address
	 * @return the base response
	 */
	@PutMapping("/{id}")
	public BaseResponse<Address> editAddress(@PathVariable("userId") final Long userId,
			@PathVariable("id") final Long id, @RequestBody final Address address) {
		return new BaseResponse<>(addressService.editAddress(userId, id, address));
	}

}
