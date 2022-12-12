package kh.study.academy.intercepter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class IntercepterConfig implements WebMvcConfigurer{

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		
		registry.addInterceptor(getSubjectIntercepter())
		//인터셉터 실행 경로
				.addPathPatterns("/teacher/**")	//전체
				.addPathPatterns("/stu/popup")	//전체
				.excludePathPatterns("/teacher/findLoginIdAjax");
				//Ajax와 충돌하므로 제외)
		
		registry.addInterceptor(getMenuIntercepter())
				.addPathPatterns("/**/**")	//전체
				.excludePathPatterns("/teacher/findLoginIdAjax");
	}
	
	@Bean
	public SubjectIntercepter getSubjectIntercepter() {
		
		return new SubjectIntercepter();
	}
	
	@Bean
	public MenuIntercepter getMenuIntercepter() {
		
		return new MenuIntercepter();
	}
	
}
