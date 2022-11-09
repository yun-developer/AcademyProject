package kh.study.academy.board.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.board.service.BoardService;


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
	
	
	//자유게시판 리스트
	@GetMapping("/freeList")
	public String freeList(Model model) {
		model.addAttribute("freeList", boardService.selectFreeBoard(1));
		return "content/board/board_free_list";
	}
	
	
	
	
	
}
