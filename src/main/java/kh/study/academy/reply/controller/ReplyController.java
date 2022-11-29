package kh.study.academy.reply.controller;

import javax.annotation.Resource;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kh.study.academy.reply.service.ReplyService;
import kh.study.academy.reply.vo.ReplyVO;

@Controller
@RequestMapping("/reply")
public class ReplyController {
	
	@Resource(name = "replyService")
	private ReplyService replyService;
	
	
	//공지사항 댓글 작성
	@RequestMapping("/writeNoticeReply")
	public String writeNoticeReply(ReplyVO replyVO, Authentication authentication, int boardNum, RedirectAttributes redirect) {
		User user = (User)authentication.getPrincipal();
		replyVO.setTeacherId(user.getUsername());
		
		replyVO.setBoardNum(boardNum);
		
		replyService.insertReply(replyVO);
		
		//redirect로 갈 때 파라미터 넘기기
		redirect.addAttribute("boardNum", boardNum);
		return "redirect:/board/noticeDetail";
	}
	

	//공지사항 댓글 삭제
	@GetMapping("/noticeDelete")
	public String replyNoticeDelete(String replyNum, int boardNum, RedirectAttributes redirect) {
		replyService.deleteReply(replyNum);
		
		redirect.addAttribute("boardNum", boardNum);
		return "redirect:/board/noticeDetail";
	}
	
	//자유게시판 댓글 작성
	@RequestMapping("/writeFreeReply")
	public String writeFreeReply(ReplyVO replyVO, Authentication authentication, int boardNum, RedirectAttributes redirect) {
		User user = (User)authentication.getPrincipal();
		replyVO.setTeacherId(user.getUsername());
		replyVO.setBoardNum(boardNum);

		redirect.addAttribute("boardNum", boardNum);
		replyService.insertReply(replyVO);
		//redirect로 갈 때 파라미터 넘기기
		return "redirect:/board/freeDetail";
	}
	

	//자유게시판 댓글 삭제
	@GetMapping("/freeDelete")
	public String replyFreeDelete(String replyNum, int boardNum, RedirectAttributes redirect) {
		replyService.deleteReply(replyNum);
		
		redirect.addAttribute("boardNum", boardNum);
		return "redirect:/board/freeDetail";
	}
	
	
	// 자유게시판 댓글 수정
	@PostMapping("updateReply")
	public String updateReply(String replyNum, ReplyVO replyVO) {
		
		
		
		replyService.deleteReply(replyNum);
		
		
		replyService.updateReply(replyVO);
		return "";
	}
	
}
