package kh.study.academy.student.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;

import javax.annotation.Resource;

import org.json.simple.JSONObject;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import kh.study.academy.student.service.StudentService;
import kh.study.academy.student.vo.StudentVO;
import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;

@Component
@EnableScheduling 
public class PaymentTextsController {
	
	@Resource(name="studentService")
	private StudentService studentService;
	
	
	
	//달 바뀌면 isPay = 'n'으로 바꾸기
	@Scheduled(cron = "0 00 12 1 * ?", zone="Asia/Seoul")  //매월 1일 12시 00분 00초에 실행 
	public void stuUpdateIsPayNone() {
		studentService.stuUpdateIsPayNone();
	}
	
	
	
	
	//매달 1일 13시에 학원비 수납 문자 보내기
	@Scheduled(cron = "0 0 13 1 * ?", zone="Asia/Seoul")   
	public void paymentSms() {
		
		String api_key = "NCSOHSUJTJFE1FES";
	    String api_secret = "ZURBUMXTPGZDDJXBZITGMV95C5MVAID2";
	    Message coolsms = new Message(api_key, api_secret);
		
	    
		for(StudentVO stu :  studentService.selectStuLessonList(null)) {
			
				
			if(stu.getStudentLessonInfoList().get(0).getLessonInfoVO() != null && stu.getStudentStatus().equals("Y")) {
				String studentName = stu.getStudentName();
				String studentTell = stu.getStudentTell();
				String subjectName = stu.getStudentLessonInfoList().get(0).getLessonInfoVO().getSubjectVO().getSubjectName();
				String stepName = stu.getStudentLessonInfoList().get(0).getLessonInfoVO().getStepVO().getStepName();
				int money = stu.getStudentLessonInfoList().get(0).getLessonInfoVO().getMoney();
				
				
				HashMap<String, String> params = new HashMap<String, String>();
				params.put("to", studentTell);	// 수신전화번호
				params.put("from", "01099301637");	// 발신전화번호. 테스트시에는 발신,수신 둘다 본인 번호로 하면 됨
				params.put("type", "SMS");
				params.put("text", "*" + studentName + " 학생의 수강료 납부 안내*\n" + subjectName + "-" + stepName + "반 수강료는 "+ money + "원 입니다.\n[PotatoAcademy]");
				params.put("app_version", "test app 1.2"); // application name and version
				
				try {
					JSONObject obj = (JSONObject) coolsms.send(params);
					System.out.println(obj.toString());
				} catch (CoolsmsException e) {
					System.out.println(e.getMessage());
					System.out.println(e.getCode());
				}
			}
			}
		}
	
	
	 //미수납인 학생에게 8일 13시에 문자 보내기. 
	 @Scheduled(cron = "0 0 13 8 * ?", zone="Asia/Seoul")
	 public void isPayNoneSms() {
		 
		String api_key = "NCSOHSUJTJFE1FES";
	    String api_secret = "ZURBUMXTPGZDDJXBZITGMV95C5MVAID2";
	    Message coolsms = new Message(api_key, api_secret);
	    
	    
	    for(StudentVO stu :  studentService.selectStuLessonList(null)) {
	    	
			if((stu.getStudentLessonInfoList().get(0).getLessonInfoVO() != null) && (stu.getIsPay().equals("N") && (stu.getStudentStatus().equals("Y")))) {
				String studentName = stu.getStudentName();
				String studentTell = stu.getStudentTell();
				String subjectName = stu.getStudentLessonInfoList().get(0).getLessonInfoVO().getSubjectVO().getSubjectName();
				String stepName = stu.getStudentLessonInfoList().get(0).getLessonInfoVO().getStepVO().getStepName();
				int money = stu.getStudentLessonInfoList().get(0).getLessonInfoVO().getMoney();
				
				HashMap<String, String> params = new HashMap<String, String>();
				params.put("to", studentTell);	// 수신전화번호
				params.put("from", "01099301637");	// 발신전화번호. 테스트시에는 발신,수신 둘다 본인 번호로 하면 됨
				params.put("type", "SMS");
				params.put("text", "*" + studentName + " 학생의 수강료 미납 안내*\n" + subjectName + "-" + stepName + "반 수강료는 "+ money + "원 입니다.\n[PotatoAcademy]");
				params.put("app_version", "test app 1.2"); // application name and version
				
				try {
					JSONObject obj = (JSONObject) coolsms.send(params);
					System.out.println(obj.toString());
				} catch (CoolsmsException e) {
					System.out.println(e.getMessage());
					System.out.println(e.getCode());
				}
			}
		}
	}
	    
	    
	    
		
}
