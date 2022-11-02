package kh.study.academy.teacher.controller;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.study.academy.teacher.service.TeacherService;
import kh.study.academy.teacher.vo.TeacherVO;

@Controller
@RequestMapping("/teacher")
public class TeacherController {

	@Resource(name = "teacherService")
	private TeacherService teacherService;
	
	
	
	
	//회원가입 페이지이동
	@GetMapping("/joinPage")
	public String joinPage(TeacherVO teacherVO) {
		
		return "content/teacher/join_page";
	}
	//회원가입 진행
	@PostMapping("/join")
	public String join(@Valid TeacherVO teacherVO
						, BindingResult bindingResult
						, Model model) {
		
		//validation 체크
		if(bindingResult.hasErrors()) {
			System.out.println("~~~error~~~");
			return "content/teacher/join_page";
		}
		
		teacherService.join(teacherVO);
		
		return "redirect:/lesson/main";
		
	}
	
	
	//로그인 페이지로 이동
	@GetMapping("/loginPage")
	public String loginPage() {
		
		
		return "content/teacher/login_page";
	}
	
	
	//로그인 진행
	@PostMapping("login")
	public String login(TeacherVO teacherVO) {
		
		
		teacherService.login(teacherVO);
		
		
		return"redirect:/lesson/main";
	}
	
	//로그인정보 찾기 페이지로 이동
	@GetMapping("findLoginPage")
	public String findLoginPage( ) {
		
		
		
		
		
		return "content/teacher/find_login";
	}
	
	
	
	
	//로그인정보 찾기 에이작스
	@ResponseBody
	@PostMapping("/findLoginAjax")
	public void findLoginAjax(TeacherVO teacherVO) {
		
		teacherService.findLogin(teacherVO);
		
	}
	
	
}
