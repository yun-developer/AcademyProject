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
		//언제 인터셉트를 실행할건지
				.addPathPatterns("/teacher/**")	//전체
				.excludePathPatterns("/teacher/findLoginIdAjax");
				//Ajax와 충돌하므로 제외)
			//	.excludePathPatterns("/**/**Ajax"); //하나하나 다 걸러내면 너무 많아서 Ajax기능일때는 요청에 Ajax를 넣어주기
		
		registry.addInterceptor(getMenuIntercepter())
		//언제 인터셉트를 실행할건지
				.addPathPatterns("/**/**")	//전체
				.excludePathPatterns("/teacher/findLoginIdAjax");
				//Ajax와 충돌하므로 제외)
			//	.excludePathPatterns("/**/**Ajax"); //하나하나 다 걸러내면 너무 많아서 Ajax기능일때는 요청에 Ajax를 넣어주기
		
	
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
