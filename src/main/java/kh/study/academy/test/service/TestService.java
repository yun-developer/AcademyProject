package kh.study.academy.test.service;

import kh.study.academy.test.vo.TestVO;

public interface TestService {

	
	//점수 등록
	int regScore (TestVO testVO);
	
	//해당 학생의 점수 조회
	//검토 필요
	TestVO selectScore(TestVO testVO);
	
	//점수 수정
	void updateScore(String testCode);
	
	//점수 삭제 
	void deleteScore(String testCode);
}
