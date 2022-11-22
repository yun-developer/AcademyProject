package kh.study.academy.board.controller;

import java.lang.ProcessBuilder.Redirect;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import kh.study.academy.board.service.BoardService;
import kh.study.academy.board.vo.BoardImgVO;
import kh.study.academy.board.vo.BoardVO;
import kh.study.academy.config.UploadFileUtil2;
import kh.study.academy.likeTable.service.LikeTableService;
import kh.study.academy.likeTable.vo.LikeTableVO;
import kh.study.academy.reply.service.ReplyService;


@Controller
@RequestMapping("/board") 
public class BoardController {
   
   @Resource(name = "boardService")
   private BoardService boardService;
   
   @Resource(name="replyService")
   private ReplyService replyService;
   
   @Resource(name="likeTableService")
   private LikeTableService likeTableService;
   
   //공지사항 리스트
   @GetMapping("/noticeList")
   public String noticeList(Model model) {
      model.addAttribute("noticeList", boardService.selectNoticeBoard());
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
      
      // 제목, 내용란에 글이 없다면 insert가 안되게 해야해야하고 다시 글작성 페이지로 와야한다.
      //첨부파일을 넣지 않고도 insert가 되게 해야한다.
      
      if(boardVO.getBoardContent().equals("") ) {  // 만약에 등록시 빈문자라면 다시 게시글등록 페이지 이동
         return "redirect:/board/writeNotice";
      }
      else if(boardVO.getBoardTitle().equals("")){
         return "redirect:/board/writeNotice";
      }
      
      else {
         boardService.insertNotice(boardVO);  // 빈문자가 아니라면 등록 쿼리 실행하고 게시글등록 페이지로 이동
      }   
      
         return "redirect:/board/noticeList";

   }
   
   
   // 공지사항 게시글 삭제
   @PostMapping("/deleteBoardNotice")
   public String deleteBoardNotice(String boardNums) {
      String[] boardNumNotice = boardNums.split(","); // 배열을 리스트로 변환작업 2줄
      List<String> boardNumNoticeList = Arrays.asList(boardNumNotice);
      
      BoardVO boardVO = new BoardVO();
      boardVO.setBoardNumList(boardNumNoticeList);
      
      boardService.deleteBoardNotice(boardVO);
      
      return "redirect:/board/noticeList";
   }
   
   
   
   //공지사항 상세 읽기
   @GetMapping("/noticeDetail")
   public String noticeDetail(Model model, int boardNum, LikeTableVO likeTableVO, Authentication authentication) {
	
      model.addAttribute("notice", boardService.selectBoardDetail(boardNum));
      model.addAttribute("replyList", replyService.selectReply(boardNum));
      boardService.updateViewCount(boardNum);
      
      
      User user = (User)authentication.getPrincipal();
      likeTableVO.setTeacherId(user.getUsername());
      model.addAttribute("likeCheck", likeTableService.likeCheck(likeTableVO));
      return "content/board/notice_detail";
   }
   
   
   // 공지사항 상세페이지에서 글 삭제하기	

	@PostMapping("/deleteNoticeDetail")
	public String deleteNoticeDetail(int boardNum) {
		boardService.deleteFreeDetail(boardNum);
		
		return"redirect:/board/noticeList";
	}

	
      
   // 공지사항 상세페이지에서 글 수정 페이지로 이동
   @PostMapping("/updateNoticeDetailFrom")
   public String updateNoticeDetailFrom(int boardNum, Model model) {
	   model.addAttribute("Imgs",boardService.selectImgs(boardNum)); 
	   model.addAttribute("notice", boardService.selectBoardDetail(boardNum));
	   
      return "content/board/update_notice_detail";
   }

   // 공지사항 글 수정 페이지에서 글 수정하기
   @RequestMapping("/updateNoticeDetail")
   public String updateNoticeDetail(BoardVO boardVO,Model model) {

	   boardService.updateNoticeDetail(boardVO);

	   return "redirect:/board/noticeDetail?boardNum=" + boardVO.getBoardNum();
   }
   
   //공지사항 좋아요
   @ResponseBody
   @PostMapping("/noticeDetailLike")
   public Map<String, Integer> noticeDetailLike(int boardNum, LikeTableVO likeTableVO, Authentication authentication) {
      User user = (User)authentication.getPrincipal();
      likeTableVO.setTeacherId(user.getUsername());
      
      int likeCheck = likeTableService.likeCheck(likeTableVO);
      
      //좋아요 한 번도 안 눌렀을 때
      if(likeCheck == 0) {
         likeTableService.insertLike(likeTableVO);
      }
      
      //좋아요 눌렀을 때
      else {
         likeTableService.deleteLike(likeTableVO);
      }

      
      Map<String, Integer> map = new HashMap<>();
      map.put("likeCheck", likeCheck);   // 1 or 0
      map.put("boardNum", boardNum);   // 글번호
      
      return map;
   }

   
 //-----------------------------------------------------------------------------------------------------------------------  
   
   
   //자유게시판 리스트
   @GetMapping("/freeList")
   public String freeList(Model model) {
      model.addAttribute("freeList", boardService.selectFreeBoard());
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
      
      if(boardVO.getBoardContent().equals("") ) {  // 만약에 등록시 빈문자라면 다시 과목등록 페이지 이동
         return "redirect:/board/writeFree";
      }
      else if(boardVO.getBoardTitle().equals("")){
         return "redirect:/board/writeFree";
      }
      
      else {
         boardService.insertFree(boardVO);  // 빈문자가 아니라면 등록 쿼리 실행하고 과목등록 페이지로 이동
      }   
         return "redirect:/board/freeList";

   }
      
      
   
