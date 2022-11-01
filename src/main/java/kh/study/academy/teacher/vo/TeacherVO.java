package kh.study.academy.teacher.vo;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
//제약조건 아직 추가 안했어요
public class TeacherVO {
	private String teacherCode; // TEACHER_001,TEACHER_002
	private String teacherName;
	private String teacherTell;
	private String career;
	private String subjectCode;
	private String teacherId;
	private String teacherPw;
	private int wrongPwCnt;
	private String teacherStatus;
	private String lessonsCode;
	private String teacherRole;
}
