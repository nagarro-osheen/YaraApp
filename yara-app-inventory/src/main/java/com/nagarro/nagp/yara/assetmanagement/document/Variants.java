package com.nagarro.nagp.yara.assetmanagement.document-app.inventory.document;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


public class Variants {
	
	/**
	 * Id of variant
	 */
	@Id
	private ObjectId id;
	
	private String variantName;

	public ObjectId getId() {
		return id;
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getVariantName() {
		return variantName;
	}

	public void setVariantName(String variantName) {
		this.variantName = variantName;
	}
	
}
