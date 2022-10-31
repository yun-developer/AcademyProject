package kh.study.academy.admin.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.teacher.vo.TeacherVO;



@Service("adminService")
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	SqlSessionTemplate sqlSession;
	
	//교사 리스트 조회
	@Override
	public List<TeacherVO> selectTeacherList() {
		
		return sqlSession.selectList("adminMapper.selectTeacherList");
	}

	
	
	
	
	
	
	
	
	
	
}
