package kh.study.academy.lesson.controller;


import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.study.academy.admin.service.AdminService;
import kh.study.academy.admin.vo.LessonRoomVO;
import kh.study.academy.board.service.BoardService;
import kh.study.academy.config.DateUtil;
import kh.study.academy.lesson.service.LessonService;
import kh.study.academy.lesson.vo.LessonInfoVO;
import kh.study.academy.student.service.StudentService;
import kh.study.academy.student.vo.StudentVO;



@Controller
@RequestMapping("/lesson")
public class LessonController {

	@Resource(name = "adminService")
	private AdminService adminService;
	
	
	@Resource(name = "lessonService")
	private LessonService lessonService;
	
	@Resource(name = "studentService")
	private StudentService studentService;
	
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
		
		//테스트
		System.out.println(":!@!@!@!@!@!@!@!@!@!@:"+DateUtil.getAttendDate("Mon"));
		
		return "content/lesson/lessonlist_byweek";
	}
	
	// 학급목록 페이지 달력을 그릴 데이터를 조회하는 메소드
	@ResponseBody
	@PostMapping("/lessonListAjax")
	public List<Map<String, String>>lessonListAjax(Model model) {
		
		//DB학급 목록 불러오기
		List<LessonInfoVO> lessonList = lessonService.selectLessonInfoList(null);
		
		// fullcalendar에 필요한 양식
		//		title: 'Meeting',
		//      start: '2022-07-12T10:30:00',
		//      end: '2022-07-12T12:30:00'
		
		//Ajax로 보내줄 리스트 데이터
		List<Map<String, String>> lessonListForCalender = new ArrayList<>();
		
		//fullcalendar에 필요한 양식에 맞춰 각 수업 정보를 map 자료에 넣기
		for (LessonInfoVO lessonInfo : lessonList) {
			//반복문을 돌 때마다 새로 map 객체생성
			Map<String, String> lesson = new HashMap<>();;
			
			//fullcalendar에 맞게끔 날짜 양식 수정
			lesson.put("end",DateUtil.getLessonDatebyDay(lessonInfo.getLessonDayCode(),lessonInfo.getLessonTime())[1] );
			lesson.put("start",DateUtil.getLessonDatebyDay(lessonInfo.getLessonDayCode(),lessonInfo.getLessonTime())[0] );
			lesson.put("title", lessonInfo.getSubjectVO().getSubjectName() +"-"+ lessonInfo.getStepVO().getStepName() +"-"+ lessonInfo.getYear()+" [T : "+lessonInfo.getTeacherVO().getTeacherName()+" ]");
			lesson.put("id", lessonInfo.getLessonInfoCode());
			
			lesson.put("color", "#DBA39A");
			
			//각  map 객체를 Ajax로 보내줄 리스트 데이터에 담기
			lessonListForCalender.add(lesson);
		}
		
		return lessonListForCalender;
	}
	
	//학급별 학생 목록 조회
	@ResponseBody
	@PostMapping("/stuListByLessonAjax")
	public List<StudentVO> stuListByLessonAjax(String lessonInfoCode, Model model) {
		
		return studentService.stuListByLesson(lessonInfoCode);
	}
	
	@GetMapping("/subject")
	public String selectsubject() {
		
		return "";
	}
	
	

/////<학급 편성 등록 관련>//////////////////////////////////////////////////////////// 

	
	
		// 학급편성 등록 페이지 
		@GetMapping("/regLessonInfoPage")
		public String regLessonInfoPage(Model model, LessonRoomVO lessonRoomVO, String roomName, LessonInfoVO lessonInfoVO, String lessonDayCode) { 
		
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
		
		// 학급 편성 등록
		model.addAttribute("lessonInfoList",lessonService.selectLessonInfoList(lessonInfoVO));
		
		
		if(lessonDayCode == null) {
			lessonDayCode = "Mon";
		}
		model.addAttribute("useCheckList",lessonService.selectClassUseRepeated(lessonDayCode));
		
		return "content/lesson/reg_lessonInfo";
		

		}
		
		// 학급 편성 등록 시 교실장소, 수업시간 겹치지 않게 조회
		@ResponseBody
		@PostMapping("/selectClassUseAjax")
		public List<String> selectClassUseRepeated(Model model, String lessonDayCode) {
		
			return lessonService.selectClassUseRepeated(lessonDayCode);
		}
		
		
		// 중복 체크 에이작스
		@ResponseBody
		@PostMapping("/doubleCheckLessonAjax")
		public LessonInfoVO doubleCheckLessonAjax(LessonInfoVO lessonInfoVO) {
			
			System.out.println("!!!!!!!!!!!!!!!!!"+lessonInfoVO.getLessonTime());
			
			LessonInfoVO infoVO = lessonService.doubleCheckLesson(lessonInfoVO);
			
			
			return infoVO;
		}
		
		
		
		
		// 학급 등록 버튼 모달창에서 데이터들을 저장
		
		@PostMapping("/saveLessonInfo")
		
		public String saveLessonInfo(LessonInfoVO lessonInfoVO, Model model) {
		// 교실 사용 중복 여부 확인 조회
		lessonService.doubleCheckLesson(lessonInfoVO);
		// 학급 편성 등록 
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
