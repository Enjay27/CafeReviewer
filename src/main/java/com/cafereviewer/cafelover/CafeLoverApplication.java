package com.cafereviewer.cafelover;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class CafeLoverApplication {

	private static final String PROPERTIES =
			"spring.config.location="
					+"classpath:/application.yml"
					+",classpath:/secret.yml";

	public static void main(String[] args) {
		new SpringApplicationBuilder(CafeLoverApplication.class)
				.properties(PROPERTIES)
				.run(args);
	}

}
