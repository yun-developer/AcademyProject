package kh.study.academy.admin.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.admin.vo.LessonRoomVO;
import kh.study.academy.admin.vo.SubjectVO;
import kh.study.academy.lesson.vo.LessonVO;
import kh.study.academy.teacher.vo.TeacherVO;



@Service("adminService")
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	SqlSessionTemplate sqlSession;

	
	
/////<교사 관련>/////////////////////////////////////////////////////////////////
	
	
	
	//교사 리스트 조회
	@Override
	public List<TeacherVO> selectTeacherList() {
		
		return sqlSession.selectList("adminMapper.selectTeacherList");
	}

	
	
 /////<과목 등록 관련>//////////////////////////////////////////////////////////// 
	
	
	
	// 과목 등록
	@Override
	public void insertSubject(SubjectVO subjectVO) {
		
		sqlSession.insert("adminMapper.insertSubject", subjectVO);
	}
	// 등록된 과목리스트 조회
	@Override
	public List<SubjectVO> selectSubject() {
		return sqlSession.selectList("adminMapper.selectSubject");
	}

	// 과목 삭제(체크박스)
	@Override
	public void deleteSubject(SubjectVO subjectVO) {
		sqlSession.delete("adminMapper.deleteSubject", subjectVO);
	}
	

	
/////<교실 등록 관련>//////////////////////////////////////////////////////////// 	
	
	
	
	// 교실 등록
	@Override
	public void regLessonRoom(LessonRoomVO lessonRoomVO) {
		sqlSession.insert("adminMapper.regLessonRoom", lessonRoomVO);
	}
	// 등록된 교실리스트 조회
	@Override
	public List<LessonVO> selectLessonRoom() {
		return sqlSession.selectList("adminMapper.selectLessonRoom");
	}

	// 교실 삭제(체크박스)
	@Override
	public void deleteLessonRoom(LessonRoomVO lessonRoomVO) {
		sqlSession.delete("adminMapper.deleteLessonRoom", lessonRoomVO);
	}

	

}
