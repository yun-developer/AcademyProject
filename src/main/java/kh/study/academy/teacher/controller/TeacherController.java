package kh.study.academy.teacher.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.teacher.service.TeacherService;
import kh.study.academy.teacher.vo.TeacherVO;

@Controller
@RequestMapping("/teacher")
public class TeacherController {

	@Resource(name = "teacherService")
	private TeacherService teacherService;
	
	
	
	
	//회원가입
	@GetMapping("/joinPage")
	public String join(TeacherVO teacherVO) {
		
		
		
		teacherService.join(teacherVO);
		
		return "content/teacher/join_page";
		
	}
	
	//로그인
	@GetMapping("/login")
	public String login() {
		
		return "content/teacher/login_page";
	}
	
}
