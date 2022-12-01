package kh.study.academy.student.service;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kh.study.academy.student.vo.PaymentVO;
import kh.study.academy.student.vo.StudentLessonInfoVO;
import kh.study.academy.student.vo.StudentVO;

@Service("studentService")
public class StudentServiceImpl implements StudentService{
	 @Autowired
	  SqlSessionTemplate sqlSession;
	 
	 @Override
		public String getNextStudentCode() {
		
		 return sqlSession.selectOne("studentMapper.getNextStudentCode");
		}
	 
	 //학생 등록
	@Override
	public void insertStudent(StudentVO studentVO) {
		
		sqlSession.insert("studentMapper.insertStudent", studentVO);
	}

	
	// 학생 리스트 조회
	@Override
	public List<StudentVO> selectStuList(String studentName) {
		return sqlSession.selectList("studentMapper.selectStuList", studentName);
		
	}

	//학생 선택 삭제
	@Override
	public void deleteCheckedStu(StudentVO studentVO) {
		sqlSession.update("studentMapper.deleteCheckedStu", studentVO);
	}

	
	//학생 삭제
	@Transactional(rollbackFor = Exception.class)
	@Override
	public void deleteStu(String studentCode, String beforeLessonInfoCode) {
		sqlSession.update("studentMapper.deleteStu", studentCode);
		sqlSession.update("lessonMapper.updateBeforeNowStudent", beforeLessonInfoCode);
	}

	
	//학생 상세 조회
	@Override
	public StudentVO selectStuDetail(String studentCode) {
		return sqlSession.selectOne("studentMapper.selectStuDetail", studentCode);
	}
	
	//학생 상세조회 수정페이지
	@Override
	public StudentVO selectStuDetailForUpdate(String studentCode) {
		return sqlSession.selectOne("studentMapper.selectStuDetailForUpdate", studentCode);
	}
	
	//학생 편성
	@Transactional(rollbackFor = Exception.class)
	@Override
	public void assignStu(StudentLessonInfoVO studentLessonInfoVO) {
		
		//학생편성
		sqlSession.insert("studentMapper.assignStu", studentLessonInfoVO);
		//nowStudent +1증가
		sqlSession.update("lessonMapper.updateNowStudent", studentLessonInfoVO.getLessonInfoCode());
		//수납코드 생성
		sqlSession.insert("studentMapper.createPayment", studentLessonInfoVO);
		
	}
	
	//학생 중복 편성 확인
	@Override
	public List<StudentLessonInfoVO> isStuAssign(String studentCode) {
		
		return sqlSession.selectList("studentMapper.isStuAssign", studentCode);
	}
	
	//모든학생이 듣고 있는 수업 조회
	@Override
	public List<StudentVO> selectStuLessonList() {
		
		return sqlSession.selectList("studentMapper.selectStuLessonList");
	}
	
	//학생 정보 수정
	@Override
	public void updateStu(StudentVO studentVO) {
		sqlSession.update("studentMapper.updateStu", studentVO);
	}
	
	//학생 수납 상태 변경
	@Override
	public void stuUpdateIsPay(PaymentVO paymentVO) {
		sqlSession.update("studentMapper.stuUpdateIsPay", paymentVO);
	}
	
	//달 바뀔 때 수납상태 N으로 변경
	@Override
	public void stuUpdateIsPayNone() {
		sqlSession.update("studentMapper.stuUpdateIsPayNone");
	}
	
	
	//학생이동
	@Transactional(rollbackFor = Exception.class)
	@Override
	public void updateStuLesson(StudentLessonInfoVO studentLessonInfoVO) {
		
		//이전 nowStudent -1 감소
		sqlSession.update("lessonMapper.updateBeforeNowStudent", studentLessonInfoVO.getBeforeLessonInfoCode());
		//학생편성
		sqlSession.update("studentMapper.updateStuLesson", studentLessonInfoVO);
		//nowStudent +1증가
		sqlSession.update("lessonMapper.updateNowStudent", studentLessonInfoVO.getLessonInfoCode());
		
	}
	
	//학급별 학생 목록 조회
	@Override
	public List<StudentVO> stuListByLesson(String lessonInfoCode) {
		return sqlSession.selectList("studentMapper.stuListByLesson", lessonInfoCode);
	}
	

	

	 
	 
	 
	 
}
