package kh.study.academy.test.vo;

import kh.study.academy.admin.vo.SubjectVO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TestVO {
	
	private String testCode; 
	private String subjectCode; 
	private String studentCode; 
	private String testDate; 
	private int score; 
	
	//컬럼 외 변수들
	private String originDate; 
	private int check; 
	private SubjectVO subjectVO;
}
