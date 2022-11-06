package kh.study.academy.certified.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import kh.study.academy.certified.vo.MailVO;

@Service
public class MailService {
	
	@Autowired
	private JavaMailSender javaMailSender;

	public void sendMail(MailVO mail) {

		
		/*
		 * // 수신 대상을 담을 ArrayList 생성 ArrayList<String> toUserList = new ArrayList<>();
		 * 
		 * // 수신 대상 추가 toUserList.add("수신대상1@gmail.com");
		 * toUserList.add("수신대상2@naver.com");
		 * 
		 * // 수신 대상 개수 int toUserSize = toUserList.size();
		 */
		  
		 
		// SimpleMailMessage (단순 텍스트 구성 메일 메시지 생성할 때 이용)
		SimpleMailMessage simpleMessage = new SimpleMailMessage();

		// 수신자 설정
		simpleMessage.setTo(mail.getTo());

		// 메일 제목
		simpleMessage.setSubject(mail.getSubject());

		// 메일 내용
		simpleMessage.setText(mail.getText());

		// 메일 발송
		javaMailSender.send(simpleMessage);
	}
	
	//랜덤함수로 임시비밀번호 구문 만들기 
	public String getTempPassword(){
        char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
                'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };

        String str = "";

        // 문자 배열 길이의 값을 랜덤으로 10개를 뽑아 구문을 작성함
        int idx = 0;
        for (int i = 0; i < 10; i++) {
            idx = (int) (charSet.length * Math.random());
            str += charSet[idx];
        }
        return str;
        
    }
	
	

}