package kh.study.academy.statistics.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.study.academy.admin.service.AdminService;
import kh.study.academy.admin.vo.SubjectVO;
import kh.study.academy.statistics.service.StatisticsService;
import kh.study.academy.statistics.vo.StudentCntPerGrade;
import kh.study.academy.statistics.vo.StudentCntPerSubject;


@Controller
@RequestMapping("/statistics")
public class StatisticsController {

	@Resource(name = "statisticsService")
	private StatisticsService statisticsService;
	
	@Resource(name = "adminService")
	private AdminService adminService;
	
	//학생현황 페이지로 이동 
	@GetMapping("/studentStatus")
	public String studentStatus(Model model) {
		
		return "content/statistics/studentStatus";
	}
	
	
	
	
	  //차트를 그릴 테이터를 조회하는 메소드
	  @ResponseBody
	  @PostMapping("/studentStatusAjax") public Map<String, Object>
	  studentStatusAjax(Model model) {
	  
		  Map<String, Object> paramMap = new HashMap<>();
		  
		  //map 학년별 학생 수 
		  paramMap.put("studentCntPerGrade", statisticsService.selectNumByStuYear());
		 
		  
		  /////////////////////////////////////////////////////
		  
		  Map<String, List<Integer>> chart2_data = new HashMap<>();
		  
		  
		  //전체 과목 조회
		  List<SubjectVO> subjectList = adminService.selectSubject();
		  
		  for(SubjectVO subject : subjectList) {
			  //과목명 조회
			  String subjectCode = subject.getSubjectCode();
			  
			  //과목당 1,2,3 학년의 학생 수 조회
			  List<Integer> stuCntList = statisticsService.selectNumByStuSubject(subjectCode);
			  
			  chart2_data.put(subject.getSubjectName(), stuCntList);
			  
		  }
		  
		  
		  //map 과목별 학생 수
		  paramMap.put("studentCntPerSubject", chart2_data);
		  
		  
		  
		  return paramMap; 
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
