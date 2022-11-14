package kh.study.academy.intercepter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import kh.study.academy.admin.service.AdminService;

public class MenuIntercepter implements HandlerInterceptor {


	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		//???
		//처음에는 아무것도 전해주고 싶지 않다면?
		//값을 받은 이후에는 그 값을 전달
		String menu = request.getParameter("menu");
		
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+menu);
		
		if(menu == null) {
			
			request.setAttribute("menu", null);
		}
		else {
			
			request.setAttribute("menu", menu);
		}
		
	}
	
	
	
}
