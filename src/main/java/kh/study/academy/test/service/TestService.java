package kh.study.academy.test.service;

import java.util.List;
import java.util.Map;

import kh.study.academy.student.vo.StudentVO;
import kh.study.academy.test.vo.TestVO;

public interface TestService {

	
	//점수 등록
	int regScore (TestVO testVO);
	
	//평가 관리 페이지에서 검색
	List<StudentVO> searchTest(Map<String, String> map);
	
	
	//점수 수정
	void updateScore(TestVO testVO);
	
	//점수 삭제 
	void deleteScore(String testCode);
	
	//조회 
	List<TestVO> selectAllTest(TestVO testVO);
	
	
	//이미 등록된 테스트가 있는지 조회
	TestVO checkDubleTest(TestVO testVO);
	
	//수정을 위해 특정 학생, 과목으로 등록된 테스트 정보 모두 조회
	List<TestVO> testListForUpdate(TestVO testVO);
	
	
	
	
	
	
	
	//db인서트
	void regDbScore(TestVO testVO);
	//다음 코드
	String getNextTestCode();
	
	
}
