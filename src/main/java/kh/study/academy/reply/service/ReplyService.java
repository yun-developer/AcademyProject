package kh.study.academy.reply.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kh.study.academy.reply.vo.ReplyVO;

@Service
public interface ReplyService {
	
	// 댓글 등록
	void insertReply(ReplyVO replyVO);
	
	// 댓글 조회
	List<ReplyVO> selectReply(int boardNum);
	
	// 댓글 삭제
	void deleteReply(String replyNum);
	
	// 댓글 수정
	void updateReply(ReplyVO replyVO);
}
