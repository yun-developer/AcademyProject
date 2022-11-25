package kh.study.academy.student.vo;

import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import kh.study.academy.admin.vo.SubjectVO;
import kh.study.academy.test.vo.TestVO;
import lombok.Data;

@Data
public class StudentVO {
	private String studentCode;
	
	@NotBlank
	private String studentName;
	
	@NotBlank
	private String birthday;
	
	private int studentYear;
	
	@NotBlank
	private String addr;
	
	@NotBlank
	private String addrDetail;
	
	@NotBlank
	@Size(min = 10, max =11, message= "* 전화번호는 10~11개의 숫자로 입력하세요")
	private String studentTell;
	
	private String regDate;
	
	private String studentGender;
	
	private String isPay;
	private String teacherName;
	private String paymentCode;
	
	/* private SubjectVO subjectVO; */
	private List<String> studentCodeList;

	
	
	//collection 연결 해놓은 것들 
	private List<StudentLessonInfoVO> studentLessonInfoList;
	
	private List<TestVO> testList;

	
	
	
}
