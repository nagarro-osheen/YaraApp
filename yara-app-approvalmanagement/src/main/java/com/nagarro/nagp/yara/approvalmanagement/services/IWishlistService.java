package com.nagarro.nagp.yara.approvalmanagement.services-app.ordermanagement.services;

import java.util.List;

import com.nagarro.nagp.yara-app.ordermanagement.models.OrderItem;
import com.nagarro.nagp.yara-app.ordermanagement.models.Wishlist;


public interface IWishlistService {
	
	public List<OrderItem> getWishlistItems(final Long id);

	public Wishlist addProductsToWishlist(Long id, OrderItem orderItem);
	
	public List<OrderItem> editWishlist(Long id, OrderItem orderItem);
	
}
