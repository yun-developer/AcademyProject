package kh.study.academy.teacher.service;

import kh.study.academy.teacher.vo.ProfileImgVO;
import kh.study.academy.teacher.vo.TeacherVO;

public interface TeacherService {

	//회원가입
	void join(TeacherVO teacherVO);
	
	
	//로그인
	TeacherVO login(TeacherVO teacherVO);
	
	//로그인 정보 찾기
	TeacherVO findId(TeacherVO teacherVO);
	
	//아이디 중복 검사
	TeacherVO idDoubleCheck(TeacherVO teacherVO);
	
	//회원 정보 조회
	TeacherVO selectTeacherInfo(TeacherVO teacherVO);
	
	//프로필사진 등록
	void insertProfileImg(ProfileImgVO profileImgVO);
}
