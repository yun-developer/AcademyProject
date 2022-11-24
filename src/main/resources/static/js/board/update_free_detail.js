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
function deleteImg(boardImgNum, boardNum){
	const result = confirm('첨부된 파일을 삭제하시겠습니까?');
	
	if(result){
		//location.href='/board/deleteBoardImgUpdateFree?boardImgNum=' + boardImgNum;
		location.href=`/board/deleteBoardImgUpdateFree?boardImgNum=${boardImgNum}&boardNum=${boardNum}`;
	}	
}