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
	List<BoardVO> selectNoticeMain();
	
	List<BoardVO> selectFreeBoard();
	List<BoardVO> selectFreeMain();
	
	BoardVO selectBoardDetail(int boardNum);
	
	void updateViewCount(int boardNum);
	
	// 공지사항 게시글 삭제
	void deleteBoardNotice(BoardVO boardVO);

	// 자유게시판 게시글 삭제
	void deleteBoardFree(BoardVO boardVO);
	
	
	// 공지사항 상세페이지에 게시글 삭제
	void deleteNoticeDetail(int boardNum);
	
	// 자유게시판 상세페이지에 게시글 삭제
	void deleteFreeDetail(int boardNum);
	
		
	// 공지사항 상세 페이지에서 게시글 수정
	void updateNoticeDetail(BoardVO boardVO);
	
	// 자유게시판 상세 페이지에서 게시글 수정
	void updateFreeDetail(BoardVO boardVO);
	
	// 자유게시판 상세 수정페이지에서 첨부파일 삭제 기능
	void deleteBoardImgUpdateFree(BoardImgVO boardImgVO);
	
	void updateLike(int boardNum);
	void updateLikeCancle(int boardNum);
	
	List<BoardVO> selectMyPage(BoardVO boardVO);
}
