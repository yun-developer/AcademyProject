package kh.study.academy.reply.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.reply.vo.ReplyVO;

@Service("replyService")
public class ReplyServiceImpl implements ReplyService{

	@Autowired
	SqlSessionTemplate sqlSession;

	
	// 댓글 등록
	@Override
	public void insertReply(ReplyVO replyVO) {
		sqlSession.insert("replyMapper.insertReply", replyVO);
	}
	
	
	// 댓글 조회
	@Override
	public List<ReplyVO> selectReply(int boardNum) {
		return sqlSession.selectList("replyMapper.selectReply", boardNum);
	}

	
	// 댓글 삭제
	@Override
	public void deleteReply(String replyNum) {
		sqlSession.delete("replyMapper.deleteReply", replyNum);
	}

	
	// 댓글 수정
	@Override
	public void updateReply(ReplyVO replyVO) {
		sqlSession.update("replyMapper.updateReply",replyVO);
	}
	
}
