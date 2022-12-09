package kh.study.academy.board.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BoardKindVO {
	private int boardKindCode;  //공지사항 : 0    자유글 : 1
	private String kindName;
}
