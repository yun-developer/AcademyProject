package kh.study.academy.board.vo;

import lombok.Data;

@Data
public class BoardVO {
	private int boardNum;
	private int boardKindCode;
	private String boardTitle;
	private String boardContent;
	private int viewCount;
	private String createDate;
	private String teacherCode;
	
	
	
}
