package kh.study.academy.teacher.service;

import kh.study.academy.teacher.vo.ProfileImgVO;
import kh.study.academy.teacher.vo.TeacherVO;

public interface TeacherService {

	//다음에 들어갈 TEACHER_CODE 조회
	String selectNextTeacherCode();
	
	//회원가입
	void join(TeacherVO teacherVO);
	
	
	//로그인
	TeacherVO login(TeacherVO teacherVO);
	
	//로그인 정보 찾기
	TeacherVO findId(TeacherVO teacherVO);
	
	//회원가입시 아이디 중복 검사
	TeacherVO idDoubleCheck(TeacherVO teacherVO);
	
	//회원가입시 전화번호 중복 검사
	TeacherVO tellDoubleCheck(TeacherVO teacherVO);
	
	//전화번호 인증번호 전송 전 입력한 데이터에 일치하는 회원이 있는지 조회
	TeacherVO findInfoForSendSms (TeacherVO teacherVO);
	
	//연락처 인증성공 시 그 인증번호로 임시비밀번호 업데이트
	void updateTemporaryPw(TeacherVO teacherVO);
	
	//회원 정보 조회
	TeacherVO selectTeacherInfo(TeacherVO teacherVO);
	
	//프로필 기본사진 등록
	void insertProfileImg(ProfileImgVO profileImgVO);
	
	//프로필 사진 변경
	void updateProfileImg(ProfileImgVO profileImgVO);
	
	//프로필 사진 조회
	ProfileImgVO selectProfileImg(ProfileImgVO profileImgVO);
	
	//개인정보 수정
	void updateInfo(TeacherVO teacherVO);
	//비밀번호 변경
	void updatePw(TeacherVO teacherVO);
	
	//회원탈퇴(TeacherStatus ->N으로 변경)
	void leaveAcademy(TeacherVO teacherVO);
	
	
	
}
