package kh.study.academy.likeTable.service;

import org.springframework.stereotype.Service;

import kh.study.academy.likeTable.vo.LikeTableVO;

@Service
public interface LikeTableService {
	
	void insertLike(LikeTableVO likeTableVO);
	void deleteLike(LikeTableVO likeTableVO);
	
	void updateLikeCheck(LikeTableVO likeTableVO);
	void updateLikeCheckCancle(LikeTableVO likeTableVO);
	
	int likeCheck(LikeTableVO likeTableVO);
}
