package kh.study.academy.lesson.controller;


import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.admin.service.AdminService;
import kh.study.academy.admin.vo.LessonRoomVO;
import kh.study.academy.lesson.service.LessonService;
import kh.study.academy.lesson.vo.LessonInfoVO;



@Controller
@RequestMapping("/lesson")
public class LessonController {

	@Resource(name = "adminService")
	private AdminService adminService;
	
	
	@Resource(name = "lessonService")
	private LessonService lessonService;
	
	
	//메인
	@GetMapping("/main")
	public String mainPage( Model model) {
		
		System.out.println("mainPage컨트롤러 실행");
		
		return "content/lesson/lesson_main";
	}
	
	//주별 학급목록
	@GetMapping("/listByWeek")
	public String listByWeek() {
		
		return "content/lesson/lessonlist_byweek";
	}
	
	
	@GetMapping("/subject")
	public String selectsubject() {
		
		return "";
	}
	
	

/////<학급 편성 등록 관련>//////////////////////////////////////////////////////////// 

	
	
		// 학급편성 등록 페이지 
		@GetMapping("/regLessonInfoPage")
		public String regLessonInfoPage(Model model, LessonRoomVO lessonRoomVO, String roomName, LessonInfoVO lessonInfoVO) { 
		
		// 과목 리스트를 가져오는 쿼리 실행 문
		model.addAttribute("subjectList", adminService.selectSubject());
		
		// 교실명 리스트를 가져오는 쿼리 실행 문
		List<LessonRoomVO> lessonRoomList = adminService.selectLessonRoom(roomName);
		model.addAttribute("LessonRoomList", lessonRoomList);
		
		// 교사 리스트를 가져오는 쿼리 실행 문
		model.addAttribute("teacherList", adminService.selectTeacherList());

		//강의 등급 리스트를 가져오는 쿼리 실행 문
		model.addAttribute("stepList", lessonService.selectStepList());
		
		//강의 요일 리스트를 가져오는 쿼리 실행 문
		model.addAttribute("lessonDayList", lessonService.selectLessonDayList());
		
		
		
		model.addAttribute("lessonInfoList",lessonService.selectLessonInfoList());
		
		
		return "content/admin/reg_lessonInfo";
		
		}
		
		
		// 학급 등록 버튼 모달창에서 데이터들을 저장
		@PostMapping("/saveLessonInfo")
			public String saveLessonInfo(LessonInfoVO lessonInfoVO, Model model) {
			System.out.println(lessonInfoVO);
			lessonService.regLessonInfo(lessonInfoVO);
			
		
			
			return "redirect:/lesson/regLessonInfoPage";
		}
	
	
		
	
}
