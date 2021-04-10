
package com.nagarro.nagp.yara.assetmanagement.services-app.inventory.services;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import com.nagarro.nagp.yara-app.inventory.document.Category;

public interface ICategoryService {
	
	public List<Category> getAllCategories();
	
	public Category getCategoryById(String id);
	
	//public List<Category> ObjectId(String parent); 
	
	public Category createCategory(Category cat);
	
	public Category editCategory(String id, Category cat);
	
	public void deleteCategory(String id);

	public Category getCategory(String id);
}
