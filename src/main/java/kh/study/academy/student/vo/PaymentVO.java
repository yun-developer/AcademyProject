package kh.study.academy.student.vo;

import lombok.Data;

@Data
public class PaymentVO {
	private String paymentCode;
	private String lessonsCode;
	private String isPay;
	private String studentCode;
}
