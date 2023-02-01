package com.todo.javafullstack;

import com.todo.javafullstack.respositories.TodoRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class JavaFullstackApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaFullstackApplication.class, args);
	}

}
