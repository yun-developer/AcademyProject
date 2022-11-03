package kh.study.academy.admin.vo;


import java.util.List;

import groovy.transform.ToString;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ToString

public class LessonRoomVO {
	private String lessonRoomCode;
	private String roomName;
	
	private List<String> lessonRoomCodeList;
}
