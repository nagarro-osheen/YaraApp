package com.nagarro.nagp.yara.ideasmanagement.api-app.ordermanagement.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.nagp.yara-app.exception.models.BaseResponse;
import com.nagarro.nagp.yara-app.ordermanagement.models.Cart;
import com.nagarro.nagp.yara-app.ordermanagement.models.OrderItem;
import com.nagarro.nagp.yara-app.ordermanagement.services.ICartService;

@RestController
@RequestMapping("/cart")
@CrossOrigin(value = "http://localhost:4200")
public class CartController {

	/** The cart service. */
	@Autowired
	private ICartService cartService;

	/**
	 * Gets the order items in the cart.
	 *
	 * @param id the id
	 * @return the user profile by id
	 */
	@GetMapping("/{id}")
	public List<OrderItem> getCartItems(@PathVariable("id") final Long id) {
		return cartService.getItemsInCart(id);
	}

	@PostMapping("/{id}")
	public BaseResponse<Cart> addProductsToCart(@PathVariable("id") final Long id,
			@RequestBody final OrderItem orderItem) {
		return new BaseResponse<>(cartService.addProductsToCart(id, orderItem));
	}

	@PutMapping("/{id}")
	public List<OrderItem> editCart(@PathVariable final Long id, @RequestBody final Cart cart) {
		return cartService.editCart(id, cart);
	}

	@GetMapping("/user/{id}")
	public BaseResponse<Cart> getCartItemsByUserId(@PathVariable("id") final Long userId) {
		return new BaseResponse<>(cartService.getItemsInCartByUserId(userId));
	}

}
