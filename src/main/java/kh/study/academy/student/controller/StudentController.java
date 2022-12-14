package kh.study.academy.student.controller;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.study.academy.admin.service.AdminService;
import kh.study.academy.attend.service.AttendService;
import kh.study.academy.attend.vo.AttendVO;
import kh.study.academy.config.DateUtil;
import kh.study.academy.lesson.service.LessonService;
import kh.study.academy.lesson.vo.LessonInfoVO;
import kh.study.academy.student.service.StudentService;
import kh.study.academy.student.vo.PaymentVO;
import kh.study.academy.student.vo.StudentLessonInfoVO;
import kh.study.academy.student.vo.StudentVO;

@Controller
@RequestMapping("/stu")
public class StudentController {

	@Resource(name = "studentService")
	private StudentService studentService;

	@Resource(name = "adminService")
	private AdminService adminService;

	@Resource(name = "lessonService")
	private LessonService lessonService;

	@Resource(name = "attendService")
	private AttendService attendService;

	// 학생 등록 페이지 이동
	@GetMapping("/regPage")
	public String regPage(StudentVO studentVO, PaymentVO paymentVO) {

		return "content/student/reg_student";
	}

	// 학생 등록
	@PostMapping("/reg")
	public String regStu(StudentVO studentVO) {

		String nextStudentCode = studentService.getNextStudentCode();
		// 조회한 studentCode를 insert
		studentVO.setStudentCode(nextStudentCode);

		studentService.insertStudent(studentVO);
		return "redirect:/stu/regPage";
	}

	// 학생 리스트 조회 페이지
	@RequestMapping("/list")
	public String stuList(Model model, StudentVO studentVO) {

		model.addAttribute("stuList", studentService.selectStuList(studentVO.getStudentName()));
		return "content/student/student_list";
	}

	// 학생 수납 상태 변경
	@ResponseBody
	@PostMapping("/updateIsPayAjax")
	public void updateIsPayAjax(PaymentVO paymentVO) {
		studentService.stuUpdateIsPay(paymentVO);
	}

	// 학생 선택 삭제
	@PostMapping("/deleteCheckedStu")
	public String deleteCheckedStu(String studentCodes, String beforeLessonInfoCodes) {
		String[] studentCodeArr = studentCodes.split(",");
		List<String> studentCodeList = Arrays.asList(studentCodeArr);

		StudentVO studentVO = new StudentVO();
		studentVO.setStudentCodeList(studentCodeList);

		String[] beforeLessonInfoCodeArr = beforeLessonInfoCodes.split(",");
		List<String> beforeLessonInfoCodeList = Arrays.asList(beforeLessonInfoCodeArr);

		studentService.deleteCheckedStu(studentVO, beforeLessonInfoCodeList);

		return "redirect:/stu/list";
	}

	// 학생 상세 페이지
	@GetMapping("/detail")
	public String stuDetail(String studentCode, Model model) {
		model.addAttribute("stu", studentService.selectStuDetail(studentCode));

		return "content/student/detail_student";
	}

	// 상세페이지에서 학생 삭제
	@PostMapping("/deleteStu")
	public String deleteStu(String studentCode, String beforeLessonInfoCode) {
		studentService.deleteStu(studentCode, beforeLessonInfoCode);

		return "redirect:/stu/list";
	}

	// 학생 정보 수정페이지로 이동
	@GetMapping("/updateStu")
	public String updateStu(String studentCode, Model model) {
		model.addAttribute("stu", studentService.selectStuDetailForUpdate(studentCode));

		return "content/student/update_student_page";
	}

	// 학생 정보 수정
	@PostMapping("/updateStu2")
	public String updateStu2(StudentVO studentVO, Model model, String studentCode) {
		studentService.updateStu(studentVO);
		model.addAttribute("stu", studentService.selectStuDetail(studentCode));

		return "content/student/detail_student";
	}

