package kh.study.academy.certified.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MailVO {
	
	private String to; //수신자
	private String subject; //제목
	private String text; //내용
}
