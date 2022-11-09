package kh.study.academy.test.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.test.service.TestService;
import kh.study.academy.test.vo.TestVO;

@Controller
@RequestMapping("/test")
public class TestController {

	
	@Resource(name = "testService")
	private TestService testService;
	
	
	
	//점수 입력 페이지로
	@GetMapping("/regScore")
	public String regScorePage(TestVO testVO) {
		
		return "content/test/regScore";
	
	}
	
	
	//점수 입력
	@PostMapping("/regScore")
	public String regScore(TestVO testVO) {
		
		testService.regScore(testVO);
	
		return null;
	}
	
	//해당 학생의 점수 조회
	//검토 필요
	@GetMapping("/selectStuScore")
	public String selectStuScore(TestVO testVO) {
		
		testService.selectStuScore(testVO);
		
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
	public String updateScore(TestVO testVO, Model model) {
		
		//수정하기 전에 상세정보 가져오기
		model.addAttribute("test", testService.selectStuScore(testVO));
		
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
