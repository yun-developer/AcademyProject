package kh.study.academy.board.vo;

import java.util.List;

import lombok.Data;

@Data
public class BoardVO {
	private int boardNum;
	private int boardKindCode;
	private String boardTitle;
	private String boardContent;
	private int viewCount;
	private String createDate;
	private String teacherId;
	private int replyNumCnt;
	private int likeCodeCnt;
	
	
	private List<BoardImgVO> imgList;
	
	private List<String> boardNumList;
}
