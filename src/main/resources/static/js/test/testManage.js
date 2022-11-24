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

//수정 모달 셀렉스박스




/////////////////////////////////////////////

//평가등록 모달을 눌렀을 때 실행되는 함수

function openRegTestModal(code, name){
	
	//학생코드 모달 hidden input value에 넣기
	document.querySelector('#stuCodeForReg').value = code;
	const stuentCode = document.querySelector('#stuCodeForReg').value;
	
	//학생 이름 모달 input value에 넣기
	document.querySelector('#stuNameForReg').value = name;
	const stuentName = document.querySelector('#stuNameForReg').value;
	
	
	//const lessonName = document.querySelector('.stuLesson').innerText;
	
	//alert(studentName);
	//alert(lessonName);
	
	
}







//평가수정 모달을 눌렀을 때 실행되는 함수


function openChangeTestModal(name){

	//학생 이름 모달 input value에 넣기
	document.querySelector('#stuNameForChange').value = name;
	const stuentName = document.querySelector('#stuNameForChange').value;
	
	


}








//score 값 100이상이여도 저장되네..validation 넣어야...??

//평가등록 모달 내 저장 버튼을 눌렀을 때 실행되는 함수
function regTest()  {
	
	//테스트 날짜
	let selectDateValue = selectDate.options[selectDate.selectedIndex].value;
	//과목코드
	let selectSubValue = selectSub.options[selectSub.selectedIndex].value;
	//학생코드
	let stuentCodeValue = document.querySelector('#stuCodeForReg').value;
	
	(() => {
	  'use strict'
	
	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
	  const forms = document.querySelectorAll('.needs-validation')
	
	  // Loop over them and prevent submission
	  Array.from(forms).forEach(form => {
	    form.addEventListener('click', event => {
			if (!form.checkValidity()) {
				event.preventDefault()
				event.stopPropagation()
				form.classList.add('was-validated')
			}

			else {

			}

	      
	      
	      
	      
	    }, false)
	  })
	})()


	
	
	
	
	
	
	//중복데이터가 있으면 얼럿 
	//ajax start
	$.ajax({
		url: '/test/regScoreAjax', //요청경로
		type: 'post',
		data: {'studentCode':stuentCodeValue,'subjectCode':selectSubValue,'testDate':selectDateValue}, //필요한 데이터
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
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
	//document.querySelector('#regTestForm').submit();

	
}




//평가수정 모달 내 저장 버튼을 눌렀을 때 실행되는 함수
function updateTest()  {
 	
 	//점수
 	const score = document.querySelector('#changeScore').value;
 	
 	//테스트 코드
 	const testCode = document.querySelector('#').value;

 	
 	alert(score);
 	
 	alert(testCode);
 	
 	
 	
 	
 	const updateForm = document.querySelector('#UpdateOrDeleteForm');
 	
 	//updateForm.querySelector('input').value = score;
 	
 	updateForm.action = '/test/updateScore';
 	
 	updateForm.submit();
 	
}

//평가수정 모달 내 삭제 버튼을 눌렀을 때 실행되는 함수 
function deleteTest()  {
 	
 	
 	alert(testCode);
 	
 	const deleteForm = document.querySelector('#UpdateOrDeleteForm');
 	
 	deleteForm.action = '/test/deleteScore';
 	
 	
 	deleteForm.submit();
}



////////////////////////////////////////////////////////////////////
//-------------------------이벤트 정의 영역----------------------//
///////////////////////////////////////////////////////////////////


//평가일 셀렉트 박스를 변경했을 때 event
/*$(document).on("change", "#selectDate", function() {
	
	let selectDateValue = selectDate.options[selectDate.selectedIndex].value;
});
*/


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




























