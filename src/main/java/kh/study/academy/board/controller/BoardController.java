package kh.study.academy.board.controller;

import javax.annotation.Resource;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.board.service.BoardService;
import kh.study.academy.board.vo.BoardVO;


@Controller
@RequestMapping("/board") 
public class BoardController {
	
	@Resource(name = "boardService")
	private BoardService boardService;
	
	//공지사항 리스트
	@GetMapping("/noticeList")
	public String noticeList(Model model) {
		model.addAttribute("noticeList", boardService.selectNoticeBoard(0));
		return "content/board/board_notice_list";
	}
	
	//공지사항 글쓰기 페이지 이동
	@GetMapping("/writeNotice")
	public String writeNotice(Model model) {
		model.addAttribute("noticeList", boardService.selectNoticeBoard(0));
		
		return "content/board/write_notice_page";
	}
	
	
	//공지사항 글쓰기
	@PostMapping("/writeNotice")
	public String writeNotice2(BoardVO boardVO, Authentication authentication) {
		User user = (User)authentication.getPrincipal();
		boardVO.setTeacherId(user.getUsername());
		
		int nextBoardNum = boardService.getNextBoardNum();
		boardVO.setBoardNum(nextBoardNum);
		
		boardService.insertNotice(boardVO);
		
		return "redirect:/board/noticeList";
	}
	
	
	//자유게시판 리스트
	@GetMapping("/freeList")
	public String freeList(Model model) {
		model.addAttribute("freeList", boardService.selectFreeBoard(1));
		return "content/board/board_free_list";
	}
	
	
	//자유게시판 글쓰기 페이지 이동
	@GetMapping("/writeFree")
	public String writeFree() {
		return "content/board/write_free_page";
	}
		
	
	
}
