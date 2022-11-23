package kh.study.academy.config;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class DateUtil {
	
	
	//수업시간을 fullcalendar 데이터타입으로 변환
	public static String getStartTimeforfullcalendar(String time) {
		
		Calendar cal = Calendar.getInstance();
		
		String startTime = "T" + time + ":00:00";
		
		return startTime;
	}
	
	//요일에 해당하는 날짜 가져오기
	public static String getLessonDatebyDay(String dayCode, String lessonTime) {
		
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		
		//1-일, 2-월, 3-화, 4-수, 5-목, 6-금, 7-토
		int dayNum = 0;
		for(int i =2; i<=7; i++) {
			if(dayCode.equals("Mon")) {
				dayNum = 2;
			}
			else if (dayCode.equals("Tue")) {
				dayNum = 3;
			}
			else if (dayCode.equals("Wed")) {
				dayNum = 4;
			}
			else if (dayCode.equals("Thu")) {
				dayNum = 5;
			}
			else if (dayCode.equals("Fri")) {
				dayNum = 6;
			}
		}
		
		
		/** 오늘날짜에 해당하는 월, 주,월요일 날짜를 가져오기 **/
		Calendar startDate = Calendar.getInstance();
		startDate.isSet(Calendar.MONTH); /** 오늘 날짜의 월 셋팅**/
		startDate.isSet(Calendar.WEEK_OF_MONTH); /** 오늘 날짜의 주 셋팅 **/
		startDate.set(Calendar.DAY_OF_WEEK, 2); /** 월요일 셋팅 **/
		//System.out.println(startDate.getTime());
		
		/** 오늘날짜에 해당하는 월, 주, 금요일 날짜를 가져오기 **/
		Calendar endDate = Calendar.getInstance();
		endDate.isSet(Calendar.MONTH); /** 오늘 날짜의 월 셋팅**/
		endDate.isSet(Calendar.WEEK_OF_MONTH); /** 오늘 날짜의 주 셋팅 **/
		endDate.set(Calendar.DAY_OF_WEEK, 6); /** 금요일 셋팅 **/
		//System.out.println(endDate.getTime());
		
//		title: 'Meeting',
//        start: '2022-07-12T10:30:00',
//        end: '2022-07-12T12:30:00'
		
		String sdate ="";
		sdate = df.format(startDate.getTime());
		String edate ="";
		edate = df.format(endDate.getTime());
		
		System.out.println(sdate.compareTo(edate));
		System.out.println("해당 주의 월요일:"+ sdate);
		startDate.add(startDate.DAY_OF_WEEK, 1);
		
		sdate = df.format(startDate.getTime());
		System.out.println("1일 더한 날짜"+startDate.getTime());
		System.out.println("해당주의 월요일 + 1:"+sdate);
		
		
		
		
		//fullcal에 맞춘 양식
		int lessonT = Integer.parseInt(lessonTime);
		String startTime = sdate +"T" + lessonT + ":00:00";
		String endTime = edate +"T" + (lessonT+1) + ":00:00";
		
		return sdate;
		
	}
	
	
}
