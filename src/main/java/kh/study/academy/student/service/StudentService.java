package kh.study.academy.student.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kh.study.academy.student.vo.PaymentVO;
import kh.study.academy.student.vo.StudentVO;

@Service
public interface StudentService {
	String getNextStudentCode();
	
	void insertStudent(StudentVO studentVO, PaymentVO paymentVO);
	
	List<StudentVO> selectStuList();
	
	void deleteCheckedStu(StudentVO studentVO);
	void deleteStu(String studentCode);
}
