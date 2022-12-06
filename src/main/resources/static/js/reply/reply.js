function replyNoRegAjax(){

	const content = document.querySelector('#replyLength')

	if(content.value == "" ){
		alert("내용을 입력해주세요");
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
		alert(document.querySelector('#boardNum').value);
		document.querySelector('#updateReply').submit();
	}


}
