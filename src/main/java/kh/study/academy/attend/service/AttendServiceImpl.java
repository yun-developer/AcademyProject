package kh.study.academy.attend.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.attend.vo.AttendVO;

@Service("attendService")
public class AttendServiceImpl implements AttendService{
	
	@Autowired
	SqlSessionTemplate sqlSession;
	
	//출결코드 생성
	@Override
	public void creatAttend(AttendVO attendVO) {
		sqlSession.insert("attendMapper.creatAttend", attendVO);
	}
	
}
