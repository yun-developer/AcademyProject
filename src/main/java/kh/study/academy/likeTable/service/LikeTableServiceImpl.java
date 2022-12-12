package kh.study.academy.likeTable.service;


import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.study.academy.likeTable.vo.LikeTableVO;

@Service("likeTableService")
public class LikeTableServiceImpl implements LikeTableService{
	
	@Autowired
	SqlSessionTemplate sqlSession;

	@Override
	public void insertLike(LikeTableVO likeTableVO) {
		sqlSession.insert("likeMapper.insertLike", likeTableVO);
	}

	@Override
	public void deleteLike(LikeTableVO likeTableVO) {
		sqlSession.insert("likeMapper.deleteLike", likeTableVO);
	}

	
	@Override
	public int likeCheck(LikeTableVO likeTableVO) {
		return sqlSession.selectOne("likeMapper.likeCheck", likeTableVO);
	}
	
	
	
}
