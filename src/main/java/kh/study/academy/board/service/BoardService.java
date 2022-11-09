package kh.study.academy.board.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kh.study.academy.board.vo.BoardVO;

@Service
public interface BoardService {
	void insertNotice(BoardVO boardVO);
	void insertFree(BoardVO boardVO);
	
	List<BoardVO> selectNoticeBoard(int boardKindCode);
	List<BoardVO> selectFreeBoard(int boardKindCode);
	
	BoardVO selectBoardDetail(int boardNum);
}
