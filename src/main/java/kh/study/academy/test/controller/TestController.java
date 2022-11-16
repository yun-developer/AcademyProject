package kh.study.academy.test.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import kh.study.academy.student.service.StudentService;
import kh.study.academy.student.vo.StudentVO;
import kh.study.academy.test.service.TestService;
import kh.study.academy.test.vo.TestVO;

@Controller
@RequestMapping("/test")
public class TestController {

	
	@Resource(name = "testService")
	private TestService testService;
	

	
	//점수 관리 페이지로
	@RequestMapping("/testManage")
	public String regScorePage( @RequestParam Map<String, String> paramMap, Model model) {
		
		
		//데이터 나오는지 확인
		System.out.println("@@@!!!!!@@"+testService.searchTest(paramMap));
		
		//검색
		model.addAttribute("search", testService.searchTest(paramMap));
		
		//학급명 목록 조회 
	//	model.addAttribute(null, model);
		
	
		
		model.addAttribute("paramMap", paramMap);
		
		return "content/test/testManage";
	
	}
	
	
	//점수 입력
	@PostMapping("/regScore")
	public String regScore(TestVO testVO) {
		
		testService.regScore(testVO);
	
		return null;
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

		
		return null;
	}
	
	
	//점수 삭제
	@GetMapping("/deleteScore")
	public String deleteScore(String testCode) {
		
		testService.deleteScore(testCode);
		
		return null;
		//"redirect:/board/list";// 경로 미설정
	}
}
