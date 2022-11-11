package kh.study.academy.lesson.service;

import java.util.List;

import kh.study.academy.lesson.vo.StepVO;

public interface LessonService {
	//강의 등급 목록 조회
		List<StepVO> selectStepList();
}
