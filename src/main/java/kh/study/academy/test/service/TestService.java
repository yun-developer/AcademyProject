package kh.study.academy.test.service;

import java.util.List;
import java.util.Map;

import kh.study.academy.student.vo.StudentVO;
import kh.study.academy.test.vo.TestVO;

public interface TestService {

	
	//점수 등록
	int regScore (TestVO testVO);
	
	//평가 관리 페이지에서 검색
	//검토 필요
	List<StudentVO> searchTest(Map<String, String> map);
	
	//평가 관리 페이지에서 전체 학생 조회
	//하는 중...map이랑 겹치는데 VO넘기기 가능..??
	List<StudentVO> selectAllstudent(TestVO testVO);
	
	//반별 테스트 평균 점수 조회
	//검토 필요
	List<TestVO> selectLessonScore(TestVO testVO);
	
	//점수 수정
	void updateScore(String testCode);
	
	//점수 삭제 
	void deleteScore(String testCode);
}
