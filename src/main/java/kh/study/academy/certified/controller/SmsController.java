package kh.study.academy.certified.controller;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.study.academy.certified.service.SmsService;
import kh.study.academy.teacher.service.TeacherService;
import kh.study.academy.teacher.vo.TeacherVO;

@Controller
@RequestMapping("/sms")
public class SmsController {

	@Autowired
	SmsService smsService;
	
	@Autowired
	TeacherService teacherService;
	
	
	
	
	//비밀번호 찾기에서 연락처로 문자전송을 눌렀을 때 
	@ResponseBody
	@GetMapping("/sendSMS")
	public String sendSMS( TeacherVO teacherVO ) {
		
		
		System.out.println("!!!!!!!!!!!!!!!!!!!!!" + teacherVO);
		
		
		//전화번호 인증번호 전송 전 입력한 데이터에 일치하는 회원이 있는지 조회
		TeacherVO teacher =  teacherService.findInfoForSendSms(teacherVO);
		
		System.out.println("!!!!!!!!!!!@@@@@!!!!!!!!!!" + teacher);
		
		//일치하는 회원이 있으면 문자전송
		//여기서 하는거 맞을까
		if(teacher != null) {
			 Random rand  = new Random();
		        String numStr = "";
		        for(int i=0; i<8; i++) {
		            String ran = Integer.toString(rand.nextInt(10));
		            numStr+=ran;
		        }

		        smsService.certifiedPhoneNumber(teacherVO.getTeacherTell(),numStr);
		        return numStr;
		}
		else {
			return null;
		}
		
		
       
        
        
        
//        System.out.println("수신자 번호 : " + teacherVO.getTeacherTell());
//        System.out.println("인증번호 : " + numStr);
    }
	
	
	
	
	
	
	
	
	
	
	
}
