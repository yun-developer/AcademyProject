package kh.study.academy.certified.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.study.academy.certified.service.MailService;
import kh.study.academy.certified.vo.MailVO;

@Controller
@RequestMapping("/mail")
public class MailController {

	@Autowired
	private MailService mailService;
	
	// 수정중....
	// 이메일은 보내짐..근데 페이지 이동이 이상한듯..? 
	// 인증 번호 확인하면 모달 띄우기 할 것
	//깃허브 application 반드시 ignore 할 것~! 구글 비밀번호 때문에..!
	@ResponseBody
	@PostMapping("/send")
	private void sendMail(String teacherEmail) {
		String str = mailService.getTempPassword();
		
		MailVO mail = new MailVO();
		
		mail.setTo(teacherEmail);
		mail.setSubject("[학원명] 임시 비밀번호 입니다");
		mail.setText("안녕하세요. 임시비밀번호 안내 관련 이메일 입니다." + " 회원님의 임시 비밀번호는 "
                + str + " 입니다." + "로그인 후에 비밀번호를 변경을 해주세요");
		
		mailService.sendMail(mail);
		
		
	}
	
}
