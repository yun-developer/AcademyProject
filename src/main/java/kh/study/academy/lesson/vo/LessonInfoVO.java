package kh.study.academy.lesson.vo;

import java.util.List;

import kh.study.academy.student.vo.StudentLessonInfoVO;
import lombok.Data;

@Data
public class LessonInfoVO {
	
	
	private String lessonInfoCode;
	private String lessonsCode;
	private String lessonTime;
	private String stepCode;
	private String lessonDayCode;
	private String lessonRoomCode;
	private int year;
	private String teacherCode;
	private String subjectCode;
	private int nowStudentCnt;
	private int money;
	private String lessonInfoRegdate;
	private String lessonInfoStatus;
	
	//collection 연결
	private List<StudentLessonInfoVO> studentLessonInfoList;

}
