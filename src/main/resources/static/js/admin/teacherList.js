//////////////////////////////////////////////////////////////////////
//---------------스크립트 실행과 동시에 필요한 변수 생성-----------//
/////////////////////////////////////////////////////////////////////

//제목 줄 체크박스
const checkAll = document.querySelector('#checkAll');

//제목 줄을 제외한 모든 체크박스 
const chks = document.querySelectorAll('.chk');








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
	chk.addEventListener('click', chk=>{ //밑줄 와이...?
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




///////////////////////////////////////////////////////////////////
//-----------------------함수 정의 영역--------------------------//
///////////////////////////////////////////////////////////////////

//교사 이름 클릭시 팝업 창 띄우는 함수 
function teacherPopup(teacherCode){
	

	//window.open("[팝업을 띄울 파일명 path]", "[별칭]", "[팝업 옵션]")
	//별칭 지정 -> 1. 팝업 파일을 열고 웹브라우저 새로고침을 눌렀을 때 똑같은 팝업창이 계속해서 열리는 문제를 해결할 수 있다!
	var pop = window.open(`/admin/popup?teacherCode=${teacherCode}`,"teacherPopup","width=850,height=900, scrollbars=yes, resizable=yes");
	
	//팝업이 차단되어 있으면 알림 창 표시
	if(pop ==null){
		alert("팝업이 차단되어 있습니다. 팝업 차단을 해제해 주세요")
	}
	
}


