package kh.study.academy.student.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.student.service.StudentService;
import kh.study.academy.student.vo.PaymentVO;
import kh.study.academy.student.vo.StudentVO;

@Controller
@RequestMapping("/stu")
public class StudentController {

	@Resource(name="studentService")
	private StudentService studentService;
	
	
	
	
	
	@GetMapping("/regPage")
	public String regPage(StudentVO studentVO, PaymentVO paymentVO) {
		System.out.println(studentVO);
		
		return "content/student/reg_student";
	}
	
	@PostMapping("/reg")
	public String regStu(StudentVO studentVO, PaymentVO paymentVO) {
		String nextStudentCode = studentService.getNextStudentCode();
		//조회한 studentCode를 insert
		studentVO.setStudentCode(nextStudentCode);
		paymentVO.setStudentCode(nextStudentCode);
		
		studentService.insertStudent(studentVO, paymentVO);
		System.out.println(studentVO);
		System.out.println(paymentVO);
		return "redirect:/stu/regPage";
	}
	
	
	
	
}
