package kh.study.academy.statistics.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.statistics.service.StatisticsService;


@Controller
@RequestMapping("/statistics")
public class StatisticsController {

	@Resource(name = "statisticsService")
	private StatisticsService statisticsService;
	
	
	
	//학생현황 페이지로 이동 
	@GetMapping("/studentStatus")
	public String studentStatus() {

		
		return "content/statistics/studentStatus";
	}
	
	
	
	//평가관리 분석 페이지로 이동 
	@GetMapping("/testAnalysis")
	public String testAnalysis() {
		
		
		return "content/statistics/testAnalysis";
	}
	
	
	
	//교사별 수업현황 페이지로 이동 
	@GetMapping("/classByTeacher")
	public String classByTeacher() {
		
		
		
		return "content/statistics/classByTeacher";
	}

	
	
	
}
