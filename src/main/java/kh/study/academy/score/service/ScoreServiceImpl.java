package kh.study.academy.score.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("scoreService")
public class ScoreServiceImpl implements ScoreService {
	
	@Autowired
	SqlSessionTemplate sqlSession;

	
}
