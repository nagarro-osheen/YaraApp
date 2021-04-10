package com.nagarro.nagp.yara.marketingmanagement.config-app.inventory.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.nagarro.nagp.yara-app.inventory.document.Product;
import com.nagarro.nagp.yara-app.inventory.repositories.ProductRepository;

@EnableMongoRepositories(basePackages="com.nagarro.nagp")
@Configuration
public class MongoConfig {

}
