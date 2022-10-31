package kh.study.academy.admin.service;

import java.util.List;

import kh.study.academy.teacher.vo.TeacherVO;



public interface AdminService {

	
	//교사 리스트 조회
	List<TeacherVO> selectTeacherList();
	
	
	
	
	
}
