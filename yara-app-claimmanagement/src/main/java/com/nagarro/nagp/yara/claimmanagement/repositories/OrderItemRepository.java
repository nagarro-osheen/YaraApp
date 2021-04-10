package com.nagarro.nagp.yara.claimmanagement.repositories-app.ordermanagement.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.nagarro.nagp.yara-app.ordermanagement.models.Cart;
import com.nagarro.nagp.yara-app.ordermanagement.models.OrderItem;
import com.nagarro.nagp.yara-app.ordermanagement.models.Wishlist;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

	public Cart findByCart(Long id);

	@Modifying
	void deleteAllByCart(Cart cart);

	@Modifying
	@Query("delete from OrderItem o where o.wishlist = ?1 and o.productId = ?2 and o.variantId = ?3")
	void deleteByWishlistAndProductAndVariant(Wishlist wishlist, String productId, String variantId);

}
