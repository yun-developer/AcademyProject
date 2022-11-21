package kh.study.academy.board.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kh.study.academy.board.vo.BoardImgVO;
import kh.study.academy.board.vo.BoardVO;

@Service("boardService")
public class BoardServiceImpl implements BoardService{
	  @Autowired
	  SqlSessionTemplate sqlSession;
	  
    @Override
	public int getNextBoardNum() {
		return sqlSession.selectOne("boardMapper.getNextBoardNum");
	}
		    
	
	@Transactional(rollbackFor = Exception.class)  
	@Override
	public void insertNotice(BoardVO boardVO) {
		sqlSession.insert("boardMapper.insertNotice", boardVO);
		// 이미지를 담는 list의 갯수가 0이 아닐 때 첨부파일 등록이 되는 쿼리문을 실행하겠다.
		if(boardVO.getImgList().size() != 0) {
			sqlSession.insert("boardMapper.insertImgs", boardVO);
			
		}
	}
	
	@Transactional(rollbackFor = Exception.class)  
	@Override
	public void insertFree(BoardVO boardVO) {
		sqlSession.insert("boardMapper.insertFree", boardVO);
		// 이미지를 담는 list의 갯수가 0이 아닐 때 첨부파일 등록이 되는 쿼리문을 실행하겠다.
		if(boardVO.getImgList().size() != 0) {
			sqlSession.insert("boardMapper.insertImgs", boardVO);
			
		}
	}

	@Override
	public List<BoardVO> selectNoticeBoard() {
		return sqlSession.selectList("boardMapper.selectNoticeBoard");
	}
	
	@Override
	public List<BoardVO> selectNoticeMain() {
		return sqlSession.selectList("boardMapper.selectNoticeMain");
	}
	
	
	
	@Override
	public List<BoardVO> selectFreeBoard() {
		return sqlSession.selectList("boardMapper.selectFreeBoard");
	}
	
	
	@Override
	public List<BoardVO> selectFreeMain() {
		return sqlSession.selectList("boardMapper.selectFreeMain");
	}
	
	
	@Override
	public BoardVO selectBoardDetail(int boardNum) {
		return sqlSession.selectOne("boardMapper.selectBoardDetail", boardNum);
	}

	// 공지사항 게시글 삭제
	@Override
	public void deleteBoardNotice(BoardVO boardVO) {
		sqlSession.delete("boardMapper.deleteBoardNotice", boardVO);
		
	}
	
	// 자유게시판 게시글 삭제
	@Override
	public void deleteBoardFree(BoardVO boardVO) {
		sqlSession.delete("boardMapper.deleteBoardFree", boardVO);
		
	}
	
	// 공지사항 상세페이지에서 게시글 삭제
	@Override
	public void deleteNoticeDetail(int boardNum) {
		sqlSession.delete("boardMapper.deleteNoticeDetail", boardNum);
		
	}

	
	// 자유게시판 상세페이지에서 게시글 삭제
	@Override
	public void deleteFreeDetail(int boardNum) {
		sqlSession.delete("boardMapper.deleteFreeDetail",boardNum);
	}
	
	
	// 공지사항 상세 페이지에서 게시글 수정
	@Override
	public void updateNoticeDetail(BoardVO boardVO) {
		sqlSession.update("boardMapper.updateNoticeDetail",boardVO);
		
	}
	
	// 자유게시판 상세 페이지에서 게시글 수정
	@Override
	public void updateFreeDetail(BoardVO boardVO) {
		sqlSession.update("boardMapper.updateFreeDetail",boardVO);
	}
	
	
	// 자유게시판 상세 수정페이지에서 첨부파일 삭제 기능
	@Override
	public void deleteBoardImgUpdateFree(BoardImgVO boardImgVO) {
		sqlSession.delete("boardMapper.deleteBoardImgUpdateFree", boardImgVO);
	}
	
	
	
	
	
	
	@Override
	public void updateViewCount(int boardNum) {
		sqlSession.update("boardMapper.updateViewCount", boardNum);
	}


	@Override
	public void updateLike(int boardNum) {
		sqlSession.update("boardMapper.updateLike", boardNum);
	}


	@Override
	public void updateLikeCancle(int boardNum) {
		sqlSession.update("boardMapper.updateLikeCancle", boardNum);
	}


	@Override
	public List<BoardVO> selectMyPage(BoardVO boardVO) {
		return sqlSession.selectList("boardMapper.selectMyPage", boardVO);
	}





	


	










	




	
	  
	  
	  
}
