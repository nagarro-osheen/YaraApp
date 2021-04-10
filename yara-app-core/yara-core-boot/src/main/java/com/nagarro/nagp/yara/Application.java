package com.nagarro.nagp.yara;

import java.util.TimeZone;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.web.client.RestTemplate;

/**
 * The main entry class for any deployable service.
 */
@SpringBootApplication(scanBasePackages = "com.nagarro") // Base package.
@EnableAsync
@EnableDiscoveryClient
public class Application {

	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(Application.class);

	/**
	 * Set application's timezone as UTC.
	 */
	private static void setUTCTimeZone() {
		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}

	/**
	 * The main method.
	 *
	 * @param args the arguments
	 */
	public static void main(final String[] args) {
		setUTCTimeZone();
		LOGGER.info("Running the YaraApp Service - Spring Boot Application");
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public RestTemplate restTemplate(final RestTemplateBuilder restTemplateBuilder) {
		return restTemplateBuilder.build();
	}

	/*
	 * @Bean public WebMvcConfigurer corsConfigurer() { return new
	 * WebMvcConfigurer() {
	 *
	 * @Override public void addCorsMappings(final CorsRegistry registry) {
	 * registry.addMapping("/**").allowedOrigins("http://localhost:4200"); } }; }
	 */
}
