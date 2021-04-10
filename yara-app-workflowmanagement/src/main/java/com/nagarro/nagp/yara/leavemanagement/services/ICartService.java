package com.nagarro.nagp.yara.leavemanagement.services-app.ordermanagement.services;

import java.util.List;

import com.nagarro.nagp.yara-app.ordermanagement.models.Cart;
import com.nagarro.nagp.yara-app.ordermanagement.models.OrderItem;

public interface ICartService {

	public List<OrderItem> getItemsInCart(final Long id);

	public List<OrderItem> editCart(Long id, Cart cart);

	public Cart addProductsToCart(Long id, OrderItem orderItem);

	public Cart getItemsInCartByUserId(Long userId);
}
