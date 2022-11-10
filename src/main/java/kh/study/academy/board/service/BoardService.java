package kh.study.academy.board.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kh.study.academy.board.vo.BoardImgVO;
import kh.study.academy.board.vo.BoardVO;

@Service
public interface BoardService {
	int getNextBoardNum();

	void insertNotice(BoardVO boardVO);
	void insertFree(BoardVO boardVO);
	
	List<BoardVO> selectNoticeBoard(int boardKindCode);
	List<BoardVO> selectFreeBoard(int boardKindCode);
	
	BoardVO selectBoardDetail(int boardNum);
	
	
	// 공지사항 삭제
	
	
	
	// 자유게시판 삭제
	void deleteBoardFree(BoardVO boardVO);
	
	
}
