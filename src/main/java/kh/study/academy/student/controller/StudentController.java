package kh.study.academy.student.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.study.academy.admin.service.AdminService;
import kh.study.academy.lesson.service.LessonService;
import kh.study.academy.lesson.vo.LessonInfoVO;
import kh.study.academy.student.service.StudentService;
import kh.study.academy.student.vo.PaymentVO;
import kh.study.academy.student.vo.StudentVO;

@Controller
@RequestMapping("/stu")
public class StudentController {

	@Resource(name="studentService")
	private StudentService studentService;
	
	@Resource(name="adminService")
	private AdminService adminService;
	
	@Resource(name = "lessonService")
	private LessonService lessonService;
	
	
	//학생 등록 페이지 이동
	@GetMapping("/regPage")
	public String regPage(StudentVO studentVO, PaymentVO paymentVO) {
		
		return "content/student/reg_student";
	}
	
	
	//학생 등록
	@PostMapping("/reg")
	public String regStu(StudentVO studentVO, PaymentVO paymentVO) {
		String nextStudentCode = studentService.getNextStudentCode();
		//조회한 studentCode를 insert
		studentVO.setStudentCode(nextStudentCode);
		paymentVO.setStudentCode(nextStudentCode);
		
		studentService.insertStudent(studentVO);
		return "redirect:/stu/regPage";
	}
	
	
	//학생 리스트 조회 페이지
	@RequestMapping("/list")
	public String stuList(Model model, String studentName, StudentVO studentVO) {
		model.addAttribute("stuList", studentService.selectStuList(studentName));
		
		return "content/student/student_list";
	}
	
	
	//학생 선택 삭제
	@PostMapping("/deleteCheckedStu")
	public String deleteCheckedStu(String studentCodes) {  
		String[] studentCodeArr = studentCodes.split(",");
		List<String> studentCodeList = Arrays.asList(studentCodeArr);
		
		StudentVO studentVO = new StudentVO();
		studentVO.setStudentCodeList(studentCodeList);
		
		studentService.deleteCheckedStu(studentVO);
		
		return "redirect:/stu/list";
	}
	
	
	//학생 상세 페이지
	@GetMapping("/detail")
	public String stuDetail(String studentCode, Model model) {
		model.addAttribute("stu", studentService.selectStuDetail(studentCode));
		
		return "content/student/detail_student";
	}
	
	
	//상세페이지에서 학생 삭제
	@PostMapping("/deleteStu")
	public String deleteStu(String studentCode) {
		studentService.deleteStu(studentCode);
		
		return "redirect:/stu/list";
	}
	
	
	//학생 정보 수정페이지로 이동
	@GetMapping("/updateStu")
	public String updateStu(String studentCode, Model model) {
		model.addAttribute("stu", studentService.selectStuDetail(studentCode));
		model.addAttribute("subjectList", adminService.selectSubject());
		
		return "content/student/update_student_page";
	}
	
	//학생을 학급에 배정하는페이지로 이동
	@GetMapping("/assignment")
	public String assignmentStu(Model model, String studentName, StudentVO studentVO) {
		
		model.addAttribute("stuList", studentService.selectStuList(studentName));
		
		
		return "content/student/assignment_student_page";
	}
	
	//학생을 학급에 배정 팝업창
	@GetMapping("/popup")
	public String popuptest(Model model, StudentVO studentVO, LessonInfoVO lessonInfoVO) {
		
		//선택한 학생 정보
		model.addAttribute("student", studentService.selectStuDetail(studentVO.getStudentCode()));
		//강의등급 조회
		model.addAttribute("step", lessonService.selectStepList());
		//강의목록 조회
		model.addAttribute("lessonList", lessonService.selectLessonInfoList(lessonInfoVO));
		
		
		return "content/student/assignment_student_popup";
	}
	
	//셀렉트박스 변경에 따른 LessonInfoList
	@ResponseBody
	@PostMapping("/selectLessonListAjax")
	public List<LessonInfoVO> selectLessonList(LessonInfoVO lessonInfoVO, String selectYear){
		
		if (!selectYear.equals("")) {
			
			int yearValue = Integer.parseInt(selectYear);
			lessonInfoVO.setYear(yearValue);
		}
		else {
			
		}
		
		return  lessonService.selectLessonInfoList(lessonInfoVO);
	}
	
	//학생편성
	@PostMapping("/assingnStuProcess")
	public void assingnStuProcess(@RequestParam Map<String, String> paramMap) {
		
		//학생편성시 nowStudent +1, attendeCode, PayCode 코드가 같이 등록.
		//학생편성
		studentService.assignStu(paramMap);
		//nowStudent +1
		lessonService.updateNowStudent(paramMap.get("lessonInfoCode"));
		
		/* return "redirect:/stu/assignment"; */
	}
	
	
	
	
	
	
}
