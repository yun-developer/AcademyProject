//////////////////////////////////////////////////////////////////////////////////////////////////
///-------------------------------스크립트 실행과 동시에 변수 생성----------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////


// 과목 목록에서 제목줄 체크박스(전체 체크박스)
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


// 과목등록 페이지에서 삭제버튼 클릭 시
function subjectDeleteAjax(){

	const subjectForm = document.querySelector('#deleteSubjectForm')
   
	//체크한 cartCode 다 들고 온다. cartCode는 체크박스안에 들어있다. 전체 체크박스에서 체크된 것을 들고 오면 됨
	const checkedChks = document.querySelectorAll('.chk:checked'); // -> 내가 선택한 체크박스들(여러개) // 나는 클래스가 .chk인 애를 선택할 꺼야 클래스호출은 .을 써주기

	//체크한 체크박스가 없으면 뜨는 알림창
	if(checkedChks.length == 0){
		
	     Swal.fire({
		  title: '삭제할 교실을 선택하세요!',
		  icon: 'warning',
		  confirmButtonText: '확인'
		})
		return ;
	}
	
	// 체크한 체크박스가 있으면 뜨는 알림창
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
		   // 만약 Promise리턴을 받으면,
		   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
			
			//삭제 완료 alert 시작
			Swal.fire({
				title: '과목 삭제 완료',
				text: '해당 과목이 삭제되었습니다.',
				icon: 'success',

				showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
				confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
				cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
				confirmButtonText: '확인', // confirm 버튼 텍스트 지정
				cancelButtonText: '취소', // cancel 버튼 텍스트 지정

				reverseButtons: true, // 버튼 순서 거꾸로

			}).then(result => {
				// 만약 Promise리턴을 받으면,
				if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면

				//문자열로 만들어서 던져 줌

	let subjectCodes = '';
	
	for(const checkedChk of checkedChks){
		subjectCodes = subjectCodes + checkedChk.value + ',';
	}	

	subjectForm.querySelector('input').value = subjectCodes;  // cartCode셋팅
	
	
	subjectForm.submit();

				}
			});
				//삭제 완료 alert 끝

			}
		});
	}
}