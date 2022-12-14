package kh.study.academy.config;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

public class DateUtil {
	
	
	//수업시간을 fullcalendar 데이터타입으로 변환
	public static String getStartTimeforfullcalendar(String time) {
		
		Calendar cal = Calendar.getInstance();
		
		String startTime = "T" + time + ":00:00";
		
		return startTime;
	}
	
	//요일에 해당하는 날짜 가져와서 FullCalendar에 맞춰 변형
	public static String[] getLessonDatebyDay(String dayCode, String lessonTime) {
		
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
		startDate.set(Calendar.DAY_OF_WEEK, 2); /** 월요일 셋팅 **/
		
		/** 오늘날짜에 해당하는 월, 주, 금요일 날짜를 가져오기 **/
		Calendar endDate = Calendar.getInstance();
		endDate.set(Calendar.DAY_OF_WEEK, 6); /** 금요일 셋팅 **/
		
//		필요한 데이터 형식
//      start: '2022-07-12T10:30:00',
//      end: '2022-07-12T12:30:00'

		
		String sdate ="";
		sdate = df.format(startDate.getTime());
		String edate ="";
		edate = df.format(endDate.getTime());
		
		//하루 더하기
		//startDate.add(Calendar.DAY_OF_WEEK, 1);
		while(startDate.compareTo(endDate) != 0) {
			startDate.add(Calendar.DAY_OF_WEEK, 1);
			
		}
		
		//해당 주의 수업 날짜
		Calendar lessonDate = Calendar.getInstance();
		lessonDate.set(Calendar.DAY_OF_WEEK, dayNum);
		String lessonDateStr ="";
		lessonDateStr = df.format(lessonDate.getTime());
		
		//fullcal에 맞춘 양식
		int lessonT = Integer.parseInt(lessonTime);
		String startTime = lessonDateStr +"T" + lessonT + ":00:00";
		String endTime = lessonDateStr +"T" + (lessonT+1) + ":00:00";
		
		String[] lessonTimes = new String[2];
		lessonTimes[0] = startTime;
		lessonTimes[1] = endTime;
		
		return lessonTimes;
		
	}
	
	
	//수업요일에 해당하는 날짜를 해당 월에 있는 만큼 가져와서 출결날짜로 가져가기
	public static String getAttendDate(String dayCode) {
		
		SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd");
		
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
		
		Calendar lessonDate = Calendar.getInstance();
		lessonDate.set(Calendar.DAY_OF_WEEK, dayNum);
		String lessonDateStr ="";
		lessonDateStr = df.format(lessonDate.getTime());
		
		return lessonDateStr;
	}
	
	
	////////////////////평가/////////////////////////////////////////
	
	
	public static String getTestYearDate(String testDate) {
		
		//내가 지정한 형식으로 날짜 데이터 변형 
		SimpleDateFormat df = new SimpleDateFormat("yyyy");
		
		//캘린더 객체를 만든다. 컴퓨터 날짜 불러올 수 있음
		Calendar cal = Calendar.getInstance();
		
		//년도 설정
		cal.isSet(Calendar.YEAR);
		
		String thisYear ="";
		thisYear = df.format(cal.getTime());
		
		String result = thisYear+testDate;
		
		return result ;
	}
	
	
	
	
	
	
	
}
