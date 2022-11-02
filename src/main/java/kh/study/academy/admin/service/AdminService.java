package kh.study.academy.admin.service;

import java.util.List;

import kh.study.academy.admin.vo.LessonRoomVO;
import kh.study.academy.admin.vo.SubjectVO;
import kh.study.academy.lesson.vo.LessonVO;
import kh.study.academy.teacher.vo.TeacherVO;



public interface AdminService {

	
	//교사 리스트 조회
	List<TeacherVO> selectTeacherList();
	
	//과목 등록
	void insertSubject(SubjectVO subjectVO);
	
	// 등록된 과목리스트 조회
	List<SubjectVO> selectSubject();
	
	// 과목 삭제(체크박스)
	void deleteSubject(SubjectVO subjectVO);
	
	// 교실 등록
	void insertLessonRoom(LessonRoomVO lLessonRoomVO);
	
	// 등록된 과목리스트 조회
	List<LessonVO> selectLessonRoom();
	
}
