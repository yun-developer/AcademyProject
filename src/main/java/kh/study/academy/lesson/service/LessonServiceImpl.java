package kh.study.academy.lesson.service;

import java.util.List;
import java.util.Map;

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

	// 학급 편성 등록 시 교실장소, 수업시간 겹치지 않게 조회
	@Override
	public List<String> selectClassUseRepeated(String lessonDayCode) {

		return sqlSession.selectList("lessonMapper.selectClassUseRepeated",lessonDayCode);
	}

	
	// 학급편성 검색 조회
	@Override
	public List<LessonInfoVO> searchLessonInfo(Map<String, Object> map) {
		return sqlSession.selectList("lessonMapper.searchLessonInfo", map);
	}
	
	
	// 학급 편성 리스트 조회
	@Override
	public List<LessonInfoVO> selectLessonInfoList(LessonInfoVO lessonInfoVO) {
		
		System.out.println("!!!!!!!!!!!"+lessonInfoVO.getLessonTime());
		return sqlSession.selectList("lessonMapper.selectLessonInfoList", lessonInfoVO);
	
	}

	// 학급편성 등록한 것 삭제(체크박스)
	@Override
	public void deleteLessonInfo(LessonInfoVO lessonInfoVO) {
		sqlSession.delete("lessonMapper.deleteLessonInfo", lessonInfoVO);
	}

	
	//교실 사용 중복 여부 확인 조회 
	@Override
	public LessonInfoVO doubleCheckLesson(LessonInfoVO lessonInfoVO) {
		
		return sqlSession.selectOne("lessonMapper.doubleCheckLesson", lessonInfoVO);
	}

	// 해당과목과 동일한 교사 조회 
	@Override
	public List<String> subjectChangeTeacher(String subjectCode) {
		return sqlSession.selectList("lessonMapper.subjectChangeTeacher",subjectCode);
	}

	
	
	
	/////////////<학생 편성>////////////////////////////////////////////////////
	// 학생편성시 해당 LessonInfo에 nowStudent +1증가
	@Override
	public void updateNowStudent(String lessonInfoCode) {
		sqlSession.update("lessonMapper.updateNowStudent", lessonInfoCode);
		
	}
	// 학생이동시 nowStudent -1감소
	@Override
	public void updateBeforeNowStudent(String beforeLessonInfoCode) {
		sqlSession.update("lessonMapper.updateBeforeNowStudent", beforeLessonInfoCode);
		
	}

	// 수납여부와 편성학급 같이 조회
	@Override
	public List<LessonInfoVO> selectLessonAndPay(String studentCode) {
		
		return sqlSession.selectList("lessonMapper.selectLessonAndPay", studentCode);
	}





	
}
