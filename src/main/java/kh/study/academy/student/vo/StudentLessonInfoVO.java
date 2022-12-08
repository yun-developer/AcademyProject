package kh.study.academy.student.vo;

import java.util.List;


import kh.study.academy.lesson.vo.LessonInfoVO;
import lombok.Data;

@Data
public class StudentLessonInfoVO {
	private String studentLessonCode;
	private String lessonInfoCode;
	private String attendanceCode;
	private String studentCode;
	
	private String beforeLessonInfoCode;
	
	
	private List<String> beforeLessonInfoCodeList;
	
	
	private LessonInfoVO lessonInfoVO;
	
	
	private String paymentCode;
}
