package kh.study.academy.lesson.vo;

import java.util.List;

import kh.study.academy.admin.vo.LessonRoomVO;
import kh.study.academy.admin.vo.SubjectVO;
import kh.study.academy.student.vo.StudentLessonInfoVO;
import kh.study.academy.teacher.vo.TeacherVO;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Data
@Getter
@Setter
@ToString
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
	
	private List<String> lessonInfoCodeList;
	
	// association 연결
	private SubjectVO subjectVO;
	private StepVO stepVO;
	private LessonRoomVO lessonRoomVO;
	private TeacherVO teacherVO;
	
	//collection 연결
	private List<StudentLessonInfoVO> studentLessonInfoList;
	
	private List<String> subjectCodeList;
}
