package com.nagarro.nagp.yara.assetmanagement.api-app.inventory.api;

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
import com.nagarro.nagp.yara-app.inventory.document.Category;
import com.nagarro.nagp.yara-app.inventory.services.ICategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin(value = "http://localhost:4200")
public class CategoryController {

	@Autowired
	private ICategoryService categoryService;

	@GetMapping("/")
	public BaseResponse<List<Category>> getAllCategories() {
		return new BaseResponse<>(categoryService.getAllCategories());
	}

	@GetMapping("/{id}")
	public BaseResponse<Category> getAllCategories(@PathVariable("id") final String id) {
		return new BaseResponse<Category>(categoryService.getCategory(id));
	}

//	@GetMapping("/{id}")
//	public BaseResponse<Category> getCategoryById() {
//
//	}
//
//	@GetMapping("{parent}")
//	public BaseResponse<Category> getChildrenCategory() {
//
//	}

	@PostMapping("/")
	public BaseResponse<Category> createCategory(@RequestBody final Category cat) {
		return new BaseResponse<>(categoryService.createCategory(cat));
	}

	@PutMapping("/{id}")
	public BaseResponse<Category> editCategory(@PathVariable final String id, @RequestBody final Category cat) {
		return new BaseResponse<>(categoryService.editCategory(id, cat));
	}

	@DeleteMapping("/{id}")
	public void deleteCategory(@PathVariable final String id) {
		categoryService.deleteCategory(id);
	}

}
