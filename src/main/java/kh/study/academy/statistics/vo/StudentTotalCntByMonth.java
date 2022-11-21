package kh.study.academy.statistics.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class StudentTotalCntByMonth {
	private String studentYear;
	private int studentCnt;
	private String month;
}
