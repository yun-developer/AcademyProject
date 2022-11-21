package kh.study.academy.statistics.service;

import java.util.List;

import kh.study.academy.statistics.vo.StudentCntPerGrade;

public interface StatisticsService {

	
	
	
	//학년별 학생 수 조회
	
	List<StudentCntPerGrade> selectNumByStuYear();
	
	
	
	
	
	
	
	
	
}
