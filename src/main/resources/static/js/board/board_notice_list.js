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





//공지사항 리스트에서 삭제 버튼 클릭
function goDelete() {
	
	const deleteForm = document.querySelector('#deleteStuForm');	
	
	//체크한 cartCode 다 들고 온다.
	const checkedChks = document.querySelectorAll('.chk:checked');  
	
	if(checkedChks.length == 0) {
		Swal.fire({
		  title: '삭제할 게시글을 선택하세요!',
		  icon: 'error',
		  confirmButtonText: '확인'
		})
		return ;
	}
	
	else{
		Swal.fire({
		   title: '정말 삭제하시겠습니까?',
		   icon: 'warning',
		   
		   showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
		   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
		   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
		   confirmButtonText: '승인', // confirm 버튼 텍스트 지정
		   cancelButtonText: '취소', // cancel 버튼 텍스트 지정
		   
		   
		}).then(result => {
		   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
			let boardNums = '';
			for(const checkedChk of checkedChks) {				
				boardNums = boardNums + checkedChk.value + ',';   
			}
			
			deleteForm.querySelector('input[type="hidden"]').value = boardNums;  
			
			deleteForm.submit();
			
			}
		});
	}
}
	
	




//페이징 라이브러리
var box = paginator({
    table: document.getElementById("table_box_bootstrap").getElementsByTagName("table")[0],
    box_mode: "list",
});
box.className = "box";
document.getElementById("table_box_bootstrap").appendChild(box);