	// 학생을 학급에 배정하는페이지로 이동
	@RequestMapping("/assignment")
	public String assignmentStu(Model model, String studentName, StudentVO studentVO) {

		List<StudentVO> testList = studentService.selectStuLessonList(studentVO);

		model.addAttribute("stuLessonList", testList);

		return "content/student/assignment_student_page";
	}

	// 학생을 학급에 배정 팝업창
	@GetMapping("/popup")
	public String popuptest(Model model, StudentVO studentVO, LessonInfoVO lessonInfoVO) {

		// 선택한 학생 정보
		model.addAttribute("student", studentService.selectStuDetail(studentVO.getStudentCode()));
		// 강의등급 조회
		model.addAttribute("step", lessonService.selectStepList());
		// 강의목록 조회
		model.addAttribute("lessonList", lessonService.selectLessonInfoList(lessonInfoVO));

		return "content/student/assignment_student_popup";
	}

	// 셀렉트박스 변경에 따른 LessonInfoList
	@ResponseBody
	@PostMapping("/selectLessonListAjax")
	public List<LessonInfoVO> selectLessonList(LessonInfoVO lessonInfoVO, String selectYear) {

		if (!selectYear.equals("")) {

			int yearValue = Integer.parseInt(selectYear);
			lessonInfoVO.setYear(yearValue);
		} else {

		}

		return lessonService.selectLessonInfoList(lessonInfoVO);
	}

	// 학생편성
	@ResponseBody
	@PostMapping("/assingnStuProcessAjax")
	public void assingnStuProcessAjax(StudentLessonInfoVO studentLessonInfoVO) {

		// 학생편성시 nowStudent +1, PayCode 코드가 같이 등록.
		studentService.assignStu(studentLessonInfoVO);

		// 출결 코드 생성
		// 편성하는 해당주의 수업 날짜 가져와서 AttendVO에 넣기
		String lessonDate;
		AttendVO attendVO = new AttendVO();
		StudentVO stu = studentService.selectStuDetailForUpdate(studentLessonInfoVO.getStudentCode());
		// 학생이 듣고 있는 수업 만큼
		for (StudentLessonInfoVO vo : stu.getStudentLessonInfoList()) {
			lessonDate = DateUtil.getAttendDate(vo.getLessonInfoVO().getLessonDayCode());
			attendVO.setLessonDate(lessonDate);
			// studentLessonCode를 AttendVO에 넣기
			attendVO.setStudentLessonCode(vo.getStudentLessonCode());
			// attendeCode 생성
			attendService.creatAttend(attendVO);
		}

	}

	// 학생 중복 편성 확인
	@ResponseBody
	@PostMapping("/isStuAssignAjax")
	public List<StudentLessonInfoVO> isStuAssignAjax(StudentLessonInfoVO studentLessonInfoVO) {

		return studentService.isStuAssign(studentLessonInfoVO.getStudentCode());
	}

	// 학생 학급 이동 팝업창
	@GetMapping("/updatePopup")
	public String updatePopup(Model model, StudentVO studentVO) {

		// 선택한 학생 정보
		model.addAttribute("student", studentService.selectStuDetail(studentVO.getStudentCode()));
		// 선택한 학생이 듣고 있는 수업 정보
		model.addAttribute("stuLessonList", studentService.selectStuLessonList(null));

		// 강의등급 조회
		model.addAttribute("step", lessonService.selectStepList());
		// 강의목록 조회
		model.addAttribute("lessonList", lessonService.selectLessonInfoList(null));

		return "content/student/update_stu_lesson_popup";
	}

	// 학생 학급 이동
	@ResponseBody
	@PostMapping("/updateStudentLessonAjax")
	public void updateStudentLessonAjax(StudentLessonInfoVO studentLessonInfoVO) {

		// 학생이동시 이전수업 nowStudent -1, 이동할 수업 nowStudent +1
		studentService.updateStuLesson(studentLessonInfoVO);

	}

}
