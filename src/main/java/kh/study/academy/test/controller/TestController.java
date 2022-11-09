package kh.study.academy.test.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.test.service.TestService;
import kh.study.academy.test.vo.TestVO;

@Controller
@RequestMapping("/test")
public class TestController {

	
	@Resource(name = "testService")
	private TestService testService;
	
	
	
	//점수 입력
	@PostMapping("/regScore")
	public String regScore(TestVO testVO) {
		
		
		testService.regScore(testVO);
		
		return null;
	}
	
	//점수 수정
	
	@PostMapping("/updateScore")
	public String updateScore(TestVO testVO) {
		
		
	
		
		return null;
	}
	
	
	//점수 삭제..
	
}
