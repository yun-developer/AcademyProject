package kh.study.academy.board.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import kh.study.academy.board.service.BoardService;
import kh.study.academy.board.vo.BoardImgVO;
import kh.study.academy.board.vo.BoardVO;
import kh.study.academy.config.UploadFileUtil2;


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
		return "content/board/write_notice_page";
	}
	
	
	//공지사항 글쓰기
	@PostMapping("/writeNotice")
	public String writeNotice2(BoardVO boardVO, Authentication authentication, List<MultipartFile> imgs) {
		User user = (User)authentication.getPrincipal();
		boardVO.setTeacherId(user.getUsername());
		
		int nextBoardNum = boardService.getNextBoardNum();
		boardVO.setBoardNum(nextBoardNum);
		
		//다중 이미지 파일 첨부
		List<BoardImgVO> uploadList = UploadFileUtil2.multiUploadFile(imgs);
		
		//이미지 정보를 insert 하기 위한 데이터를 가진 uploadList에 조회한 boardNum 값도 넣어줌
		for(BoardImgVO vo : uploadList) {
			vo.setBoardNum(nextBoardNum);
		}
		
		//boardVO가 첨부파일에 대한 정보를 세터로 다 가지게 됨
		boardVO.setImgList(uploadList);
		
		boardService.insertNotice(boardVO);
		
		return "redirect:/board/noticeList";
	}
	
	//공지사항 상세 읽기
	@GetMapping("/noticeDetail")
	public String noticeDetail() {
		
		return "content/board/notice_detail";
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
		
	//자유게시판 글쓰기
	@PostMapping("/writeFree")
	public String writeFree2(BoardVO boardVO, Authentication authentication, List<MultipartFile> imgs) {
		User user = (User)authentication.getPrincipal();
		boardVO.setTeacherId(user.getUsername());
		
		int nextBoardNum = boardService.getNextBoardNum();
		boardVO.setBoardNum(nextBoardNum);
		
		//다중 이미지 파일 첨부
		List<BoardImgVO> uploadList = UploadFileUtil2.multiUploadFile(imgs);
		
		//이미지 정보를 insert 하기 위한 데이터를 가진 uploadList에 조회한 boardNum 값도 넣어줌
		for(BoardImgVO vo : uploadList) {
			vo.setBoardNum(nextBoardNum);
		}
		
		//boardVO가 첨부파일에 대한 정보를 세터로 다 가지게 됨
		boardVO.setImgList(uploadList);
		
		boardService.insertFree(boardVO);
		
		return "redirect:/board/freeList";
	}
	
	
	//자유게시판 상세 읽기
	@GetMapping("/freeDetail")
	public String freeDetail() {
		
		return "content/board/free_detail";
	}
		
	
	
	
}
