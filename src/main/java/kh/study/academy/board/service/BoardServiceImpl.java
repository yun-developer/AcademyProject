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
		sqlSession.insert("boardMapper.insertImgs", boardVO);
	}
	
	@Transactional(rollbackFor = Exception.class)  
	@Override
	public void insertFree(BoardVO boardVO) {
		sqlSession.insert("boardMapper.insertFree", boardVO);
		sqlSession.insert("boardMapper.insertImgs", boardVO);
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

	
	  
	  
	  
}
