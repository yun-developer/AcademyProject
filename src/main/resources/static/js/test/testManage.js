///////////////////변수///////////////////////

//제목 줄 체크박스
const checkAll = document.querySelector('#checkAll');
//제목 줄을 제외한 모든 체크박스 
const chks = document.querySelectorAll('.chk');

//검색용 셀렉트박스

//등록 모달 셀렉트박스
const selectSub = document.querySelector('#selectSub');
const inputScore = document.querySelector('#inputScore');
const selectDate = document.querySelector('#selectDate');
const regBtn = document.querySelector('#regBtn');

//수정 모달 셀렉스박스
const selectDateforChange = document.querySelector('#selectDateforChange');
const forChangeDiv = document.querySelector('#forChangeDiv');
const changeScoreInput = document.querySelector('#changeScoreInput');
const testCodeForchange = document.querySelector('#testCodeForchange');

//학생이 수강중인 과목
const stuLessonSub = document.querySelector('#stuLessonSub');

//수정페이지의 버튼
const deleteBtn = document.querySelector('#deleteBtn');
const updateBtn = document.querySelector('#updateBtn');



/////////////////////////////////////////////

//평가등록 모달을 눌렀을 때 실행되는 함수

function openRegTestModal(code, name, lessonList){
	
	//학생코드 모달 hidden input value에 넣기
	document.querySelector('#stuCodeForReg').value = code;
	const stuentCode = document.querySelector('#stuCodeForReg').value;
	
	//학생 이름 모달 input value에 넣기
	document.querySelector('#stuNameForReg').value = name;
	const stuentName = document.querySelector('#stuNameForReg').value;
	
	//수강중인 학급명
	let lessonNames = '';
	
	//수강중인 과목들
	let subCodes=''; 
	
	for(const lesson of lessonList){
		let lessonInfo = '[' + lesson.lessonInfoVO.subjectVO.subjectName +'-'+ lesson.lessonInfoVO.stepVO.stepName +'-'+ lesson.lessonInfoVO.year + ']';
		lessonNames += lessonInfo;
		subCodes += lesson.lessonInfoVO.subjectVO.subjectCode;
	}
	
	
	//수강학급 모달 input value에 넣기
	document.querySelector('#stuLessons').value = lessonNames;
	stuLessonSub.value = subCodes;
	
	selectSub.addEventListener('change', function aaa(){
		
		//버튼 초기화
		regBtn.setAttribute("class", "btn btn btn-primary");
		regBtn.innerText = "저장";
		regBtn.disabled = false;
		
		//수강 과목
		let selectSubtext = selectSub.options[selectSub.selectedIndex].innerText;
		
		if (!lessonNames.includes(selectSubtext)){
		
		//Swal.fire('이동 불가', '학생이 수강중인 과목이 아닙니다.', 'warning');
		Swal.fire({
					title: '이동 불가!',
					text: '학생이 수강중인 과목이 아닙니다.',
					icon: 'warning',
					showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
					confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
					cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
					confirmButtonText: '확인', // confirm 버튼 텍스트 지정
					cancelButtonText: '취소', // cancel 버튼 텍스트 지정
					reverseButtons: false, // 버튼 순서 거꾸로
				})
				
		//버튼 비활성화
		//태그 속성 추가 변경
		regBtn.setAttribute("class", "btn btn-secondary");
		regBtn.innerText = "등록불가";
		regBtn.disabled = true;
		
		return;
		}
		
	})
}






//평가수정 모달을 눌렀을 때 실행되는 함수


