package kh.study.academy.statistics.service;


import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.statistics.vo.QuarterlySubTestAvg;
import kh.study.academy.statistics.vo.StudentCntPerGrade;
import kh.study.academy.statistics.vo.StudentCntPerSubject;
import kh.study.academy.test.vo.TestVO;


@Service("statisticsService")
public class StatisticsServiceImpl implements StatisticsService {

	
	@Autowired
	SqlSessionTemplate sqlSession;

	
	/* ① 학생현황 통계----------------------------------------------------------------------------------------- */
		
		// ⓐ 학년별 학생 수 
		@Override
		public List<StudentCntPerGrade> selectNumByStuYear() {
			return sqlSession.selectList("statisticsMapper.selectNumByStuYear");
		}
	
		// ⓑ 과목별 학생 수  
		@Override
		public List<Integer> selectNumByStuSubject(String subjectCode) {
			return sqlSession.selectList("statisticsMapper.selectNumByStuSubject", subjectCode);
		}
		
		// ⓒ 전체 학생 수

	/* ② 평가관리 분석 통계------------------------------------------------------------------------------------ */
		
		// ⓐ 분기별 과목 테스트 평균
		@Override
		public List<QuarterlySubTestAvg> selectQuarterlySubTestAvg(TestVO testVO) {
			return sqlSession.selectList("statisticsMapper.selectQuarterlySubTestAvg", testVO);
		}
	
	/* ③ 교사별 수업현황 통계---------------------------------------------------------------------------------- */
	
		// ⓐ 교사별 프로그램 수
		@Override
		public int selectLessonCntByTeacher(String teacherCode) {
			return sqlSession.selectOne("statisticsMapper.selectLessonCntByTeacher", teacherCode);
		}
		
		// ⓑ 교사별 담당 학생 수 
		@Override
		public int selectStudentCntByTeacher(String teacherCode) {
			return sqlSession.selectOne("statisticsMapper.selectStudentCntByTeacher", teacherCode);
		}

	
}
