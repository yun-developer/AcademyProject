package kh.study.academy.statistics.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LessonCntByTeacher {
	private String teacherName;
	private int lessonCnt;
}
