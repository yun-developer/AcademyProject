package kh.study.academy.admin.service;

import java.util.List;
import java.util.Map;

import kh.study.academy.admin.vo.LessonRoomVO;
import kh.study.academy.admin.vo.SubjectVO;
import kh.study.academy.lesson.vo.LessonInfoVO;
import kh.study.academy.lesson.vo.StepVO;
import kh.study.academy.teacher.vo.TeacherVO;



public interface AdminService {

/* 교사 관련================================================================================================================= */
	
	
	//교사 리스트 조회
	List<TeacherVO> selectTeacherList();
	
	//교사 리스트 페이지에서 교사 검색
	List<TeacherVO> searchTeacher(Map<String, String> map);
	
	// 교사 리스트에서 아이디 클릭 시 해당 교사 상세정보 조회 
	TeacherVO selectTeacherDetail(String teacherCode);
	
	//팝업 페이지에서 교사 상태 변경
	void changeTeacherStatus(TeacherVO teacherVO);
	
	//팝업 페이지에서 교사 권한 승인
	void changeTeacherRole(TeacherVO teacherVO);
	
	
	
/* 과목 등록 관련================================================================================================================= */
	
	
	//과목 등록
	void insertSubject(SubjectVO subjectVO);
	
	// 등록된 과목리스트 조회
	List<SubjectVO> selectSubject();
	
	// 과목 삭제(체크박스)
	void deleteSubject(SubjectVO subjectVO);
	
	
	
/* 교실 등록 관련================================================================================================================= */
	
	
	// 교실 등록
	void regLessonRoom(LessonRoomVO lessonRoomVO);
	
	// 등록된 과목리스트 조회
	List<LessonRoomVO> selectLessonRoom(String roomName);
	
	// 교실 삭제(체크박스)
	void deleteLessonRoom(LessonRoomVO lessonRoomVO);

	// 교실 사용중에서 미사용으로 클릭시 업데이트
	void updateStatus(LessonRoomVO lessonRoomVO);

	int selectStuCnt(LessonInfoVO lessonInfoVO);
	
	
	
	
	

}




