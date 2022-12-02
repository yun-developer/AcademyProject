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
	
	private String studentName;
	
	private String birthday;
	
	private int studentYear;
	
	private String addr;
	
	private String addrDetail;
	
	private String studentTell;
	
	private String regDate;
	
	private String studentGender;
	
	private String isPay;
	private String teacherName;
	private String paymentCode;
	private String studentStatus;
	
	
	
	/* private SubjectVO subjectVO; */
	private List<String> studentCodeList;
	private List<String> beforeLessonInfoCodeList;
	
	
	//collection 연결 해놓은 것들 
	private List<StudentLessonInfoVO> studentLessonInfoList;
	
	private List<TestVO> testList;


	
	
	
}
