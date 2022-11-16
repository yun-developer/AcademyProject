package kh.study.academy.student.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import kh.study.academy.student.vo.PaymentVO;
import kh.study.academy.student.vo.StudentVO;

@Service
public interface StudentService {
	String getNextStudentCode();
	
	void insertStudent(StudentVO studentVO);
	
	List<StudentVO> selectStuList(String studentName);
	
	void deleteCheckedStu(StudentVO studentVO);
	void deleteStu(String studentCode);
	
	StudentVO selectStuDetail(String studentCode);
	
	//학생편성
	void assignStu(Map<String, String> map);
}
