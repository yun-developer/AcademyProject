package kh.study.academy.score.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ScoreVO {
	private String testCode; 
	private String testDate; 
	private int score; 
	private int rank; 
	
	
	private String lessonInfoCode; 
	
	private String studentCode; 
}
