package kh.study.academy.student.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import kh.study.academy.student.vo.PaymentVO;
import kh.study.academy.student.vo.StudentLessonInfoVO;
import kh.study.academy.student.vo.StudentVO;

@Service
public interface StudentService {
	String getNextStudentCode();
	
	void insertStudent(StudentVO studentVO);
	
	List<StudentVO> selectStuList(String studentName);
	
	void stuUpdateIsPay(PaymentVO paymentVO);
	void stuUpdateIsPayNone();
	
	
	void deleteCheckedStu(StudentVO studentVO);
	void deleteStu(String studentCode);
	
	StudentVO selectStuDetail(String studentCode);
	StudentVO selectStuDetailForUpdate(String studentCode);
	
	void updateStu(StudentVO studentVO);
	
	//학생편성
	void assignStu(StudentLessonInfoVO studentLessonInfoVO);
	//학생 중복 편성 확인
	List<StudentLessonInfoVO> isStuAssign(String studentCode);
	
	//모든학생이 듣고 있는 수업 조회
	List<StudentVO> selectStuLessonList();
	
	//학생 이동
	void updateStuLesson(StudentLessonInfoVO studentLessonInfoVO);
	
	//학급별 학생 목록 조회
	List<StudentVO> stuListByLesson(String lessonInfoCode);
	
	
	
}
