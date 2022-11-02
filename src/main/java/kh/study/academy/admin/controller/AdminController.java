package kh.study.academy.admin.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kh.study.academy.admin.service.AdminService;
import kh.study.academy.admin.vo.SubjectVO;


@Controller
@RequestMapping("/admin")
public class AdminController {
	
	@Resource(name = "adminService")
	private AdminService adminService;
	
	// 과목 등록 (수학, 과학) 
	@PostMapping("/regSubject")
	public String regSubject(SubjectVO subjectVO) {
		adminService.insertSubject(subjectVO);
		System.out.println(subjectVO);
		return "redirect:/admin/selcetSubject";
	}
	
	@GetMapping("/selectSubject")
		public String selectSubject(Model model){
		
		model.addAttribute("selectSubject", adminService.selectSubject());
		
		return "content/admin/Reg_subject";
	}
	
}
