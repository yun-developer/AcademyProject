///////////////////변수///////////////////////

//제목 줄 체크박스
const checkAll = document.querySelector('#checkAll');
//제목 줄을 제외한 모든 체크박스 
const chks = document.querySelectorAll('.chk');


//각 셀렉트박스
const searchSub = document.querySelector('#searchSub');
const searchStep = document.querySelector('#searchStep');
const searchYear = document.querySelector('#searchYear');





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

$(document).on("change", "#searchYear", function() {
	
	
	
	alert(11);

});


//score 값 100이상이여도 저장되네..validation 넣어야...??

//평가수정 모달 내 저장 버튼을 눌렀을 때 실행되는 함수
function regTest()  {
	
	
	
	//테스트 날짜
	//let testDate=document.querySelector('#searchYear').selected;
	//과목코드
	//let subjectCode= document.querySelector('#searchSub').value;;
	//학생코드
	let stuentCode = document.querySelector('#stuCodeForReg').value;
	//let s = testDate.value;
	//alert(testDate);


	//ajax start
	$.ajax({
		url: '/test/regScoreAjax', //요청경로
		type: 'post',
		data: {'stuentCode':stuentCode,'subjectCode':subjectCode,'testDate':testDate}, //필요한 데이터
		success: function(result) {
			alert('aaa');
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
	
	
	
	
	
	
	
	
	
	
	
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
