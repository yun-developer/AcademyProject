package kh.study.academy.board.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.board.service.BoardService;


@Controller
@RequestMapping("/board") 
public class BoardController {
	
	@Resource(name = "boardService")
	private BoardService boardService;
	
	//공지사항
	@GetMapping("/noticeList")
	public String noticeList() {
		
		return "content/board/board_notice_list";
	}
	
	
	//자유게시판
	@GetMapping("/freeList")
	public String freeList() {
		
		return "content/board/board_free_list";
	}
	
	
	
	
	
}
