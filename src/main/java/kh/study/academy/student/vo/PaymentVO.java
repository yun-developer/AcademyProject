package kh.study.academy.student.vo;

import lombok.Data;

@Data
public class PaymentVO {
	private String paymentCode;
	private String isPay;
	private String studentLessonCode;
	
	//지워진 컬럼
	private String lessonInfoCode;
	private String studentCode;
}
