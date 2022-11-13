package kh.study.academy.lesson.service;

import java.util.List;

import kh.study.academy.lesson.vo.LessonDayVO;
import kh.study.academy.lesson.vo.LessonInfoVO;
import kh.study.academy.lesson.vo.StepVO;


public interface LessonService {
		
		
/////<학급 편성 등록 관련>//////////////////////////////////////////////////////////// 


	//강의 등급 목록 조회
	List<StepVO> selectStepList();
	
		
	// 강의 요일 목록 조회 
	List<LessonDayVO> selectLessonDayList();	
		
		
	// 학급 편성 등록
	void regLessonInfo(LessonInfoVO lessonInfoVO);	
	
	// 학급 편성 리스트 조회
	List<LessonInfoVO> selectLessonInfoList();
	
	// 학급편성 등록한 것 삭제(체크박스)
	void deleteLessonInfo(LessonInfoVO lessonInfoVO);
	
	
}
