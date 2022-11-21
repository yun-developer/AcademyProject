package kh.study.academy.statistics.service;


import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.statistics.vo.StudentCntPerGrade;
import kh.study.academy.statistics.vo.StudentCntPerSubject;


@Service("statisticsService")
public class StatisticsServiceImpl implements StatisticsService {

	
	@Autowired
	SqlSessionTemplate sqlSession;

	
	
	//학년별 학생 수 조회
	@Override
	public List<StudentCntPerGrade> selectNumByStuYear() {
		
		return sqlSession.selectList("statisticsMapper.selectNumByStuYear");
	}


	//과목별 학생 수 조회 
	@Override
	public List<Integer> selectNumByStuSubject(String subjectCode) {
		return sqlSession.selectList("statisticsMapper.selectNumByStuSubject", subjectCode);
	}
	
	
	

	
}
