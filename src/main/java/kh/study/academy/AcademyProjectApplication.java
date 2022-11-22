package kh.study.academy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class AcademyProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(AcademyProjectApplication.class, args);
	}

}
