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

	@Override
	public void insertReply(ReplyVO replyVO) {
		sqlSession.insert("replyMapper.insertReply", replyVO);
	}

	@Override
	public List<ReplyVO> selectReply(int boardNum) {
		return sqlSession.selectList("replyMapper.selectReply", boardNum);
	}

	@Override
	public void deleteReply(String replyNum) {
		sqlSession.delete("replyMapper.deleteReply", replyNum);
	}
	
}
