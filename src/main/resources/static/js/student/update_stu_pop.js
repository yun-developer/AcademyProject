////////////////////////*함 수 *////////////////////////////////
//현재 듣고 있던 과목들
const nowSubjects = document.querySelectorAll('.nowSubject');
const beforeLessonInfoCode = document.querySelector('#beforeLessonInfoCode');

//수업 목록 셀렉트 박스
const selectLesson = document.querySelector('#selectBeforeLesson');
//저장 버튼
const updateBtn = document.querySelector('#updateBtn');


const lessonInfoCodes = document.querySelectorAll('.lessonInfoCodes');
const inputLessonCode = document.querySelector('#inputLessonCode');
const studentLessonCode = document.querySelector('#studentLessonCode');

//인원div
const capacityDiv = document.querySelector('#capacity');
//수강료div
const moneyDiv = document.querySelector('#money');


///////////////////////////*아벤트*//////////////////////////

selectLesson.addEventListener('change', function (){
	
	//내용지우기
	capacityDiv.innerHTML = ''; 
	moneyDiv.innerHTML = '';
	
	updateBtn.setAttribute("class", "btn btn btn-primary");
	updateBtn.innerText = "저 장";
	updateBtn.disabled = false;
	
	//셀렉트 박스에서 선택한 값
	//lessonInfoCode
	let selectlessonInfoCode = selectLesson.options[selectLesson.selectedIndex].value;
	//ajax start
	$.ajax({
		url: '/stu/selectLessonListAjax', //요청경로
		type: 'post',
		data: {"lessonInfoCode": selectlessonInfoCode, "selectYear":null}, //필요한 데이터
		success: function(resultLesson) {
			
			//정원
			let capacityStr ='';
			capacityStr+=`<span>${resultLesson[0].nowStudentCnt + "/" + resultLesson[0].maxStudent}</span>`;
			capacityDiv.insertAdjacentHTML('beforeend', capacityStr);
			
			let money='';
			money = parseInt(resultLesson[0].money);
			money = '￦' + money.toLocaleString();
			
			let moneyStr ='';
			moneyStr+=`<span>${money}</span>`;
			moneyDiv.insertAdjacentHTML('beforeend', moneyStr);
			
			//inputLessonCode.value = getCode;
			
			if(resultLesson[0].nowStudentCnt == resultLesson[0].maxStudent){
				
				
				//태그 속성 추가 변경
				updateBtn.setAttribute("class", "btn btn-secondary");
			
				updateBtn.innerText = "배 정 불 가";
				updateBtn.disabled = true;

				//Swal.fire('정원 초과', '학급의 정원이 찬 학급입니다.', 'warning');
				Swal.fire({
					title: '정원 초과!',
					text: '학급의 정원이 찬 학급입니다.',
					icon: 'warning',
					showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
					confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
					cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
					confirmButtonText: '확인', // confirm 버튼 텍스트 지정
					cancelButtonText: '취소', // cancel 버튼 텍스트 지정
					reverseButtons: false, // 버튼 순서 거꾸로
				})
				
			}
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//셀렉트박스의 과목명
	let newSub = selectLesson.options[selectLesson.selectedIndex].getAttribute('data-newSub');
	
	let Subjects = '';
	for(const nowSubject of nowSubjects){
		Subjects += nowSubject.innerText;	
	}
	//같은 과목이 없다면(false라면)
	if (!Subjects.includes(newSub)){
		changeUnButton();
		
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
		
		
		
		return;
	}
	//이미 수강중인 학급을 선택했다면
	inputLessonCode.value = selectlessonInfoCode;
	for(const code of lessonInfoCodes){
		
		if(selectlessonInfoCode == code.value){
			
			changeUnButton();
			//Swal.fire('이동 불가', '학생이 이미 수강중인 학급입니다.', 'warning');
				Swal.fire({
					title: '이동 불가!',
					text: '학생이 이미 수강중인 학급입니다.',
					icon: 'warning',
					showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
					confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
					cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
					confirmButtonText: '확인', // confirm 버튼 텍스트 지정
					cancelButtonText: '취소', // cancel 버튼 텍스트 지정
					reverseButtons: false, // 버튼 순서 거꾸로
				})
			return;
		}
	}
	
	//현재 수강중인 수업의 과목과 선택한 과목이 같지 않으면 이동 불가
	for(const nowSubject of nowSubjects){
		//같은 과목이 있다면
		if(nowSubject.innerText == newSub){
			//LessonInfoCode
			nowSubject.id;
			beforeLessonInfoCode.value = nowSubject.id;
			studentLessonCode.value = nowSubject.getAttribute('data-stuLessonCode');
		}
	}


});



////////////////////////////////*함수*/////////////////////////////////

//버튼 불가로 변경
function changeUnButton(){
	//태그 속성 추가 변경
	updateBtn.setAttribute("class", "btn btn-secondary");

	updateBtn.innerText = "배 정 불 가";
	updateBtn.disabled = true;
}


function updateStudentLesson(){
	
	//ajax start
	$.ajax({
		url: '/stu/updateStudentLessonAjax', //요청경로
		type: 'post',
		data: {"lessonInfoCode": inputLessonCode.value, "studentLessonCode": studentLessonCode.value, "beforeLessonInfoCode":beforeLessonInfoCode.value}, //필요한 데이터
		success: function(res) {
				
		      Swal.fire({
				   title: '학생의 수강 학급이 변경되었습니다.',
				   text: '',
				   icon: 'success',
				   
				   showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
				   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
				   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
				   confirmButtonText: '확인', // confirm 버튼 텍스트 지정
				   cancelButtonText: '취소', // cancel 버튼 텍스트 지정
				   
				   reverseButtons: true, // 버튼 순서 거꾸로
				   
				}).then(result => {
				   // 만약 Promise리턴을 받으면,
				   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
						opener.parent.location.reload();
						window.open('','_self').close();
						
				   }
				});
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
	
	
}

