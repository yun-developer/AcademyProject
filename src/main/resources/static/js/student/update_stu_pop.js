//수업 목록 셀렉트 박스
const selectLesson = document.querySelector('#selectBeforeLesson');
const updateBtn = document.querySelector('#updateBtn');
const lessonInfoCodes = document.querySelectorAll('.lessonInfoCodes');
const inputLessonCode = document.querySelector('#inputLessonCode');


///////////////////////////*아벤트*//////////////////////////

selectLesson.addEventListener('change', function (){
	
	updateBtn.setAttribute("class", "btn btn btn-primary");
	updateBtn.innerText = "저 장";
	updateBtn.disabled = false;
	
	//셀렉트 박스에서 선택한 값
	let selectlessonInfoCode = selectLesson.options[selectLesson.selectedIndex].value;
	
	inputLessonCode.value = selectlessonInfoCode;
	
	for(const code of lessonInfoCodes){
		
		if(selectlessonInfoCode == code.value){
			
			//태그 속성 추가 변경
				updateBtn.setAttribute("class", "btn btn-secondary");
			
				updateBtn.innerText = "배 정 불 가";
				updateBtn.disabled = true;

				Swal.fire('이동 불가', '학생이 이미 수강중인 학급입니다.', 'warning');
				
			
			return;
		}
		
	}

});



////////////////////////////////*함수*/////////////////////////////////
function updateStudentLesson(){
	
	
	
}

