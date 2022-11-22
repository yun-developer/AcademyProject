package kh.study.academy.lesson.controller;


import java.lang.reflect.Array;
import java.util.ArrayList;
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
import kh.study.academy.board.service.BoardService;
import kh.study.academy.config.DateUtil;
import kh.study.academy.lesson.service.LessonService;
import kh.study.academy.lesson.vo.LessonInfoVO;



@Controller
@RequestMapping("/lesson")
public class LessonController {

	@Resource(name = "adminService")
	private AdminService adminService;
	
	
	@Resource(name = "lessonService")
	private LessonService lessonService;
	
	@Resource(name = "boardService")
	private BoardService boardService;
	
	
	//메인
	@GetMapping("/main")
	public String mainPage( Model model) {
		model.addAttribute("noticeList", boardService.selectNoticeMain());
		model.addAttribute("freeList", boardService.selectFreeMain());
		System.out.println("mainPage컨트롤러 실행");
		
		return "content/lesson/lesson_main";
	}
	
	//주별 학급목록
	@GetMapping("/listByWeek")
	public String listByWeek(Model model) {
		
		List<LessonInfoVO> lessonList = lessonService.selectLessonInfoList(null);
		
		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+lessonList.get(0).getLessonTime() + lessonList.get(0).getLessonDayCode());
		System.out.println("!@#!@#!@#!@#" + DateUtil.getStartTimeforfullcalendar(lessonList.get(0).getLessonTime()));
		
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
		
		
		//검색 밑에 목록조회
		model.addAttribute("lessonInfoList",lessonService.selectLessonInfoList(lessonInfoVO));
		
		
		return "content/lesson/reg_lessonInfo";
		
		}
		
		
		
		
		// 학급 등록 버튼 모달창에서 데이터들을 저장
		
		@PostMapping("/saveLessonInfo")
		
		public String saveLessonInfo(LessonInfoVO lessonInfoVO, Model model) {
		System.out.println(lessonInfoVO);
		lessonService.regLessonInfo(lessonInfoVO);
		
		return "redirect:/lesson/regLessonInfoPage";
		}
		
		
		
		// 학급 편성한 리스트들 삭제
		@PostMapping("/deleteLessonInfo")
		public String deleteLessonInfo(String lessonInfoCodes) {
			String[] lessonCodeArr = lessonInfoCodes.split(",");
			List<String> lessonCodeList = Arrays.asList(lessonCodeArr);
			System.out.println("~~~~~~~~~~~"+lessonCodeList);
			LessonInfoVO lessonInfoVO = new LessonInfoVO();
			lessonInfoVO.setLessonInfoCodeList(lessonCodeList);
			
			lessonService.deleteLessonInfo(lessonInfoVO);
			
			return "redirect:/lesson/regLessonInfoPage";
		}
		
	
}
