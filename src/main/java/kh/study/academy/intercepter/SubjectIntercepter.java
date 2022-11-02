package kh.study.academy.intercepter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import kh.study.academy.admin.service.AdminService;

public class SubjectIntercepter implements HandlerInterceptor {

	@Resource(name = "adminService")
	private AdminService adminService;

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		System.out.println("과목목록 인터셉터 실행");
		request.setAttribute("subjectList", adminService.selectSubject());
		
	}
	
	
	
}
