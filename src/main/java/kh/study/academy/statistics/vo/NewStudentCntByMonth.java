package kh.study.academy.statistics.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class NewStudentCntByMonth {
	private int studentCnt;
	
	//월
	private String mm;
}
