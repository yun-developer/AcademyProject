package kh.study.academy.config;

import java.util.Calendar;

public class DateUtil {
	
	
	//수업시간을 fullcalendar 데이터타입으로 변환
	public static String getStartTimeforfullcalendar(String time) {
		
		Calendar cal = Calendar.getInstance();
		
		String startTime = "T" + time + ":00:00";
		
		return startTime;
	}
	
	//요일에 해당하는 날짜 가져오기
	public static String getLessonDatebyDay(String day) {
		
		Calendar cal = Calendar.getInstance();
		
		
		
		String date ="";
		return date;
		
	}
	
	
}
