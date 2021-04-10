package com.nagarro.nagp.yara.assetmanagement.document-app.inventory.document;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Category {

	/**
	 * The id.
	 */
	@Id
	private String id;

	/** The first name */
	private String name;

	/** The path of category */
	private String path;

	/** The parent of the category */
	private String parent;

//	@DBRef
//	private List<Variants> variants;
	public Category() {}

	public Category(String id, String name, String path, String parent) {
		super();
		this.id = id;
		this.name = name;
		this.path = path;
		this.parent = parent;
	}

	/**
	 * Gets the id
	 * 
	 * @return id
	 */
	public String getId() {
		return id;
	}

	/**
	 * Sets the id
	 * 
	 * @param id is the new id
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * Gets the name of the category
	 * 
	 * @return name of the category
	 */
	public String getName() {
		return name;
	}

	/**
	 * Sets the name of the category
	 * 
	 * @param name
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * Gets the path of the category
	 * 
	 * @return path of category
	 */
	public String getPath() {
		return path;
	}

	/**
	 * Sets the path of category
	 * 
	 * @param path
	 */
	public void setPath(String path) {
		this.path = path;
	}

	/**
	 * Gets the parent of the category
	 * 
	 * @return parent
	 */
	public String getParent() {
		return parent;
	}

	/**
	 * Sets the parent of the category
	 * 
	 * @param parent
	 */
	public void setParent(String parent) {
		this.parent = parent;
	}

}
