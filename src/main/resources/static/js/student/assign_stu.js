////////////변수///////////////////////////////
const selects = document.querySelectorAll('.selectChange');

//각 셀렉트박스
const searchSub = document.querySelector('#searchSub');
const searchStep = document.querySelector('#searchStep');
const searchYear = document.querySelector('#searchYear');

//학급편성 셀렉트박스
const selectLesson = document.querySelector('#selectLesson');

//셀렉트박스div
const lessonListDiv = document.querySelector('#lessonList');
//인원div
const capacityDiv = document.querySelector('#capacity');
//수강료div
const moneyDiv = document.querySelector('#money');

//버틍
const assingnStuBtn = document.querySelector('#assingnStu');

//inputLessonCode
const inputLessonCode = document.querySelector('#inputLessonCode');

///////////////////////////////////함수///////////////////////////////////////////

//수용인원,수강료 새로 잗성
function newCapacityandMoney(getCode){
	
	//내용지우기
	capacityDiv.innerHTML = ''; 
	moneyDiv.innerHTML = '';

	//ajax start
	$.ajax({
		url: '/stu/selectLessonListAjax', //요청경로
		type: 'post',
		data: {"lessonInfoCode": getCode, "selectYear":null}, //필요한 데이터
		success: function(resultLesson) {
			
			let capacityStr ='';
			capacityStr+=`<span>${resultLesson[0].nowStudentCnt + "/" + resultLesson[0].maxStudent}</span>`;
			capacityDiv.insertAdjacentHTML('beforeend', capacityStr);
			
			let moneyStr ='';
			moneyStr+=`<span>${resultLesson[0].money}</span>`;
			moneyDiv.insertAdjacentHTML('beforeend', moneyStr);
			
			inputLessonCode.value = getCode;
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
}


//저장 버튼 클릭시 등록
function assingnStudent (){
	
	assingnStuBtn.submut();
}



////////////////////////////////////////이벤트///////////////////////////////////////////////


//셀렉트 박스 값이 변경된다면?
for(const selectBox of selects) {
	
	selectBox.addEventListener('change', function aaa(){
		
	//셀렉트 박스에서 선택한 값
	let selectSubjectCode = searchSub.options[searchSub.selectedIndex].value;
	let selectStepCode = searchStep.options[searchStep.selectedIndex].value;
	let selectYear = searchYear.options[searchYear.selectedIndex].value;
	
	
		//ajax start
			$.ajax({
				url: '/stu/selectLessonListAjax', //요청경로
				type: 'post',
				data: {"subjectCode": selectSubjectCode, "stepCode":selectStepCode,"selectYear":selectYear}, //필요한 데이터
				success: function(result) {
					
					//내용지우기
					lessonListDiv.innerHTML = ''; 
				
					//셀렉트박스 새로 작성
					let str ='';
					str += `<select class="form-select" aria-label="Default select example" id="newLessonList">
							   <option value="">선택</option>`;
					for(const lesson of result){
							str += `<option value="${lesson.lessonInfoCode}" id="${lesson.lessonInfoCode}">${lesson.subjectVO.subjectName + '-' +lesson.stepVO.stepName +'-'+lesson.year +'학년'}</option>`;
					}
					str += `</select>`;
					
					lessonListDiv.insertAdjacentHTML('beforeend', str);
	
					
					//새로운 셀렉트박스
					let newLessonList = document.querySelector('#newLessonList');
					newLessonList.addEventListener('change', function abbb(){
							
					//셀렉트 박스에서 선택한 값
					let newLessonListvalue = newLessonList.options[newLessonList.selectedIndex].value;
					newCapacityandMoney(newLessonListvalue);
					})
				},
				error: function() {
					alert('실패');
				}
			});
			//ajax end
	});
}

//학급 셀렉트 박스 값을 선택시
selectLesson.addEventListener('change', function abc(){
	let selectLessonValue = selectLesson.options[selectLesson.selectedIndex].value;
	newCapacityandMoney(selectLessonValue);
	
});







