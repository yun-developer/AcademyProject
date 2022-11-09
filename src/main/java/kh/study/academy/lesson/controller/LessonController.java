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
	
	//주별 학급목록
	@GetMapping("/listByWeek")
	public String listByWeek() {
		
		return "content/lesson/lessonlist_byweek";
	}
	
	
	@GetMapping("/subject")
	public String selectsubject() {
		
		return "";
	}
}
