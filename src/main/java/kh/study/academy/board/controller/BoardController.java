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
	
	
	@GetMapping("/list")
	public String boardList() {
		
		return "content/board/board_list";
	}
	
	
	
	
	
	
	
}