function openChangeTestModal(code, name, lessonList){

	//버튼 초기화
	updateBtn.setAttribute("class", "btn btn btn-primary");
	updateBtn.innerText = "저장";
	updateBtn.disabled = false;
	deleteBtn.setAttribute("class", "btn btn-danger");
	deleteBtn.innerText = "삭제";
	deleteBtn.disabled = false;
	
	//셀렉트 박스 초기화
	forChangeDiv.innerHTML = '';
	let str ='';
	str = `<select class="form-select" aria-label="Default select example" id="selectDateforChange" name="testDate"  style="color: red;">
					   		<option value="">평가 과목을 선택하세요.</option>
					   </select>`;
   forChangeDiv.insertAdjacentHTML('beforeend', str);

	//학생코드 모달 hidden input value에 넣기
	document.querySelector('#stuCodeForChange').value = code;
	const stuentCode = document.querySelector('#stuCodeForChange').value;
	

	//학생 이름 모달 input value에 넣기
	document.querySelector('#stuNameForChange').value = name;
	const stuentName = document.querySelector('#stuNameForChange').value;
	
	
	let lessonNames = '';
	for(const lesson of lessonList){
		let lessonInfo = '[' + lesson.lessonInfoVO.subjectVO.subjectName +'-'+ lesson.lessonInfoVO.stepVO.stepName +'-'+ lesson.lessonInfoVO.year + ']';
		lessonNames += lessonInfo;
	}
	
	//수강학급 모달 input value에 넣기
	document.querySelector('#stuLessonsForChange').value = lessonNames;

}



//평가등록 모달 내 저장 버튼을 눌렀을 때 실행되는 함수
function regTest()  {
	
	//테스트 날짜
	let selectDateValue = selectDate.options[selectDate.selectedIndex].value;
	//과목코드
	let selectSubValue = selectSub.options[selectSub.selectedIndex].value;
	//학생코드
	let stuentCodeValue = document.querySelector('#stuCodeForReg').value;
	
	
	//DBinsert 후 지우기~~~~~~~~~~~~~~~~~~~~~~
	/*const selectDateValueForDB = document.querySelector('#selectDateValueForDB');	
	const randomScore = document.querySelector('#randomScore');	
	
	for (var option of selectDate.options) {
     	if(option.value != ''){
			
			const rand_0_100 = Math.floor(Math.random() * 51) + 50;
	
			$.ajax({
		url: '/test/DBregScoreAjax', //요청경로
		type: 'post',
		// insert후 복귀 data: {'studentCode':stuentCodeValue,'subjectCode':selectSubValue,'testDate':selectDateValue}, //필요한 데이터
		data: {'studentCode':stuentCodeValue,'subjectCode':selectSubValue,'testDate':option.value, 'testScore':rand_0_100}, //필요한 데이터
		async: false,
		success: function(result) {
			
			if(result.check ==1){
				
				 Swal.fire({
		 		  title: '평가 등록 실패',
				   text: '해당 학생의 평가 점수가 이미 존재합니다',
				   icon: 'error',
				   
				   showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
				   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
				   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
				   confirmButtonText: '확인', // confirm 버튼 텍스트 지정
				   
				   
				}).then(result => {
				   // 만약 Promise리턴을 받으면,
				   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
				   
				   //d
				   
				   }
				});
		
				
				
			}
			else {
				
				 Swal.fire({
				   title: '평가 등록 완료',
				   text: '해당 학생의 평가 등록이 완료되었습니다',
				   icon: 'success',
				   
				   showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
				   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
				   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
				   confirmButtonText: '확인', // confirm 버튼 텍스트 지정
				   
				   
				}).then(result => {
				   // 만약 Promise리턴을 받으면,
				   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
				   
				    // document.querySelector('#regTestForm').submit();
				     
				   }
				});
				
			}
			
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
	
	
	   	}
	
	
	
	}
	*/
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	
	
	
/*	//셀렉트박스의 과목명
	selectSubValue
	
	let Subjects = '';
	for(const nowSubject of nowSubjects){
		Subjects += nowSubject.innerText;	
	}*/
	//같은 과목이 없다면(false라면)
	if (!stuLessonSub.value.includes(selectSubValue)){
		//changeUnButton();
		Swal.fire('평가 등록 불가', '학생이 수강중인 과목이 아닙니다.', 'warning');
		return;
	}
	
	
	//중복데이터가 있으면 얼럿 
	//ajax start
	$.ajax({
		url: '/test/regScoreAjax', //요청경로
		type: 'post',
		// insert후 복귀 
		data: {'studentCode':stuentCodeValue,'subjectCode':selectSubValue,'testDate':selectDateValue}, //필요한 데이터
		//data: {'studentCode':stuentCodeValue,'subjectCode':selectSubValue,'testDate':option.value}, //필요한 데이터
		success: function(result) {
			
			if(result.check ==1){
				
				 Swal.fire({
		 		  title: '평가 등록 실패',
				   text: '해당 학생의 평가 점수가 이미 존재합니다',
				   icon: 'error',
				   
				   showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
				   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
				   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
				   confirmButtonText: '확인', // confirm 버튼 텍스트 지정
				   
				   
				}).then(result => {
				   // 만약 Promise리턴을 받으면,
				   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
				   
				   //d
				   
				   }
				});
		
				
				
			}
			else {
				
				 Swal.fire({
				   title: '평가 등록 완료',
				   text: '해당 학생의 평가 등록이 완료되었습니다',
				   icon: 'success',
				   
				   showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
				   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
				   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
				   confirmButtonText: '확인', // confirm 버튼 텍스트 지정
				   
				   
				}).then(result => {
				   // 만약 Promise리턴을 받으면,
				   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
				   
				     document.querySelector('#regTestForm').submit();
				     
				   }
				});
				
			}
			
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
	

	
}




//평가수정 모달 내 저장 버튼을 눌렀을 때 실행되는 함수
function updateTest()  {
 	
 	const updateForm = document.querySelector('#UpdateOrDeleteForm');
 	
 	
 	updateForm.action = '/test/updateScore';
 	
 	
 	Swal.fire({
	   title: '평가 수정 완료',
	   text: '해당 학생의 평가 점수가 수정되었습니다',
	   icon: 'success',
	   
	   showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
	   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
	   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
	   confirmButtonText: '확인', // confirm 버튼 텍스트 지정
	   
	   
	}).then(result => {
	   // 만약 Promise리턴을 받으면,
	   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
	   
	 	updateForm.submit();
	    
	   }
	});
 	
 	
 	
 	
}

