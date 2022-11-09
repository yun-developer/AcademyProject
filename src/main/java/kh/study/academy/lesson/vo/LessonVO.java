package kh.study.academy.lesson.vo;

import java.util.List;

import lombok.Data;

@Data
public class LessonVO {
	private String lessonsCode;
	private String subjectCode;
	private int maxStudent;
	
	
	
	
	//collection 연결 해놓은 것들
	private List<lessonInfoVO> lessonInfoList;
	
	
}
