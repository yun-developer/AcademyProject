package kh.study.academy.admin.controller;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.admin.service.AdminService;
import kh.study.academy.admin.vo.LessonRoomVO;
import kh.study.academy.admin.vo.SubjectVO;
import kh.study.academy.lesson.vo.LessonVO;


@Controller
@RequestMapping("/admin")
public class AdminController {
	
	@Resource(name = "adminService")
	private AdminService adminService;
	
	
	
	
	//교사리스트 페이지로 이동
	@GetMapping("/teacherList")
	public String teacherList(Model model) {

		//교사리스트 조회
		model.addAttribute("teacherList", adminService.selectTeacherList());


		return "content/admin/teacherList";

	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	////////////////////////////////////////////
	////////////////////////////////////////////
	
	
	
	// 과목 등록 (수학, 과학) 
	@PostMapping("/regSubject")
	public String regSubject(SubjectVO subjectVO) {
		adminService.insertSubject(subjectVO);

		return "redirect:/admin/selectSubject";
	}
	// 내가 등록한 과목들을 조회 (과목등록페이지로 이동)
	@GetMapping("/selectSubject")
		public String selectSubject(Model model){
		
		model.addAttribute("selectSubject", adminService.selectSubject());
		
		return "content/admin/reg_subject";
	}
	
	// 과목 체크박스 삭제
	@PostMapping("/deleteSubject")
	public String deleteSubject(String subjectCodes) {
		String[] subjectCodeArr = subjectCodes.split(",");
		List<String> subjectCodeList = Arrays.asList(subjectCodeArr);
		
		SubjectVO subjectVO = new SubjectVO();
		subjectVO.setSubjectCodeList(subjectCodeList);
		
		adminService.deleteSubject(subjectVO);
		
		return "redirect:/admin/selectSubject";
	}
	
	// 교실 정보 등록
	
	 @PostMapping("/insertLessonRoom")
	 public String insertLessonRoom(LessonRoomVO lessonRoomVO) { 
		 
		 adminService.insertLessonRoom(lessonRoomVO); 
		 
		 return "redirect:/admin/selectLessonRoom";
	 }
	 
	// 내가 등록한 교실 정보 들을 조회 (과목등록페이지로 이동)
		@GetMapping("/selectLessonRoom")
			public String selectLessonRoom(Model model){
			List<LessonVO> lessonRoomList =  adminService.selectLessonRoom();
		System.out.println("!!!!!!!!!!!!!!!!!"+lessonRoomList.get(0));
			model.addAttribute("selectLessonRoom", lessonRoomList);
			
			return "content/admin/lesson_room";
		}
	
	
	
	// 내가 등록한 각 반 교실 정보을 조회 (과목등록페이지로 이동)
	
}
