package kh.study.academy.lesson.vo;

import java.util.List;

import kh.study.academy.admin.vo.LessonRoomVO;
import kh.study.academy.admin.vo.SubjectVO;
import kh.study.academy.student.vo.StudentLessonInfoVO;
import lombok.Data;

@Data
public class LessonInfoVO {
	
	
	private String lessonInfoCode;
	private String lessonsCode;
	private String lessonTime;
	private String stepCode;
	private String lessonDayCode;
	private int year;
	private String teacherCode;
	private int nowStudentCnt;
	private int money;
	private String lessonInfoRegdate;
	private String lessonInfoStatus;
	
	private SubjectVO subjectVO;
	private LessonRoomVO lessonRoomVO;
	//collection 연결
	private List<StudentLessonInfoVO> studentLessonInfoList;

}
