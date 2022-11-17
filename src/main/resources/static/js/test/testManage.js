///////////////////변수///////////////////////


/////////////////////////////////////////////



//평가수정 모달 내 저장 버튼을 눌렀을 때 실행되는 함수
function updateTest()  {
 	alert(11);
}

//평가수정 모달 내 삭제 버튼을 눌렀을 때 실행되는 함수 
function deleteTest()  {
 	alert(33);
}






//아직 추가 안함
//페이징 라이브러리
var box = paginator({
    table: document.getElementById("table_box_bootstrap").getElementsByTagName("table")[0],
    box_mode: "list",
});
box.className = "box";
document.getElementById("table_box_bootstrap").appendChild(box);
