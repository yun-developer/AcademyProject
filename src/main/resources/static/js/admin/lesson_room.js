//////////////////////////////////////////////////////////////////////////////////////////////////
///-------------------------------스크립트 실행과 동시에 변수 생성----------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////
// 교실등록 페이지에서 신규버튼 클릭 시 모달창
function goRegLessonRoomAjax(){
	
	$('#bb').modal('show');


}	



// 신규 교실 등록 모달창
//const updateLessonRoomModal = new bootstrap.Modal('#updateLessonRoomModal');


// 교실 목록에서 제목줄 체크박스(전체 체크박스)
const checkAll = document.querySelector('#checkAll');

// 제목 줄을 제외한 모든 체크박스
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
	


//체크박스 하나 해제되면 제목줄 체크박스 해제
function checkSelectAll(checkbox)  {
  const selectall = document.querySelector('input[name="selectall"]');
  
  if(checkbox.checked === false)  {
    selectall.checked = false;
  }
}

function selectAll(selectAll)  {
  const checkboxes = document.getElementsByName('stu');
  
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked
  })
}

//체크박스 하나 해제되면 제목줄 체크박스 해제
for(const chk of chks){
	chk.addEventListener('click',chk=>{
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
	})
}

////////////////함수 1///////////////////

// 교실등록 페이지에서 삭제버튼 클릭 시

function lessonRoomDeleteAjax(){

	const LessonRoomForm = document.querySelector('#deleteLessonRoomForm')
   
	//체크한 cartCode 다 들고 온다. cartCode는 체크박스안에 들어있다. 전체 체크박스에서 체크된 것을 들고 오면 됨
	const checkedChks = document.querySelectorAll('.chk:checked'); // -> 내가 선택한 체크박스들(여러개) // 나는 클래스가 .chk인 애를 선택할 꺼야 클래스호출은 .을 써주기
	
	if(checkedChks.length == 0){
		 const modal = new bootstrap.Modal('#deleteModal');  // #myModal -> 모달창의 id를 가지고 오는 것이다.
	     modal.show();
		return ;
	}
	// 문자열로 만들어서 던져 줌
	let lessonRoomCodes = '';
	for(const checkedChk of checkedChks){
		lessonRoomCodes = lessonRoomCodes + checkedChk.value + ',';
	}	

	LessonRoomForm.querySelector('input').value = lessonRoomCodes;  // cartCode셋팅
	
	
	LessonRoomForm.submit();
	
}
//const modal = new bootstrap.Modal('#bb');

//체크박스 하나 해제되면 제목줄 체크박스 해제
for(const chk of chks){
	chk.addEventListener('click',chk=>{
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
	})
}