//평가수정 모달 내 삭제 버튼을 눌렀을 때 실행되는 함수 
function deleteTest()  {
 	
 	
 	const deleteForm = document.querySelector('#UpdateOrDeleteForm');
 	

	deleteForm.action = '/test/deleteScore';

	Swal.fire({
		title: '평가 점수를 삭제할까요?',
		text: '해당 학생의 평가 점수가 삭제됩니다.',
		icon: 'warning',

		showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
		confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
		cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
		confirmButtonText: '확인', // confirm 버튼 텍스트 지정
		cancelButtonText: '취소', // cancel 버튼 텍스트 지정

		reverseButtons: true, // 버튼 순서 거꾸로

	}).then(result => {
		// 만약 Promise리턴을 받으면,
		if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
			
			//삭제 완료 alert 시작
			Swal.fire({
				title: '평가 삭제',
				text: '해당 학생의 평가 점수가 삭제되었습니다.',
				icon: 'success',

				showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
				confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
				cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
				confirmButtonText: '확인', // confirm 버튼 텍스트 지정
				cancelButtonText: '취소', // cancel 버튼 텍스트 지정

				reverseButtons: false, // 버튼 순서 거꾸로

			}).then(result => {
				// 만약 Promise리턴을 받으면,
				if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면

					deleteForm.submit();

				}
			});
			//삭제 완료 alert 끝
		}
	});

}

//평가 등록 모달 열린 후 취소버튼을 눌렀을 때 폼의 전체 값 초기화 처리
$('#testInfoReg').on('hidden.bs.modal', function (e) {
	
	document.forms['regForm'].reset(); 
});

//평가 수정 삭제 모달 열린 후 취소버튼을 눌렀을 때 폼의 전체 값 초기화 처리
$('#testInfoChange').on('hidden.bs.modal', function (e) {
	
	document.forms['UpdateOrDeleteForm'].reset(); 
});

////////////////////////////////////////////////////////////////////
//-------------------------이벤트 정의 영역----------------------//
///////////////////////////////////////////////////////////////////


//유효성(빈칸) 검사 bootstrap  validation
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    regBtn.addEventListener('click', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        
      	form.classList.add('was-validated')
      }
		else {
      regTest();
			
		}     

      
    }, false)
  })
})()




