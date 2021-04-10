package com.nagarro.nagp.yara.assetmanagement.repositories-app.inventory.repositories;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.nagarro.nagp.yara-app.inventory.document.Category;
import com.nagarro.nagp.yara-app.inventory.document.Product;
import com.nagarro.nagp.yara-app.inventory.document.ProductDTO;

public interface ProductRepository extends MongoRepository<Product, String>{

//	Product findById(ObjectId id);

	List<Product> findByFeaturedProduct(ObjectId id);
	
	// TO DO CHECK
    @Query("{variant.quantity : ?0}")
	List<Product> findByVariantQuantity(ObjectId id);
    
    List<Product> findByCategoryId(ObjectId id);
    
    long count();
}
