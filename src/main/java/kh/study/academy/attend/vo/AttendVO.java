package kh.study.academy.attend.vo;

import kh.study.academy.student.vo.StudentLessonInfoVO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AttendVO {
	
	private String attendanceCode;
	private String lessonDate;
	private String isAttandence;
	private String studentLessonCode;
	
	private String studentCode;
	
	
	
	private StudentLessonInfoVO studentLessonInfoVO;
	
}
