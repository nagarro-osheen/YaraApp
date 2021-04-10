package com.nagarro.nagp.yara.assetmanagement.services.impl-app.inventory.services.impl;

import java.util.List;
import java.util.NoSuchElementException;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.nagarro.nagp.yara-app.inventory.document.Category;
import com.nagarro.nagp.yara-app.inventory.repositories.CategoryRepository;
import com.nagarro.nagp.yara-app.inventory.services.ICategoryService;

@Component
public class CategoryServiceImpl implements ICategoryService{

	@Autowired
	private CategoryRepository categoryRepo;
	
	@Override
	public List<Category> getAllCategories() {
		// TODO Auto-generated method stub
		return categoryRepo.findAll();
	}
	
	@Override
	public Category getCategoryById(String id) {
		try {
			return categoryRepo.findById(id).get();
		}catch(NoSuchElementException nse) {
			return null;
		}
	}


	//@Override
//	public List<Category> getChildrenCategory(String parent) {
//		try {
//			// to do : remove the below line
//		
//		//	return categoryRepo.find
//		}catch(NoSuchElementException nse) {
//			return null;
//		}
//	}

	
	@Override
	public Category createCategory(Category cat) {
			return this.categoryRepo.save(cat);
	}

	@Override
	public Category editCategory(String id, Category cat) {
		cat.setId(id);
		return this.categoryRepo.save(cat);
	}

	
	public void deleteCategory(String id) {
		this.categoryRepo.deleteById(id);
	}

	@Override
	public Category getCategory(String id) {
		return this.categoryRepo.findById(id).get();
	}

	


	

}
