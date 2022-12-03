package kh.study.academy.teacher.service;


import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.teacher.vo.ProfileImgVO;
import kh.study.academy.teacher.vo.TeacherVO;

@Service("teacherService")
public class TeacherServiceImpl implements TeacherService {

	@Autowired
	SqlSessionTemplate sqlSession;
	
	//다음에 들어갈 TEACHER_CODE 조회
	@Override
	public String selectNextTeacherCode() {
		
		return sqlSession.selectOne("teacherMapper.selectNextTeacherCode");
	}
	
/* 회원가입 관련 =======================================================================================*/

	//회원가입
	@Override
	public void join(TeacherVO teacherVO) {
		
		sqlSession.insert("teacherMapper.join", teacherVO);
		
	}
	
	//회원가입시 아이디 중복 검사
	@Override
	public TeacherVO idDoubleCheck(TeacherVO teacherVO) {
		
		return sqlSession.selectOne("teacherMapper.idDoubleCheck", teacherVO);
	}
	
	//회원가입시 전화번호 중복 검사
	@Override
	public TeacherVO tellDoubleCheck(TeacherVO teacherVO) {
		
		return sqlSession.selectOne("teacherMapper.tellDoubleCheck", teacherVO);
	}
	
	
/* 로그인 관련 =========================================================================================*/

	//로그인
	@Override
	public TeacherVO login(TeacherVO teacherVO) {
		
		return sqlSession.selectOne("teacherMapper.login", teacherVO);
	}
	
	//로그인 정보 찾기 
	//아이디 정보 찾기
	@Override
	public TeacherVO findId(TeacherVO teacherVO) {
		
		return sqlSession.selectOne("teacherMapper.findId", teacherVO);
	}
	
	//로그인 정보 찾기 
	//비밀번호 찾기 전화번호 인증번호 전송 전 입력한 데이터에 일치하는 회원이 있는지 조회
	@Override
	public TeacherVO findInfoForSendSms(TeacherVO teacherVO) {
		
		return sqlSession.selectOne("teacherMapper.findInfoForSendSms", teacherVO);
	}

	//로그인 정보 찾기
	//전화번호 인증성공 시 그 인증번호로 임시비밀번호 업데이트
	@Override
	public void updateTemporaryPw(TeacherVO teacherVO) {
		
		sqlSession.update("teacherMapper.updateTemporaryPw", teacherVO);
	}
	
	
/* 회원정보 관련 =======================================================================================*/

	
	//회원 정보 조회
	@Override
	public TeacherVO selectTeacherInfo(TeacherVO teacherVO) {
		
		return sqlSession.selectOne("teacherMapper.selectTeacherInfo", teacherVO);
	}
	
	//프로필 기본사진 등록
	@Override
	public void insertProfileImg(ProfileImgVO profileImgVO) {
		
		sqlSession.insert("teacherMapper.insertProfileImg", profileImgVO);
	}
	
	//프로필 사진 변경
	@Override
	public void updateProfileImg(ProfileImgVO profileImgVO) {
		
		sqlSession.update("teacherMapper.updateProfileImg", profileImgVO);
	}
	
	//프로필 사진 조회
	@Override
	public ProfileImgVO selectProfileImg(ProfileImgVO profileImgVO) {
		
		return sqlSession.selectOne("teacherMapper.selectProfileImg", profileImgVO);
	}
	
	//개인정보 수정
	@Override
	public void updateInfo(TeacherVO teacherVO) {
		
		sqlSession.update("teacherMapper.updateInfo", teacherVO);
	}
	
	//비밀번호 변경
	@Override
	public void updatePw(TeacherVO teacherVO) {
		
		sqlSession.update("teacherMapper.updatePw", teacherVO);
	}
	
	
	//회원탈퇴(TeacherStatus ->N으로 변경)
	@Override
	public void leaveAcademy(TeacherVO teacherVO) {
		
		sqlSession.update("teacherMapper.leaveAcademy", teacherVO);
	}


	
}
