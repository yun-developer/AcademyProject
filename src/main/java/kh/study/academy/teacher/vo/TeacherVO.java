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
	@Size(max=15, message = "* 입력 길이를 초과했습니다.")
	private String teacherId;
	
	@NotBlank(message = "* 비밀번호는 필수 입력입니다.")
	private String teacherPw;
	
	private int wrongPwCnt;
	private String teacherStatus;
	private String lessonsCode;
	private String teacherRole;
	
	@NotBlank(message = "* 이메일은 필수 입력입니다.")
	private String teacherEmail;
	
	private String teacherGender;
	private String teacherBirthday;
	
	
	//DB 컬럼 외 변수들
	
	//회원가입 여부
	private String isNew;
	private int check; 
	
	private SubjectVO subjectVO;
	private ProfileImgVO profileImgVO;
	
}
