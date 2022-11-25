package kh.study.academy.paymentTexts.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@EnableScheduling 
public class PaymentTextsController {
	
	@Scheduled(cron = "0 1 18 00 * ?", zone="Asia/Seoul")   //매월 1일 18시 00분에 실행
    public void firstTask() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        Date now = new Date();
        String strDate = sdf.format(now);
        System.out.println("현재시간:  " + strDate);
    }
}
