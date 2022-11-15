////////////변수///////////////////////////////
const selects = document.querySelectorAll('.selectChange');

//각 셀렉트박스
const searchSub = document.querySelector('#searchSub');
const searchStep = document.querySelector('#searchStep');
const searchYear = document.querySelector('#searchYear');




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
					
					
					const lessonListDiv = document.querySelector('#lessonList');
					//내용지우기
					lessonListDiv.innerHTML = ''; 
					
					let str ='';
					str += `<select class="form-select"   aria-label="Default select example">
							   <option value="">선택</option>
							     <c:forEach var="lesson" items="${result}">
							     	<option >1</option>
							    </c:forEach>
							 </select>
							`;
					str += '';
					str += '';
/*				<option value="${lesson.lessonInfoCode}">${lesson.subjectVO.subjectName + '-' +lesson.stepVO.stepName +'-'+lesson.year +'학년' }</option>*/
					
					
					
					lessonListDiv.insertAdjacentHTML('beforeend', str);
		
					
					
					
					
				},
				error: function() {
					alert('실패');
				}
			});
			//ajax end
		
	

	});
}

