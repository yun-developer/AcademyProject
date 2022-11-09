package kh.study.academy.test.service;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.student.vo.StudentVO;
import kh.study.academy.test.vo.TestVO;

@Service("testService")
public class TestServiceImpl implements TestService{
	@Autowired
	SqlSessionTemplate sqlSession;
	
	//점수 등록
	@Override
	public int regScore(TestVO testVO) {
		return sqlSession.insert("testMapper.regScore",testVO);
	}
	
	//평가 관리 페이지에서 검색
	//검토 필요
	@Override
	public List<StudentVO> searchTest(Map<String, String> map) {
		return sqlSession.selectList("testMapper.searchTest", map);
	}
	
	//점수 수정
	@Override
	public void updateScore(String testCode) {
		sqlSession.update("testMapper.updateScore", testCode);
		
	}
	
	//점수 삭제 
	@Override
	public void deleteScore(String testCode) {
		sqlSession.delete("testMapper.deleteScore",testCode);
	}

	
	//반별 테스트 평균 점수 조회
	//검토 필요
	@Override
	public List<TestVO> selectLessonScore(TestVO testVO) {
		
		return sqlSession.selectList("testMapper.selectLessonScore", testVO);
	}
}
