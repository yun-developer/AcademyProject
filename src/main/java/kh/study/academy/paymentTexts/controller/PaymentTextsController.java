package kh.study.academy.paymentTexts.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@EnableScheduling 
public class PaymentTextsController {
	
	//@Async
	//@Scheduled(fixedRate = 1000)
	@Scheduled(cron = "0 12 16 25 * ?", zone="Asia/Seoul")   //매월 1일 18시 00분에 실행
    public void firstTask() {
		 SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
		 Date now = new Date(); 
		 String strDate = sdf.format(now);
		 System.out.println("현재시간:  " + strDate);
		 
    }
}
