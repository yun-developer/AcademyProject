package kh.study.academy.test.service;

import java.util.List;

import kh.study.academy.test.vo.TestVO;

public interface TestService {

	
	//점수 등록
	int regScore (TestVO testVO);
	
	//해당 학생의 점수 조회
	//검토 필요
	TestVO selectStuScore(TestVO testVO);
	
	//반별 테스트 평균 점수 조회
	//검토 필요
	List<TestVO> selectLessonScore(TestVO testVO);
	
	//점수 수정
	void updateScore(String testCode);
	
	//점수 삭제 
	void deleteScore(String testCode);
}
