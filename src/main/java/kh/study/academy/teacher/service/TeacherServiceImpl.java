package kh.study.academy.teacher.service;


import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.teacher.vo.TeacherVO;

@Service("teacherService")
public class TeacherServiceImpl implements TeacherService {

	@Autowired
	SqlSessionTemplate sqlSession;
	
	//회원가입
	@Override
	public void join(TeacherVO teacherVO) {
		sqlSession.insert("teacherMapper.join", teacherVO);
		
	}
	
	//로그인
	@Override
	public TeacherVO login(TeacherVO teacherVO) {
		return sqlSession.selectOne("teacherMapper.login", teacherVO);
	}
	
	//로그인 정보 찾기 
	@Override
	public TeacherVO findId(TeacherVO teacherVO) {
		
		return sqlSession.selectOne("teacherMapper.findId", teacherVO);
	}
	
	//아이디 중복 검사
	@Override
	public TeacherVO idDoubleCheck(TeacherVO teacherVO) {
		return sqlSession.selectOne("teacherMapper.idDoubleCheck", teacherVO);
	}
	
	//회원 정보 조회
	@Override
	public TeacherVO selectTeacherInfo(TeacherVO teacherVO) {
		
		return sqlSession.selectOne("teacherMapper.selectTeacherInfo", teacherVO);
	}
	

	
	
	
	
}
