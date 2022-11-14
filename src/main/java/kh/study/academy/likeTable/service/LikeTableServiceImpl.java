package kh.study.academy.likeTable.service;


import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("likeService")
public class LikeTableServiceImpl {
	@Autowired
	SqlSessionTemplate sqlSession;
	
	
	
}
