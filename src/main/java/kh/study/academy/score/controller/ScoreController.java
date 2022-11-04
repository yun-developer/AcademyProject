package kh.study.academy.score.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.score.service.ScoreService;

@Controller
@RequestMapping("/score")
public class ScoreController {
	
	@Resource(name = "scoreService")
	private ScoreService scoreService;
	
	
	
	//점수 입력
	
	//점수 수정
	
	//점수 삭제..
	
	
	
}
