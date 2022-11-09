package kh.study.academy.intercepter;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
		
		
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal(); 
		
		User userDetails = (User)principal; 
		String username = userDetails.getUsername(); 
		
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + username);
		
		TeacherVO vo = new TeacherVO();
		vo.setTeacherId(username);
		
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" + teacherService.selectTeacherInfo(vo));
		request.setAttribute("teacher", teacherService.selectTeacherInfo(vo));
		
		
	}
	
	
	
}
