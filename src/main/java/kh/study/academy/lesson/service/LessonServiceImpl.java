package kh.study.academy.lesson.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.lesson.vo.StepVO;



@Service("lessonService")
public class LessonServiceImpl implements LessonService{
	@Autowired
	private SqlSessionTemplate sqlSession;

	@Override
	public List<StepVO> selectStepList() {
		return sqlSession.selectList("lessonMapper.selectStepList");
	}
	
}
