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
	public List<BoardVO> selectNoticeBoard(int boardKindCode) {
		return sqlSession.selectList("boardMapper.selectNoticeBoard", boardKindCode);
	}
	
	@Override
	public List<BoardVO> selectFreeBoard(int boardKindCode) {
		return sqlSession.selectList("boardMapper.selectFreeBoard", boardKindCode);
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


	@Override
	public void updateViewCount(int boardNum) {
		sqlSession.update("boardMapper.updateViewCount", boardNum);
	}




	
	  
	  
	  
}
