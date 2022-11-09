package kh.study.academy.test.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.test.service.TestService;

@Controller
@RequestMapping("/test")
public class TestController {

	
	@Resource(name = "testService")
	private TestService testService;
	
	
	
	//점수 입력
	
	//점수 수정
	
	//점수 삭제..
	
}
