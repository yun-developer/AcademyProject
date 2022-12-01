package kh.study.academy.attend.service;

import kh.study.academy.attend.vo.AttendVO;

public interface AttendService {
	
	//출결코드 생성
	void creatAttend(AttendVO attendVO);
	//학생들의 출결 상태 확인
	AttendVO selectAttendStu(String studentCode);
	//출석 상태 변경
	void updateIsAttandence(AttendVO attendVO);
}
