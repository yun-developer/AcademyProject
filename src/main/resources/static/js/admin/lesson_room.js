//////////////////////////////////////////////////////////////////////////////////////////////////
///-------------------------------스크립트 실행과 동시에 변수 생성----------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////
// 신규 교실 등록 모달창
//const updateLessonRoomModal = new bootstrap.Modal('#updateLessonRoomModal');


// 교실 목록에서 제목줄 체크박스(전체 체크박스)
const checkAll = document.querySelector('#checkAll');


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
	


// 제목줄을 제외한 모든 체크박스 (subject_code 데이터 있음)
const chks = document.querySelectorAll('.chk');

// 체크박스 하나 해제되면 제목줄 체크박스 해제



////////////////함수 1///////////////////

// 교실등록 페이지에서 삭제버튼 클릭 시
function lessonRoomDeleteAjax(){

	const LessonRoomForm = document.querySelector('#deleteLessonRoomForm')
   
	//체크한 cartCode 다 들고 온다. cartCode는 체크박스안에 들어있다. 전체 체크박스에서 체크된 것을 들고 오면 됨
	const checkedChks = document.querySelectorAll('.chk:checked'); // -> 내가 선택한 체크박스들(여러개) // 나는 클래스가 .chk인 애를 선택할 꺼야 클래스호출은 .을 써주기
	
	if(checkedChks.length == 0){
		alert('삭제할 교실을 선택하세요');
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
const modal = new bootstrap.Modal('#updateLessonRoomModal');

function updateLessonRoomModal(){

	modal.show();
}


////////////////함수 2///////////////////
// 교실등록 페이지에서 신규버튼 클릭 시
function goupdateLessonRoom(){
	//parentElement : 부모태그 찾아 감.
	//children : 자식 태그 찾아 감.
	//previousElementSibling : 이전 형제 노드를 찾아 감.
	//nextElementSibling : 다음 형제 노드를 찾아 감.
	//closest() : 가장 가까운 상위태그를 찾아 감
	
	//const itemStock = selectedTag.parentElement.previousElementSibling.children[0].value;
	//const itemStock = selectedTag.closest('td').querySelector('.stockInput').value;
	
	//ajax start
	$.ajax({
		url: '/admin/regLessonRoom', //요청경로
		type: 'post',
		data: {'itemStock': itemStock}, //필요한 데이터
		success: function(result) {
			//모달창 띄우고 소스
			const modal = new bootstrap.Modal('#updateLessonRoomModal');
			modal.show();
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
}



