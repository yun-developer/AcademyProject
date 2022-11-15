package kh.study.academy.lesson.service;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.lesson.vo.LessonDayVO;
import kh.study.academy.lesson.vo.LessonInfoVO;
import kh.study.academy.lesson.vo.StepVO;



@Service("lessonService")
public class LessonServiceImpl implements LessonService{
	@Autowired
	private SqlSessionTemplate sqlSession;

	
	
	
	

/////<학급 편성 등록 관련>//////////////////////////////////////////////////////////// 	
	
	
	
	
	//강의 등급 목록 조회
	@Override
	public List<StepVO> selectStepList() {
		return sqlSession.selectList("lessonMapper.selectStepList");
	}
	
	
	// 강의 요일 목록 조회 
	@Override
	public List<LessonDayVO> selectLessonDayList() {
		return sqlSession.selectList("lessonMapper.selectLessonDayList");
	}
	
	
	
	// 학급 편성 등록
	@Override
	public void regLessonInfo(LessonInfoVO lessonInfoVO) {
		sqlSession.insert("lessonMapper.regLessonInfo", lessonInfoVO);
	}

	// 학급 편성 리스트 조회
	@Override
	public List<LessonInfoVO> selectLessonInfoList(LessonInfoVO lessonInfoVO) {
		return sqlSession.selectList("lessonMapper.selectLessonInfoList", lessonInfoVO);
	}

	// 학급편성 등록한 것 삭제(체크박스)
	@Override
	public void deleteLessonInfo(LessonInfoVO lessonInfoVO) {
		sqlSession.delete("lessonMapper.deleteLessonInfo", lessonInfoVO);
	}





	
}
