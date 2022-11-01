package kh.study.academy.teacher.service;

import kh.study.academy.teacher.vo.TeacherVO;

public interface TeacherService {

	//회원가입
	void join(TeacherVO teacherVO);
	
	
	//로그인
	TeacherVO login(TeacherVO teacherVO);
	
	//로그인 정보 찾기
	TeacherVO findLogin(TeacherVO teacherVO);
	
	
}
