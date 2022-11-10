package kh.study.academy.reply.vo;

import lombok.Data;

@Data
public class ReplyVO {
	private String replyNum;
	private int boardNum;
	private String teacherId;
	private String replyContent;
	private String replyCreateDate;
}
