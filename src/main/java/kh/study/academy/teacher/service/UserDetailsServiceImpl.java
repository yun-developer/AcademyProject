package kh.study.academy.teacher.service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import groovyjarjarantlr4.v4.codegen.model.decl.ContextRuleListIndexedGetterDecl;
import kh.study.academy.teacher.vo.TeacherVO;


@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Resource(name = "teacherService")
	private TeacherService teacherService; 
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		TeacherVO loginInfo = sqlSession.selectOne("teacherMapper.login", username);
		
		UserDetails userDetails = User.withUsername(loginInfo.getTeacherId())
									.password(loginInfo.getTeacherPw())
									.roles(loginInfo.getTeacherRole())
									.build();
		
		if(loginInfo != null){
			HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
			HttpSession sesion = request.getSession();
			sesion.setAttribute("profileImg", loginInfo.getProfileImgVO().getStoredFileName());
		}
		
		return userDetails;
	}

}
