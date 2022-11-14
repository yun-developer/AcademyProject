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
	
	List<BoardVO> selectNoticeBoard();
	List<BoardVO> selectFreeBoard(int boardKindCode);
	
	BoardVO selectBoardDetail(int boardNum);
	
	void updateViewCount(int boardNum);
	
	// 공지사항 게시글 삭제
	void deleteBoardNotice(BoardVO boardVO);

	// 자유게시판 게시글 삭제
	void deleteBoardFree(BoardVO boardVO);
	
	void updateLike(int boardNum);
	void updateLikeCancle(int boardNum);
}
