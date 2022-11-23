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
	

	
	//반별 테스트 평균 점수 조회
	//검토 필요
	List<TestVO> selectLessonScore(TestVO testVO);
	
	//점수 수정
	void updateScore(String testCode);
	
	//점수 삭제 
	void deleteScore(String testCode);
	
	//조회 
	List<TestVO> selectAllTest(TestVO testVO);
	
	
	//이미 등록된 테스트가 있는지 조회
	TestVO checkDubleTest(TestVO testVO);
	
}