//평가일 셀렉트 박스를 변경했을 때 event
$(document).on("change", "#selectSubforChange", function() {
	//버튼 초기화
	updateBtn.setAttribute("class", "btn btn btn-primary");
	updateBtn.innerText = "저장";
	updateBtn.disabled = false;
	deleteBtn.setAttribute("class", "btn btn-danger");
	deleteBtn.innerText = "삭제";
	deleteBtn.disabled = false;
	
	
	
	//과목코드
	let selectSubforChangeValue = selectSubforChange.options[selectSubforChange.selectedIndex].value;
	//학생코드
	let stuentCodeValue = document.querySelector('#stuCodeForChange').value;
	
	
	//DB에서 이전 평가 정보 불러오기
	//ajax start
	$.ajax({
		url: '/test/selectTestScoreAjax', //요청경로
		type: 'post',
		data: {'studentCode':stuentCodeValue,'subjectCode':selectSubforChangeValue}, //필요한 데이터
		success: function(result) {
		
		
			//내용지우기
			forChangeDiv.innerHTML = ''; 
		
			//셀렉트박스 새로 작성
			let str ='';
			str += `<select class="form-select" aria-label="Default select example" id="selectDateforChange" name="testDate">
					   <option value="">선택</option>`;
			for(const test of result){
					str += `<option value="${test.testCode}" id="${test.testCode}" score="${test.score}">${test.testDate}</option>`;
			}
			str += `</select>`;
			
			//평가 정보가 없다면
			if(result == ''){
				
				str = `<select class="form-select" aria-label="Default select example" id="selectDateforChange" name="testDate"  style="color: red;">
					   		<option value="">평가 정보가 없습니다.</option>
					   </select>`;
				changeScoreInput.value = '';
				
				//버튼 비활성화
				//태그 속성 추가 변경
				updateBtn.setAttribute("class", "btn btn-secondary");
				updateBtn.innerText = "수정불가";
				updateBtn.disabled = true;
				deleteBtn.setAttribute("class", "btn btn-secondary");
				deleteBtn.innerText = "삭제불가";
				deleteBtn.disabled = true;
			}
			
			forChangeDiv.insertAdjacentHTML('beforeend', str);

			
			//평가일 셀렉트박스
			let selectDateforChange = document.querySelector('#selectDateforChange'); 
			//평가일 셀렉트박스를 선택하면
			selectDateforChange.addEventListener('change', function abbb(){
				
				//버튼 활성화
				updateBtn.setAttribute("class", "btn btn btn-primary");
				updateBtn.innerText = "저장";
				updateBtn.disabled = false;
				deleteBtn.setAttribute("class", "btn btn-danger");
				deleteBtn.innerText = "삭제";
				deleteBtn.disabled = false;
	
				
				//셀렉트 박스에서 선택한 값(testCode)
				let selectDateforChangeValue = selectDateforChange.options[selectDateforChange.selectedIndex].value;
				//셀렉트 박스에서 선택한 값(score)
				let selectBeforeScore = selectDateforChange.options[selectDateforChange.selectedIndex];
				let beforeScore = selectBeforeScore.getAttribute("score");
				
				testCodeForchange.value = selectDateforChangeValue;
				changeScoreInput.value = beforeScore;
			
			})
			
				
		
			
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
	
	
	
	
	
});





//전체선택, 전체해제 이벤트
checkAll.addEventListener('click',function(){
	//제목줄의 체크박스 체크여부
	const isChecked = checkAll.checked; //true,false
	
	//리스트 목록의 모든 체크박스
	const checkboxes = document.querySelectorAll('.chk');
	
	//제목줄 체크박스가 체크되었다면,
	if(isChecked){
		for (const checkBox of checkboxes){
			checkBox.checked = true;
		}
	}
	else{
		
		for (const checkBox of checkboxes){
			checkBox.checked = false;
		}
	}
	
	
});


//리스트 체크박스 선택 시 제목줄 체크박스 이벤트
for(const chk of chks){
	chk.addEventListener('click', chk=>{ 
		//아래에 있는 전체 체크박스의 수 
		const cnt = chks.length;
		//아래에 있는 전체 체크박스 중 체크된 수
		const checkedCnt = document.querySelectorAll('.chk:checked').length;
		
		//수가 같으면 제목 체크박스도 체크
		if(cnt ==checkedCnt ){
			document.querySelector('#checkAll').checked = true;
		}
		//수가 다르면 제목 체크박스도 해체
		else{
			document.querySelector('#checkAll').checked = false;
		}
		
	});
}



//페이징 라이브러리
var box = paginator({
    table: document.getElementById("table_box_bootstrap").getElementsByTagName("table")[0],
    box_mode: "list",
});
box.className = "box";
document.getElementById("table_box_bootstrap").appendChild(box);


