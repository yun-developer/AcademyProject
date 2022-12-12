package kh.study.academy.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean //SecurityFilterChain securityFilterChain = ""; //내가 설정한 정보를 저장해둔다.
	public SecurityFilterChain filterChain(HttpSecurity security) throws Exception {
//		//↑메소드를 만드는 순간 모든 security가 풀려버림.
//		
	security.csrf().disable()  								//csrf위조 공격을 막기위한 기본 설정을 해제
						.authorizeRequests()							//인증, 인가에 대한 설정을 시작하겠다.
						
						.antMatchers("/teacher/joinPage"
								, "/teacher/join"
								, "/teacher/loginPage"
								, "/teacher/login"
								, "/teacher/loginResult"
								, "/teacher/findLoginPage"
								, "/teacher/findLoginIdAjax"
								, "/teacher/**Ajax"
								, "/board/noticeList"
								,"/lesson/mainChartAjax"
								, "/lesson/main").permitAll() //해당 요청들은 누구나 접근 가능.
						.antMatchers("/teacher/**"
									, "/board/**"
									, "/potatoChat/**"
									, "/lesson/**"
									, "/reply/**"
									, "/stu/**"
									, "/test/**"
									, "/statistics/**").hasAnyRole("TEACHER","ADMIN", "UNAPPROVED")	//"/xxxx" 요청은 TEACHER, ADMIN 권한이 필요(둘 중 하나라도 가능)
						.antMatchers("/admin/**").hasRole("ADMIN")			//"/admin" 요청은 ADMIN 권한이 필요
//						.anyRequest().authenticated()						//나머지 요청은 누구나 접근 가능. .anyRequest().authenticated() -> 인증 요구
					.and()
						.formLogin() 						//인증 및 인가가 없는 상태로 요청에 접근 시 로그인 페이지를 보여줌	(기본적으로 제공하는)		
						.loginPage("/teacher/loginPage")				//커스터마이징한 로그인 페이지 설정
						.defaultSuccessUrl("/teacher/loginResult")			//로그인 성공 시 요청경로
						.failureUrl("/teacher/loginResult")			//로그인 실패 시 요청경로
						.loginProcessingUrl("/teacher/login") //실제 로그인을 진행할 요청 정보. form태그의 경로와 맞춰준다. 기본적으로 "/login"처럼 진행
						.usernameParameter("teacherId")
						.passwordParameter("teacherPw")
					.and()
	 					.exceptionHandling()			
	 					.accessDeniedPage("/lesson/main")	//로그인 후 권한이 없는 페이지로 접근했을 때 보낼 요청
	 				.and()
	 					.logout()
	 					.invalidateHttpSession(true) 		//로그아웃되면 세션 데이터 삭제 (저절로 세션에 저장됨)
	 					.logoutSuccessUrl("/lesson/main");			//로그아웃 성공 시 요청경로
		
		
	
	
		return security.build();
	}
	
	@Bean
	public PasswordEncoder	passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	//css요청에 대한 인증 무시
	@Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
		return (web) -> web.ignoring().antMatchers("/bootstrap/**", "/js/**",  "/css/**", "/images/**", "/fullcalendar/**");
    }
	
	
}
