package kh.study.academy.reply.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kh.study.academy.reply.vo.ReplyVO;

@Service
public interface ReplyService {

	void insertReply(ReplyVO replyVO);
	
	List<ReplyVO> selectReply(int boardNum);
	
	void deleteReply(String replyNum);
	
}
