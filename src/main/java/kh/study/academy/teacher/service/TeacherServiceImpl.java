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
		// TODO Auto-generated method stub
		// 아직 안했어요 
		
	}
	
	//로그인
	@Override
	public TeacherVO login(TeacherVO teacherVO) {
		return sqlSession.selectOne("teacherMapper.login", teacherVO);
	}
	
	
	
	
}
