package kh.study.academy.admin.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.admin.vo.SubjectVO;
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
	
	// 과목 등록
	@Override
	public void insertSubject(SubjectVO subjectVO) {
		
		sqlSession.insert("adminMapper.insertSubject", subjectVO);
	}
	// 등록된 과목 조회
	@Override
	public List<SubjectVO> selectSubject() {
		return sqlSession.selectList("adminMapper.selectSubject");
	}

	// 과목 삭제(체크박스)
	@Override
	public void deleteSubject(SubjectVO subjectVO) {
		sqlSession.delete("adminMapper.deleteSubject", subjectVO);
	}


}
