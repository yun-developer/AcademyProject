package kh.study.academy.check.controller;

import java.util.Random;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/check")
public class CheckController {

//	@Resource(name = "checkService")
//	private CheckService checkService;
	
	
	//번호를 입력 후 [확인] 버튼을 누르면 ajax로 input 에 입력된 번호가 controller로 전송된다.
	//Random 메소드를 통해 인증번호 4자리를 랜덤으로 생성
	@GetMapping("/sendSMS")
    @ResponseBody
    public String sendSMS(String phoneNumber) {

        Random rand  = new Random();
        String numStr = "";
        for(int i=0; i<4; i++) {
            String ran = Integer.toString(rand.nextInt(10));
            numStr+=ran;
        }

        System.out.println("수신자 번호 : " + phoneNumber);
        System.out.println("인증번호 : " + numStr);
 //       checkService.PhoneNumberCheck(phoneNumber,numStr);
        return numStr;
    }
	
	
	
	
	
	
	
	
	
}
