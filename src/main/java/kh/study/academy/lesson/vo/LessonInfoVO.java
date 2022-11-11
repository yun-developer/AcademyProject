package kh.study.academy.lesson.vo;

import java.util.List;

import kh.study.academy.admin.vo.LessonRoomVO;
import kh.study.academy.admin.vo.SubjectVO;
import kh.study.academy.student.vo.StudentLessonInfoVO;
import lombok.Data;

@Data
public class LessonInfoVO {
	
	
	private String lessonInfoCode;
	private String subjectCode;
	private String lessonRoomCode;	
	private String stepCode;
	private String lessonDayCode;
	private String teacherCode;
	private String lessonTime;
	private int year;
	private int maxStudent;
	private int nowStudentCnt;
	private int money;
	private String memo;
	private String lessonInfoStatus;
	private String lessonInfoRegdate;
	
	private String LessonRoomVO;
	//collection 연결
	private List<StudentLessonInfoVO> studentLessonInfoList;

}
