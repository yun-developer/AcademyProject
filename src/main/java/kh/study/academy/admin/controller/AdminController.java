package kh.study.academy.admin.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.jdbc.SQL;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.study.academy.admin.service.AdminService;
import kh.study.academy.admin.vo.LessonRoomVO;
import kh.study.academy.admin.vo.SubjectVO;
import kh.study.academy.lesson.service.LessonService;
import kh.study.academy.lesson.vo.LessonInfoVO;
import kh.study.academy.teacher.vo.TeacherVO;


@Controller
@RequestMapping("/admin")
public class AdminController {
	
	@Resource(name = "adminService")
	private AdminService adminService;
	
	@Resource(name = "lessonService")
	private LessonService lessonService;
	
	
	//교사리스트 페이지로 이동
	@RequestMapping("/teacherList")
	public String teacherList(@RequestParam Map<String, String> paramMap , Model model) {

		
		
		//System.out.println("이름 : " + paramMap.get("teacherName"));
		
		
		
		
		
		//이거 지금 안쓰고 있는데 아예 필요 없나?
		//교사리스트
		model.addAttribute("teacherList", adminService.selectTeacherList());
		
		//교사 검색
		model.addAttribute("searchTeacher", adminService.searchTeacher(paramMap));

		//과목 카테고리 목록 조회
		model.addAttribute("subjectList", adminService.selectSubject());
		
		model.addAttribute("paramMap", paramMap);
		
		
		return "content/admin/teacherList";

	}
	
	
	//교사 팝업으로 이동 ..
	@RequestMapping("/popup")
	public String pop( String teacherCode, Model model) {
	
		
		System.out.println("@@@@@@@@@@"+teacherCode);
		model.addAttribute("teacherDetail", adminService.selectTeacherDetail(teacherCode));
		

		
		return "content/admin/teacherPopup";
	}
	
	/*
	 * //교사 상태 변경 클릭시 //수정 중 아직 Ajax 안 만들었음
	 * 
	 * @ResponseBody
	 * 
	 * @PostMapping("/changeTeacherStatusAjax") public void
	 * changeTeacherStatus(TeacherVO teacherVO) {
	 * adminService.changeTeacherStatus(teacherVO); }
	 */
	
	
	
	 //팝업 페이지에서 교사 권한 승인
	  @ResponseBody
	  @PostMapping("/changeTeacherRoleAjax")
	  public void changeTeacherRoleAjax(TeacherVO teacherVO) {
		  adminService.changeTeacherRole(teacherVO);
	  }
	
	
	
	//통계 페이지로 이동 
	@GetMapping("/statistics")
	public String statistics(Model model) {

		


		return "content/admin/statistics";

	}
	
	
	
	
	
/////<과목 등록 관련>//////////////////////////////////////////////////////////// 
	
	
	// 과목 등록 (수학, 과학) 
	@PostMapping("/regSubject")
	public String regSubject(SubjectVO subjectVO) {
		//adminService.insertSubject(subjectVO);
		//등록 시 빈문자(아무것도 안썼을 때)일 때 오류가 안나는 방법(조건문if)
		if(subjectVO.getSubjectName().equals("")) {  // 만약에 등록시 빈문자라면 다시 과목등록 페이지 이동
			return "redirect:/admin/selectSubject";
		}
		else {
			adminService.insertSubject(subjectVO);  // 빈문자가 아니라면 등록 쿼리 실행하고 과목등록 페이지로 이동
		}	
		
		return "redirect:/admin/selectSubject";
	}
	// 내가 등록한 과목들을 조회 (과목등록페이지로 이동)
	@GetMapping("/selectSubject")
		public String selectSubject(Model model){
		
		model.addAttribute("subjectList", adminService.selectSubject());
		
		return "content/admin/reg_subject";
	}
	
	// 내가 등록한 과목들 체크박스 삭제
	@PostMapping("/deleteSubject")
	public String deleteSubject(String subjectCodes) {
		String[] subjectCodeArr = subjectCodes.split(","); // 배열을 리스트로 변환작업 2줄
		List<String> subjectCodeList = Arrays.asList(subjectCodeArr);
		
		SubjectVO subjectVO = new SubjectVO();
		subjectVO.setSubjectCodeList(subjectCodeList);
		
		adminService.deleteSubject(subjectVO);
		
		return "redirect:/admin/selectSubject";
	}

	
	
/////<교실 등록 관련>//////////////////////////////////////////////////////////// 	
	
	
	// 교실 정보 등록
	
	 @PostMapping("/regLessonRoom")
	 public String regLessonRoom(LessonRoomVO lessonRoomVO) { 
		 
		 adminService.regLessonRoom(lessonRoomVO); 
		 
		 System.out.println(lessonRoomVO);
		 
		 return "redirect:/admin/selectLessonRoom";
	 }
	 
	// 내가 등록한 교실 정보를 조회 (과목등록페이지로 이동)
		@RequestMapping("/selectLessonRoom")
			public String selectLessonRoom(Model model, String roomName){
		
			List<LessonRoomVO> lessonRoomList =  adminService.selectLessonRoom(roomName);
			model.addAttribute("LessonRoomList", lessonRoomList);
			
			return "content/admin/reg_lessonroom";
		}
	
		// 내가 등록한 교실들 체크박스 삭제
		@PostMapping("/deleteLessonRoom")
		public String deleteLessonRoom(String lessonRoomCodes) {
			String[] lessonRoomCodeArr = lessonRoomCodes.split(",");  // 배열을 리스트로 변환작업 2줄
			List<String> lessonRoomCodeList = Arrays.asList(lessonRoomCodeArr);

			
			LessonRoomVO lessonRoomVO = new LessonRoomVO();
			lessonRoomVO.setLessonRoomCodeList(lessonRoomCodeList);
			
			adminService.deleteLessonRoom(lessonRoomVO);
			
			return "redirect:/admin/selectLessonRoom";
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
		
		 return "content/admin/reg_lessonInfo";
		}
		
		
		// 학급 등록 버튼 모달창에서 데이터들을 저장
		@PostMapping("/saveLessonInfo")
			public String saveLessonInfo(LessonInfoVO lessonInfoVO) {
			System.out.println(lessonInfoVO);
			adminService.regLessonInfo(lessonInfoVO);
			
			return "";
		}
}





