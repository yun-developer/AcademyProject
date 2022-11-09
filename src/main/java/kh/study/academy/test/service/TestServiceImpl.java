package kh.study.academy.test.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	//해당 학생의 점수 조회
	//검토 필요
	@Override
	public TestVO selectScore(TestVO testVO) {
		return sqlSession.selectOne("testMapper.selectScore", testVO);
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
}
