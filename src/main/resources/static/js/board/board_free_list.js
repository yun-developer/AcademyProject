//제목줄 체크박스
const checkAll = document.querySelector('#checkAll');

//제목 줄 제외한 모든 체크박스
const chks = document.querySelectorAll('.chk');

//체크박스 전체선택, 전체해제 이벤트
checkAll.addEventListener('click', function(){
	//제목줄에서 체크박스의 체크여부
	const isChecked = checkAll.checked; // true, false
	
	//모든 체크박스	
	const checkBoxes = document.querySelectorAll('.chk');	
	
	//제목줄 체크박스가 체크되었다면
	if(isChecked) {
		//모든 체크박스를 체크함. 클래스가 chk인 것 모두 가져옴
		
		for(const checkBox of checkBoxes) {
			checkBox.checked = true;
		}
	}		
	else {
		for(const checkBox of checkBoxes) {
			checkBox.checked = false;
		}
	}
});



//리스트 체크박스 선택 시
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


//자유게시판 리스트에서 삭제 버튼 클릭
function goDelete() {
	const deleteForm = document.querySelector('#deleteStuForm');	// from태그의 id가 deleteStuForm 인 것
	
	//체크한 cartCode 다 들고 온다.
	const checkedChks = document.querySelectorAll('.chk:checked');  // 내가 체크한 것들
	
	if(checkedChks.length == 0) {
		alert('삭제할 게시글을 선택하세요');
		return ;
	}
	
	//문자열로 만들어서 던져 줌
	let boardNums = '';
	for(const checkedChk of checkedChks) {				// 내가 체크한 것들을 포문 돌려서 하나씩 삭제한다.
		boardNums = boardNums + checkedChk.value + ',';   // 
	}
	
	// alert(boardNums);  -> 1,2,  boardNums가져오기 위해서는 반복하고 있는 목록 데이터에서 체크박스 input태그 안에 value값에 baordNum을 넣어줘야 한다.
	
	//type이 히든인 input태그를 찾아서 value안에 boardNum을 넣어준다. 목록이라서 boardNums로 변수만듦.
	deleteForm.querySelector('input[type="hidden"]').value = boardNums;  // 넘어오는 name과 컨트롤러의 매개변수 이름 같으면 알아서 받아줌
	// 그리고 submit을 시켜준다. submit을 하면 form태그 액션이 실행된다.
	deleteForm.submit();
}






//페이징 라이브러리
var box = paginator({
    table: document.getElementById("table_box_bootstrap").getElementsByTagName("table")[0],
    box_mode: "list",
});
box.className = "box";
document.getElementById("table_box_bootstrap").appendChild(box);