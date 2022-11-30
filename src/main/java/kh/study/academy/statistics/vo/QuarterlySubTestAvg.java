package kh.study.academy.statistics.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class QuarterlySubTestAvg {
	
	//분기별 테스트 날짜
	private String testDate;
	private String subjectCode;
	private String subjectName;
	
	private String scoreAvg;
	private String studentYear;
	
	
}
