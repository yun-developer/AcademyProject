package kh.study.academy.statistics.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.study.academy.statistics.service.StatisticsService;
import kh.study.academy.statistics.vo.StudentCntPerGrade;


@Controller
@RequestMapping("/statistics")
public class StatisticsController {

	@Resource(name = "statisticsService")
	private StatisticsService statisticsService;
	
	
	
	//학생현황 페이지로 이동 
	@GetMapping("/studentStatus")
	public String studentStatus(Model model) {
		
		return "content/statistics/studentStatus";
	}
	
	//차트를 그릴 테이터를 조회하는 메소드
	@ResponseBody
	@PostMapping("/studentStatusAjax")
	public List<StudentCntPerGrade> studentStatusAjax(Model model) {
		//학년별 학생 수 조회
		List<StudentCntPerGrade> studentCntPerGrade = statisticsService.selectNumByStuYear();
		
		return studentCntPerGrade;
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
