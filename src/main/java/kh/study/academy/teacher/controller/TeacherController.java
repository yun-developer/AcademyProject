package kh.study.academy.teacher.controller;

import java.util.Random;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import ch.qos.logback.core.encoder.Encoder;
import kh.study.academy.config.TeacherRole;
import kh.study.academy.config.TeacherStatus;
import kh.study.academy.config.UploadFileUtil;
import kh.study.academy.teacher.service.TeacherService;
import kh.study.academy.teacher.vo.ProfileImgVO;
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

		//다음에 들어갈 티쳐코드
		String nextTeacherCode =teacherService.selectNextTeacherCode();
		
		teacherVO.setTeacherCode(nextTeacherCode);
		teacherService.join(teacherVO);
		
		ProfileImgVO imgVO = new ProfileImgVO();
		imgVO.setTeacherCode(nextTeacherCode);
		imgVO.setOriginFileName("defaultProfile.jpg");
		imgVO.setStoredFileName("defaultProfile.jpg");
	
		teacherService.insertProfileImg(imgVO);
		
		return "redirect:/lesson/main";
		
	}
	
	//아이디 중복 체크 결과 Ajax
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
	
	
	//이메일로 찾기 눌렀을 때 
	@ResponseBody
	@PostMapping("/findByEmailAjax")
	public void findByEmailAjax() {
		
	}
	
	
	//전화번호로 찾기 눌렀을 때 
	@ResponseBody
	@PostMapping("/findByTellAjax")
	public void findByTellAjax() {
		
	}
	
	
	//비밀번호 정보 찾기 에이작스
	@ResponseBody
	@PostMapping("/findLoginPwAjax")
	public TeacherVO findLoginPwAjax(TeacherVO teacherVO, Model model) {
		
		
		
		
		return null;
	}
	
	//회원정보 조회
	@GetMapping("/selectInfo")
	public String selectTeacherInfo(Authentication authentication, Model model) {
		
		//주문자 정보
		//security에 저장한 정보 사용
		//로그인한 유저의 정보를 가져 옴
		User user = (User)authentication.getPrincipal();
		TeacherVO teacherVO = new TeacherVO();
		teacherVO.setTeacherId(user.getUsername());
		
		model.addAttribute("teacher", teacherService.selectTeacherInfo(teacherVO));
		
		return "content/teacher/teacher_info";
		
	}
	
	//프로필 이미지 커스텀등록
	@PostMapping("/insertProfileImg")
	public String insertProfileImg(ProfileImgVO profileImgVO, MultipartFile profileImg)  {
		
		//단일 이미지 파일 첨부 (메인이미지) --> 첨부파일명 리턴
		ProfileImgVO uploadInfo =  UploadFileUtil.uploadFile(profileImg);
		
		uploadInfo.setTeacherCode(profileImgVO.getTeacherCode());
		
		teacherService.insertProfileImg(uploadInfo);
		
		return "redirect:/teacher/selectInfo";
	}
	
	
	
}
