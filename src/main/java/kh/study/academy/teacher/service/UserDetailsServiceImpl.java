package kh.study.academy.teacher.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import kh.study.academy.teacher.vo.TeacherVO;


@Service("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		TeacherVO loginInfo = sqlSession.selectOne("teacherMapper.login", username);
//		
//		//아이디를 잘 못 입력한 경우
//		if(loginInfo == null) {
//			throw new UsernameNotFoundException("아이디를 찾을 수 없습니다.");
//		}
//		
//		
		UserDetails userDetails = User.withUsername(loginInfo.getTeacherId())
									.password(loginInfo.getTeacherPw())
									.roles(loginInfo.getTeacherRole())
									.build();
		
		return userDetails;
	}

}
