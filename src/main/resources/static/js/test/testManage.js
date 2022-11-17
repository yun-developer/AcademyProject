///////////////////변수///////////////////////


/////////////////////////////////////////////

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







//페이징 라이브러리
var box = paginator({
    table: document.getElementById("table_box_bootstrap").getElementsByTagName("table")[0],
    box_mode: "list",
});
box.className = "box";
document.getElementById("table_box_bootstrap").appendChild(box);
