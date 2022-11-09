package kh.study.academy.student.vo;

import java.util.List;

import kh.study.academy.admin.vo.SubjectVO;
import lombok.Data;

@Data
public class StudentVO {
	private String studentCode;
	private String studentName;
	private String birthday;
	private int year;
	private String addr;
	private String addrDetail;
	private String studentTell;
	private String regDate;
	private String studentGender;
	
	
	private SubjectVO subjectVO;
	private List<String> studentCodeList;
}
