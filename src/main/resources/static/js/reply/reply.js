function replyNoRegAjax(){

	const content = document.querySelector('#replyLength')

	if(content.value == ""){
		/*Swal.fire({
		  title: '내용을 입력해 주세요!',
		  icon: 'error',
		  confirmButtonText: '확인'
		})*/
		
		Swal.fire({
				title: '내용을 입력해 주세요!',
				icon: 'warning',
				showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
				confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
				cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
				confirmButtonText: '확인', // confirm 버튼 텍스트 지정
				cancelButtonText: '취소', // cancel 버튼 텍스트 지정

				reverseButtons: false, // 버튼 순서 거꾸로

			})
		
		
		
		return;
	}
	
	else{
	document.querySelector('#frmBoardContentsComment').submit();
		
	}
	
}




function updateReply(replyNum,btn){

 	if(btn.value =='수정'){
	 	const replyContentSpan = btn.closest('div').querySelector(".replyContent");  
	 	const content = replyContentSpan.innerText;
	 	replyContentSpan.innerText = '';
	 	
	 	str = '';
	 	str += `<textarea class="form-control" name="replyContent" style="resize:none; margin-bottom:6px;">${content}</textarea>`;
	 	replyContentSpan.insertAdjacentHTML('afterbegin', str);
	 	

		// 확인 버튼으로 바꾸기
	 	btn.value = '확인';


	}
	
	// 버튼이 확인 일 때
	else{
		document.querySelector('#replyNum').value=replyNum; 
		document.querySelector('#boardNum').value; 
		document.querySelector('#updateReply').submit();
	}


}
