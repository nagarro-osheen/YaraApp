package com.nagarro.nagp.yara.claimmanagement.api-app.ordermanagement.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.nagp.yara-app.exception.models.BaseResponse;
import com.nagarro.nagp.yara-app.ordermanagement.models.OrderItem;
import com.nagarro.nagp.yara-app.ordermanagement.models.Wishlist;
import com.nagarro.nagp.yara-app.ordermanagement.services.IWishlistService;

@RestController
@RequestMapping("/wishlist")
public class WishlistController {
	
	/** The cart service. */
	@Autowired
	private IWishlistService wishlistService;

	/**
	 * Gets the order items in the cart.
	 *
	 * @param id the id
	 * @return the user profile by id
	 */
	@GetMapping("/{id}")
	public List<OrderItem> getWishlistItems(@PathVariable("id") final Long id) {
		return wishlistService.getWishlistItems(id);
	}

	@PostMapping("/{id}")
	public BaseResponse<Wishlist> addProductsToWishlist(@PathVariable("id") final Long id,@RequestBody final OrderItem orderItem){
		return new BaseResponse<>(wishlistService.addProductsToWishlist(id,orderItem));
	}
	
	@PutMapping("/{id}")
	public List<OrderItem> editWishlist(@PathVariable Long id, @RequestBody OrderItem item) {
		return wishlistService.editWishlist(id, item);
	}
}
