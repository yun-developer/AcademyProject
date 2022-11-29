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
function deleteImgFree(boardImgNum, boardNum){
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
		//location.href='/board/deleteBoardImgUpdateFree?boardImgNum=' + boardImgNum;
		location.href=`/board/deleteBoardImgUpdateFree?boardImgNum=${boardImgNum}&boardNum=${boardNum}`;
	


			}
	});
}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	