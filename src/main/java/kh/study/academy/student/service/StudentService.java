package kh.study.academy.student.service;

import org.springframework.stereotype.Service;

import kh.study.academy.student.vo.PaymentVO;
import kh.study.academy.student.vo.StudentVO;

@Service
public interface StudentService {
	void insertStudent(StudentVO studentVO, PaymentVO paymentVO);
}
