package kh.study.academy.chatting.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/potatoChat")
@Controller
public class ChatController {
	
	@RequestMapping("/pop")
	public String popup(){
		return "content/chatting/chatting";
	}
}
