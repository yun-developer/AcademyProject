package kh.study.academy.intercepter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import kh.study.academy.teacher.service.TeacherService;
import kh.study.academy.teacher.vo.TeacherVO;

public class teacherInfoIntercepter implements HandlerInterceptor {

	@Resource(name = "teacherService")
	private TeacherService teacherService; 

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		
		//request.setAttribute("teacher", teacherService.selectTeacherInfo(null));
//		System.out.println("1111111111111111111");
//		
//		
//		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//		
//		
//		
//		if(authentication.getPrincipal() == null) {
//			System.out.println("12");
//		}
//		else {
//			System.out.println("34");
//		}
//		
//		
//		
//		
////		User user = (User)authentication.getPrincipal();
//		String user = (String)authentication.getPrincipal();
//		
//		
//		
//		
//		System.out.println("!!!!" + user);
//		if(user == null){
//			System.out.println("!@!@!@!@!@!");
//		}
//		System.out.println("2222222222222222222222222");
//		
		
		
		
//		if(user.getUsername() == null) {
//			System.out.println("33333333");
//		}
//		String username = user.getUsername(); 
//		
//		System.out.println("32432432432" + username);
		
		
//		TeacherVO vo = new TeacherVO();
//		vo.setTeacherId(username);
//		
//		request.setAttribute("teacher", teacherService.selectTeacherInfo(vo));
		
		
	}
	
	
	
}
