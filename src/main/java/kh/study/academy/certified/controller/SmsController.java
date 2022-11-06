package kh.study.academy.certified.controller;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.study.academy.certified.service.SmsService;

@Controller
@RequestMapping("/sms")
public class SmsController {

	@Autowired
	SmsService smsService;
	
	@ResponseBody
	@GetMapping("/sendSMS")
	public String sendSMS(String teacherTell) {

        Random rand  = new Random();
        String numStr = "";
        for(int i=0; i<4; i++) {
            String ran = Integer.toString(rand.nextInt(10));
            numStr+=ran;
        }

        System.out.println("수신자 번호 : " + teacherTell);
        System.out.println("인증번호 : " + numStr);
        smsService.certifiedPhoneNumber(teacherTell,numStr);
        return numStr;
    }
}
