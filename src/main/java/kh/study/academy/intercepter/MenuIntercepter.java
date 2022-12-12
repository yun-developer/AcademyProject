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

		String menu = request.getParameter("menu");
		
		if(menu == null) {
			
			request.setAttribute("menu", null);
		}
		else {
			
			request.setAttribute("menu", menu);
		}
		
	}
	
	
}
