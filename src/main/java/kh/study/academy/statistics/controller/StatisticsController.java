package kh.study.academy.statistics.controller;

import java.util.ArrayList;
import java.util.Arrays;
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
import kh.study.academy.statistics.vo.NewStudentCntByMonth;
import kh.study.academy.statistics.vo.QuarterlySubTestAvg;
import kh.study.academy.statistics.vo.StudentCntPerGrade;
import kh.study.academy.statistics.vo.StudentCntPerSubject;
import kh.study.academy.teacher.vo.TeacherVO;
import kh.study.academy.test.service.TestService;
import kh.study.academy.test.vo.TestVO;

@Controller
@RequestMapping("/statistics")
public class StatisticsController {

	@Resource(name = "statisticsService")
	private StatisticsService statisticsService;

	@Resource(name = "adminService")
	private AdminService adminService;

	@Resource(name = "testService")
	private TestService testService;


/* ① 학생현황 통계----------------------------------------------------------------------------------------- */

	// 학생현황 페이지로 이동
	@GetMapping("/studentStatus")
	public String studentStatus(Model model) {

		return "content/statistics/studentStatus";
	}

	// 학생현황 페이지 차트를 그릴 데이터를 조회하는 메소드
	@ResponseBody
	@PostMapping("/studentStatusAjax")
	public Map<String, Object> studentStatusAjax() {

		Map<String, Object> paramMap = new HashMap<>();

		// ① map 학년별 학생 수
		paramMap.put("studentCntPerGrade", statisticsService.selectNumByStuYear());

		/*------------------------------------*/

		Map<String, List<Integer>> chart2_data = new HashMap<>();

		// 전체 과목 조회
		List<SubjectVO> subjectList = adminService.selectSubject();

		for (SubjectVO subject : subjectList) {
			// 과목코드 조회
			String subjectCode = subject.getSubjectCode();

			// 과목당 1,2,3 학년의 학생 수 조회
			List<Integer> stuCntList = statisticsService.selectNumByStuSubject(subjectCode);
			
			chart2_data.put(subject.getSubjectName(), stuCntList);

		}

		// ② map 과목별 학생 비율
		paramMap.put("studentCntPerSubject", chart2_data);
		
		/*------------------------------------*/


		
		// ③ map 월별 신규 학생 수 추이
		paramMap.put("newStudentCntByMonth", statisticsService.selectNewStuCntByMonth());
		
		return paramMap;
	}

/* ② 평가관리 분석 통계------------------------------------------------------------------------------------ */
	// 평가관리 분석 페이지로 이동
	@GetMapping("/testAnalysis")
	public String testAnalysis() {
		
		return "content/statistics/testAnalysis";
	}
	
	
	// 평가관리 분석 페이지- 분기별 과목 테스트 평균 차트를 그릴 데이터를 조회하는 메소드
	@ResponseBody
	@PostMapping("/testAnalysisAjax")
	public Map<String, Object> testAnalysisAjax() {
		
		Map<String, Object> paramMap = new HashMap<>();
		 
	
		//① map 학년별 학생 수
		paramMap.put("quarterlySubTestAvg", statisticsService.selectQuarterlySubTestAvg());
		
		return paramMap;
	}

/* ③ 교사별 수업현황 통계---------------------------------------------------------------------------------- */
	// 교사별 수업현황 페이지로 이동
	@GetMapping("/classByTeacher")
	public String classByTeacher() {

		return "content/statistics/classByTeacher";
	}
	
	// 교사별 수업현황 페이지 차트를 그릴 데이터를 조회하는 메소드
	@ResponseBody
	@PostMapping("/classByTeacherAjax")
	public Map<String, Object> classByTeacherAjax() {

		Map<String, Object> paramMap = new HashMap<>();
		
		Map<String, Integer> chart1_data = new HashMap<>();
		
		// 전체 교사 조회(현재 교사 상태가 Y인 교사만)
		List<TeacherVO> teacherList = adminService.selectTeacherList();
		
		for (TeacherVO teacher : teacherList) { 
			
			// 교사코드 조회
			String teacherCode = teacher.getTeacherCode();

			// 교사별 프로그램 수 
			int lessonCnt = statisticsService.selectLessonCntByTeacher(teacherCode);

			chart1_data.put(teacher.getTeacherName(), lessonCnt);
		}
		
		// ① map 교사별 프로그램 수 
		paramMap.put("lessonCntByTeacher", chart1_data);
		
		
		/////

		Map<String, Integer> chart2_data = new HashMap<>();

		
		for (TeacherVO teacher : teacherList) { // 교사코드 조회

			String teacherCode = teacher.getTeacherCode();

			// 교사별 학생 수 조회
			int stuCnt = statisticsService.selectStudentCntByTeacher(teacherCode);

			chart2_data.put(teacher.getTeacherName(), stuCnt);
		}

		
		// ② map 교사별 학생 수 조회
		paramMap.put("studentCntByTeacher", chart2_data);

		return paramMap;
	}



}
