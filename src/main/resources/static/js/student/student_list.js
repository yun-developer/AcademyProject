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





//삭제 버튼 클릭
function goDelete() {
	const deleteForm = document.querySelector('#deleteStuForm');	
	
	//체크한 cartCode 다 들고 온다.
	const checkedChks = document.querySelectorAll('.chk:checked');
	
	if(checkedChks.length == 0) {
		alert('삭제할 학생을 선택하세요');
		return ;
	}
	
	//문자열로 만들어서 던져 줌
	let studentCodes = '';
	for(const checkedChk of checkedChks) {
		studentCodes = studentCodes + checkedChk.value + ',';  
	}
	
	deleteForm.querySelector('input').value = studentCodes;  // 넘어오는 name과 컨트롤러의 매개변수 이름 같으면 알아서 받아줌
	
	deleteForm.submit();
}



//페이징 라이브러리
var box = paginator({
    table: document.getElementById("table_box_bootstrap").getElementsByTagName("table")[0],
    box_mode: "list",
});
box.className = "box";
document.getElementById("table_box_bootstrap").appendChild(box);

