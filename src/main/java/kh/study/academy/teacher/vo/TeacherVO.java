package kh.study.academy.teacher.vo;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import kh.study.academy.admin.vo.SubjectVO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
//제약조건 아직 추가 안했어요
public class TeacherVO {
	private String teacherCode; // TEACHER_001,TEACHER_002
	
	@NotBlank(message = "* 이름은 필수 입력입니다.")
	@Size(max=8, message = "* 입력 길이를 초과했습니다.")
	private String teacherName;
	
	@Size(min = 10, max =11, message = "*전화번호는 10~11개의 숫자로 입력하세요.")
	private String teacherTell;
	
	private String career;
	private String subjectCode;
	
	@NotBlank(message = "* ID은 필수 입력입니다.")
	@Size(max=8, message = "* 입력 길이를 초과했습니다.")
	private String teacherId;
	
	@NotBlank(message = "* 비밀번호는 필수 입력입니다.")
	private String teacherPw;
	private int wrongPwCnt;
	private String teacherStatus;
	private String lessonsCode;
	private String teacherRole;
	
	private int check; 
	
	private SubjectVO subjectVO;
	
	
	//이메일 형식 수정필요
	@NotBlank(message = "* 이메일은 필수 입력입니다.")
	private String teacherEmail;
	
	
	//젠더는 not null이기 때문에 필수 입력이에용...!
	private String teacherGender;
	
	
	private String teacherBirthday;
	
	
  
	
}
