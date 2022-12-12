package kh.study.academy.admin.vo;

import java.util.List;

import groovy.transform.ToString;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ToString
public class SubjectVO {

	private String subjectCode;
	private String subjectName;

	private List<String> subjectCodeList;

}
