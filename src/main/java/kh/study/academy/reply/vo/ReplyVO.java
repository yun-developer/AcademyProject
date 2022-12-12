package kh.study.academy.reply.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ReplyVO {
	
	private String replyNum;
	private int boardNum;
	private String teacherId;
	private String replyContent;
	private String replyCreateDate;

}
