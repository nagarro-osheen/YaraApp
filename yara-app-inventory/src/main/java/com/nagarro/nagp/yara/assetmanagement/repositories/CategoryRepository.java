package com.nagarro.nagp.yara.assetmanagement.repositories-app.inventory.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.nagarro.nagp.yara-app.inventory.document.Category;

public interface CategoryRepository extends MongoRepository<Category, String>{

}
