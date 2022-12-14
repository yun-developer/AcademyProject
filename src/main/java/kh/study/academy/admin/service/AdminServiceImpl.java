package kh.study.academy.admin.service;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.admin.vo.LessonRoomVO;
import kh.study.academy.admin.vo.SubjectVO;
import kh.study.academy.lesson.vo.LessonInfoVO;
import kh.study.academy.teacher.vo.TeacherVO;



@Service("adminService")
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	SqlSessionTemplate sqlSession;

	
/* 교사 관련================================================================================================================= */
	
	
	
	//교사 리스트 조회
	@Override
	public List<TeacherVO> selectTeacherList() {
		
		return sqlSession.selectList("adminMapper.selectTeacherList");
	}
	
	//교사 리스트 페이지에서 교사 검색
	@Override
	public List<TeacherVO> searchTeacher(Map<String, String> map) {
	
		return sqlSession.selectList("adminMapper.searchTeacher", map);
	}
	
	// 교사 리스트에서 아이디 클릭 시 해당 교사 상세정보 조회 
	@Override
	public TeacherVO selectTeacherDetail(String teacherCode) {
		
		return sqlSession.selectOne("adminMapper.selectTeacherDetail", teacherCode);
	}
	
	
	//팝업 페이지에서 교사 상태 변경
	@Override
	public void changeTeacherStatus(TeacherVO teacherVO) {
		sqlSession.update("adminMapper.changeTeacherStatus",teacherVO);
		
	}
	
	//팝업 페이지에서 교사 권한 승인
	@Override
	public void changeTeacherRole(TeacherVO teacherVO) {
		sqlSession.update("adminMapper.changeTeacherRole",teacherVO);
	}
	
	
	
/* 과목 등록 관련================================================================================================================= */
	
	
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
	

	
/* 교실 등록 관련================================================================================================================= */
	
	
	// 교실 등록
	@Override
	public void regLessonRoom(LessonRoomVO lessonRoomVO) {
		sqlSession.insert("adminMapper.regLessonRoom", lessonRoomVO);
	}
	// 등록된 교실리스트 조회
	@Override
	public List<LessonRoomVO> selectLessonRoom(String roomName) {
		return sqlSession.selectList("adminMapper.selectLessonRoom", roomName);
	}

	// 교실 삭제(체크박스)
	@Override
	public void deleteLessonRoom(LessonRoomVO lessonRoomVO) {
		sqlSession.delete("adminMapper.deleteLessonRoom", lessonRoomVO);
	}
	
	// 교실 사용중에서 미사용으로 클릭 시 업데이트
	@Override
	public void updateStatus(LessonRoomVO lessonRoomVO) {
		sqlSession.update("adminMapper.updateStatus",lessonRoomVO);
		
	}

	@Override
	public int selectStuCnt(LessonInfoVO lessonInfoVO) {
				List<String> useLessonList = sqlSession.selectList("adminMapper.selectStuCnt",lessonInfoVO);
				useLessonList.size();
				return useLessonList.size();
	
	}


}
