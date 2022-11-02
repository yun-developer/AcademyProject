package kh.study.academy.admin.service;

import java.util.List;

import kh.study.academy.admin.vo.SubjectVO;
import kh.study.academy.teacher.vo.TeacherVO;



public interface AdminService {

	
	//교사 리스트 조회
	List<TeacherVO> selectTeacherList();
	
	//과목등록
	void insertSubject(SubjectVO subjectVO);
	
	// 등록된 과목 조회
	List<SubjectVO> selectSubject();
	
	
}
