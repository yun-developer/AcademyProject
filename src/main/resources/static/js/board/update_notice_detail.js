//이미지 팝업 띄우기
$('.myModal').on('click',function(){
    let src = $(this).attr('data-file-name'); // 클릭한 링크의 href 속성값
    let fileName = $(this).attr('data-origin-file-name'); // 클릭한 링크의 href 속성값
    
    //이미지 소스 변경
    $('#imageModal img').attr('src', src);
    
    //모달태그 제목 변경
    $('#imageModalTitle').text(fileName);
});

//이미지 삭제 버튼 클릭
function deleteImgNotice(boardImgNum, boardNum){

		Swal.fire({
		   title: '정말 삭제하시겠습니까?',
		   icon: 'warning',
		   
		   showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
		   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
		   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
		   confirmButtonText: '확인', // confirm 버튼 텍스트 지정
		   cancelButtonText: '취소', // cancel 버튼 텍스트 지정
		   
		   
		}).then(result => {
		   // 만약 Promise리턴을 받으면,
		   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
			
			location.href=`/board/deleteBoardImgUpdateNotice?boardImgNum=${boardImgNum}&boardNum=${boardNum}`;
			
			}
		});
	}
	



/*//자유게시판 리스트에서 삭제 버튼 클릭
function goDelete() {
	const deleteForm = document.querySelector('#deleteStuForm');	// from태그의 id가 deleteStuForm 인 것
	
	
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
		   // 만약 Promise리턴을 받으면,
		   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
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
		});
	}
}*/