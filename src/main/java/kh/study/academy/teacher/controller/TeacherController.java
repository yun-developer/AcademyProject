package kh.study.academy.teacher.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
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
	@PostMapping("/join")
	public String join(TeacherVO teacherVO) {
		
		
		//
		
		
		
		teacherService.join(teacherVO);
		
		return null;
		
	}
	
}
