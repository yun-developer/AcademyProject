package kh.study.academy.statistics.service;


import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service("statisticsService")
public class StatisticsServiceImpl implements StatisticsService {

	
	@Autowired
	SqlSessionTemplate sqlSession;

	
	
	//학년별 학생 수 조회
	@Override
	public List<Integer> selectNumByStuYear() {
		
		return sqlSession.selectList("statisticsMapper.selectNumByStuYear");
	}
	
	
	

	
}
