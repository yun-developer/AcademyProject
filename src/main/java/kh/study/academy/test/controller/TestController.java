package kh.study.academy.test.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.unit.DataUnit;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.study.academy.admin.service.AdminService;
import kh.study.academy.config.DateUtil;
import kh.study.academy.lesson.service.LessonService;
import kh.study.academy.student.service.StudentService;
import kh.study.academy.student.vo.StudentVO;
import kh.study.academy.test.service.TestService;
import kh.study.academy.test.vo.TestVO;

@Controller
@RequestMapping("/test")
public class TestController {

	
	@Resource(name = "testService")
	private TestService testService;
	
	@Resource(name = "adminService")
	private AdminService adminService;

	@Resource(name = "lessonService")
	private LessonService lessonService;

	
	@Resource(name = "studentService")
	private StudentService studentService;
	

	
	//점수 관리 페이지로
	@RequestMapping("/testManage")
	public String regScorePage( @RequestParam Map<String, String> paramMap, Model model) {
		
		
		//데이터 나오는지 확인
		System.out.println("@@@!!!!!@@"+testService.searchTest(paramMap));
		
		//검색
		model.addAttribute("search", testService.searchTest(paramMap));
		
		// 과목 리스트 조회
		model.addAttribute("subjectList", adminService.selectSubject());
		
		// 교사 리스트 조회
		model.addAttribute("teacherList", adminService.selectTeacherList());

		//강의 등급 조회
		model.addAttribute("step", lessonService.selectStepList());

		
		
		
		model.addAttribute("paramMap", paramMap);
		
		
		return "content/test/testManage";
	
	}
	
	
	//점수 입력
	@ResponseBody
	@PostMapping("/regScoreAjax")
	public TestVO regScoreAjax(TestVO testVO) {
		
		
		
		//해당 날짜의 년도 불러와서 세팅해주기
		testVO.setOriginDate(DateUtil.getTestYearDate(testVO.getOriginDate()));
		
		//이미 등록된 테스트가 있는지 조회
		TestVO dubleTest = testService.checkDubleTest(testVO);
		
		if (dubleTest == null) {
			testVO = new TestVO();
			testVO.setCheck(0);
			return testVO;
		}else {
			dubleTest.setCheck(1);
			
			//??
			testService.regScore(testVO);
			
			return dubleTest;
		}
		
		
	
	}

	
	
	//반별 테스트 평균 점수 조회
	//검토 필요//get도 그냥 임의로 해놓은거 
	@GetMapping("/selectLessonScore")
	public String selectLessonScore(TestVO testVO) {
		
		testService.selectLessonScore(testVO);
		
		return null;
	}
	

	//점수 수정
	@PostMapping("/updateScore")
	public String updateScore(StudentVO studentVO, Model model) {
		
		//수정하기 전에 상세정보 가져오기

		
		return "redirect:/test/testManage";
	}
	
	
	//점수 삭제
	@GetMapping("/deleteScore")
	public String deleteScore(String testCode) {
		
		testService.deleteScore(testCode);
		
		
		return "redirect:/test/testManage";
	}
}