   //자유게시판 상세 읽기
   @GetMapping("/freeDetail")
   public String freeDetail(Model model, int boardNum, Authentication authentication, LikeTableVO likeTableVO) {
	   System.out.println("!!!!!!!!!!!!!!!!!!!!!!!");
      model.addAttribute("free", boardService.selectBoardDetail(boardNum));
      model.addAttribute("replyList", replyService.selectReply(boardNum));
      
      boardService.updateViewCount(boardNum);
      
      User user = (User)authentication.getPrincipal();
      likeTableVO.setTeacherId(user.getUsername());
      model.addAttribute("likeCheck", likeTableService.likeCheck(likeTableVO));
      return "content/board/free_detail";
   }
   
   
   
   // 자유게시판 게시글 삭제
   @PostMapping("/deleteBoardFree")
   public String deleteBoardFree(String boardNums) {
      String[] boardNumArr = boardNums.split(","); // 배열을 리스트로 변환작업 2줄
      List<String> boardNumList = Arrays.asList(boardNumArr);
      
      BoardVO boardVO = new BoardVO();
      boardVO.setBoardNumList(boardNumList);
      
      boardService.deleteBoardFree(boardVO);
      
      return "redirect:/board/freeList";
   }
      
   
      
   // 자유게시판 상세페이지에서 등록한 글 삭제하기	
	@PostMapping("/deleteFreeDetail")
	public String deleteFreeDetail(int boardNum) {
		boardService.deleteFreeDetail(boardNum);
		
		return"redirect:/board/freeList";
	}

	
      
   // 자유게시판 상세페이지에서 글 수정 페이지로 이동
   @RequestMapping("/updateFreeDetailFrom")
   public String updateFreeDetailFrom(int boardNum, Model model) {
	   model.addAttribute("Imgs",boardService.selectImgs(boardNum)); 
	   model.addAttribute("free", boardService.selectBoardDetail(boardNum));
	   
      return "content/board/update_free_detail";
   }
   
   
   
   // 자유게시판 글 수정 페이지에서 글 수정하기
   @RequestMapping("/updateFreeDetail")
   public String updateFreeDetail(BoardVO boardVO,Model model, BoardImgVO boardImgVO) {
	  
	   boardService.updateFreeDetail(boardVO);

	   return "redirect:/board/freeDetail?boardNum=" + boardVO.getBoardNum();
   }
   
   
   // 자유게시판 상세 수정페이지에서 첨부파일 삭제 기능
  	@PostMapping("/deleteBoardImgUpdateFree")
  	public String deleteBoardImgUpdateFree(BoardImgVO boardImgVO) {
  		
  		boardService.deleteBoardImgUpdateFree(boardImgVO);
  		System.out.println("!!!!!!!!!" + boardImgVO);
  		
  		return "redirect:/board/updateFreeDetail?boardNum="+boardImgVO.getBoardNum();
  	}
   
  	
   
 //자유게시판 좋아요
   @ResponseBody
   @PostMapping("/freeDetailLike")
   public Map<String, Integer> freeDetailLike(int boardNum, LikeTableVO likeTableVO, Authentication authentication) {
      User user = (User)authentication.getPrincipal();
      likeTableVO.setTeacherId(user.getUsername());
      
      int likeCheck = likeTableService.likeCheck(likeTableVO);
      
      //좋아요 한 번도 안 눌렀을 때
      if(likeCheck == 0) {
         likeTableService.insertLike(likeTableVO);
      }
      
      //좋아요 눌렀을 때
      else {
         likeTableService.deleteLike(likeTableVO);
      }

      
      Map<String, Integer> map = new HashMap<>();
      map.put("likeCheck", likeCheck);   // 1 or 0
      map.put("boardNum", boardNum);   // 글번호
      
      return map;
   }
   
   
   
   //마이페이지에서 내가 쓴 글 확인
   @GetMapping("/myPage")
   public String selectMyPage(BoardVO boardVO, Authentication authentication, Model model) {
	   User user = (User)authentication.getPrincipal();
	   
	   boardVO.setTeacherId(user.getUsername());
	   
	   model.addAttribute("myList", boardService.selectMyPage(boardVO));
	   
	   return "content/board/myPage";
   }
	     

}