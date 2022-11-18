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

function openRegTestModal(code){
	//학생코드
	//const studentCode = document.querySelectorAll('.stuCode');
	//학생 이름 
	const studentName = document.querySelector('.stuName').innerText;
	const lessonName = document.querySelector('.stuLesson').innerText;
	
	alert(studentName);
	alert(lessonName);
	
	//학생이름을 모달창에 보여주게 하기
	document.querySelector('#stuCodeForReg').value = studentName;
}




//평가수정 모달을 눌렀을 때 실행되는 함수


function openChangeTestModal(text){




}







//아직 하는중
//평가수정 모달 내 저장 버튼을 눌렀을 때 실행되는 함수
function regTest()  {
	
	//학생 코드 
	const studentCode = document.querySelector('.stuCode').value;
	
	alert(studentCode);
	
	document.querySelector('#stuCodeForReg').value = studentCode;
	
	document.querySelector('#regTestForm').submit();
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
	
	//교사 리스트 목록의 모든 체크박스
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
