package kh.study.academy.teacher.controller;

import java.util.Random;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import ch.qos.logback.core.encoder.Encoder;
import kh.study.academy.config.TeacherRole;
import kh.study.academy.config.TeacherStatus;
import kh.study.academy.teacher.service.TeacherService;
import kh.study.academy.teacher.vo.TeacherVO;

@Controller
@RequestMapping("/teacher")
public class TeacherController {

	@Resource(name = "teacherService")
	private TeacherService teacherService;
	
	@Autowired
	private PasswordEncoder encoder;
	
	
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
		
		//Enum (Join메소드나 controller에서 사용)
		teacherVO.setTeacherStatus(TeacherStatus.Y.toString());
		teacherVO.setTeacherRole(TeacherRole.UNAPPROVED.toString());
		
		//pw암호화
		teacherVO.setTeacherPw(encoder.encode(teacherVO.getTeacherPw()));
		
		
		teacherService.join(teacherVO);
		
		return "redirect:/lesson/main";
		
	}
	
	
	@ResponseBody
	@PostMapping("/idDoubleCheckAjax")
	public TeacherVO idDoubleCheckAjax(TeacherVO teacherVO) {
		
		
		return teacherService.idDoubleCheck(teacherVO);
	}
	
	
	
	//로그인 페이지로 이동
	@GetMapping("/loginPage")
	public String loginPage() {
		
		
		return "content/teacher/login_page";
	}
	
	
	//로그인 진행
	@PostMapping("/login")
	public String login(TeacherVO teacherVO) {
		
		
		teacherService.login(teacherVO);
		
		
		return"redirect:/lesson/main";
	}
	
	//로그인정보 찾기 페이지로 이동
	@GetMapping("/findLoginPage")
	public String findLoginPage( ) {
		
		
		
		
		return "content/teacher/find_login";
	}
	
	
	
	
	//아이디 정보 찾기 에이작스
	@ResponseBody
	@PostMapping("/findLoginIdAjax")
	public TeacherVO findLoginIdAjax(TeacherVO teacherVO) {
		
		
		
		TeacherVO teacher =  teacherService.findId(teacherVO);
		
		System.out.println("@@@@@"+ teacher);
		
		
		
		if(teacher == null) {
			
			teacherVO = new TeacherVO();
			teacherVO.setCheck(0);
			return teacherVO;
		}else {
			teacher.setCheck(1);
			
			return teacher;
		
		}
	}
	
	
	
	
	
	//비밀번호 정보 찾기 에이작스
	@ResponseBody
	@PostMapping("/findLoginPwAjax")
	public TeacherVO findLoginPwAjax(TeacherVO teacherVO, Model model) {
		
		
		
		
		return null;
	}
}
