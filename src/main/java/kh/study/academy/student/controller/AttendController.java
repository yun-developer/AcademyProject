package kh.study.academy.student.controller;

import java.text.SimpleDateFormat;

import javax.annotation.Resource;

import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import kh.study.academy.attend.service.AttendService;
import kh.study.academy.attend.vo.AttendVO;
import kh.study.academy.config.DateUtil;
import kh.study.academy.student.service.StudentService;
import kh.study.academy.student.vo.StudentLessonInfoVO;
import kh.study.academy.student.vo.StudentVO;

@Component
@EnableScheduling 
public class AttendController {
	
	@Resource(name="studentService")
	private StudentService studentService;
	
	@Resource(name = "attendService")
	private AttendService attendService;
	
	
	
	
	@Async
	//매주 월요일 마다 수강중인 학생들에게 출결코드 생성
	//@Scheduled(cron = "0 36 14 * * *") 초 분 시
	@Scheduled(cron="0 01 00 ? * MON", zone="Asia/Seoul")   //매주 월요일 00시 01분에 00초 실행
	public void addAttendCode() {
		String lessonDate = "";
	    AttendVO attendVO = new AttendVO();
		for(StudentVO stu :  studentService.selectStuLessonList()) {
			
			if(stu.getStudentLessonInfoList().get(0).getLessonInfoVO() != null) {
				
				for(StudentLessonInfoVO vo : stu.getStudentLessonInfoList()) {
					lessonDate = DateUtil.getAttendDate(vo.getLessonInfoVO().getLessonDayCode());
					attendVO.setLessonDate(lessonDate);
					//studentLessonCode를 AttendVO에 넣기
					attendVO.setStudentLessonCode(vo.getStudentLessonCode());
					//attendeCode 생성
					attendService.creatAttend(attendVO);
				}
							
			}
		}
	}
	
  
	    
	    
		
}
