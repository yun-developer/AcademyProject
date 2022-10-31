package kh.study.academy.lesson.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/lesson")
public class LessonController {
	
	//메인
	@GetMapping("/main")
	public String mainPage( Model model) {
		
		return "content/lesson/lesson_main";
	}

	@GetMapping("/subject")
	public String selectsubject() {
		return "";
	}
}
