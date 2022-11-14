package kh.study.academy.statistics.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("statisticsService")
public class StatisticsServiceImpl implements StatisticsService {

	
	@Autowired
	SqlSessionTemplate sqlSession;
	
}
