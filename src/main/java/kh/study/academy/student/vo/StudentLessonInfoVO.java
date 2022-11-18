package kh.study.academy.student.vo;

import kh.study.academy.lesson.vo.LessonInfoVO;
import lombok.Data;

@Data
public class StudentLessonInfoVO {
	private String studentLessonCode;
	private String lessonInfoCode;
	private String attendanceCode;
	private String studentCode;
	
	private LessonInfoVO lessonInfoVO;
	/* private StudentVO studentVO; */
	
	private String paymentCode;
}
