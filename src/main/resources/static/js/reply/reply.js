//alert(1111);

function replyNoRegAjax(){

	const content = document.querySelector('#replyLength')

	if(content.value == "" ){
		alert("내용을 입력해주세요");
		return;
	}
	else{
		//alert("입력함");
	document.querySelector('#frmBoardContentsComment').submit();
		
	}
	
}




function updateReply(btn){

 
 let regBtnTag = document.querySelector('#btnContentsCommentSave');
 
 if(regBtnTag.value == '');
 	alert('댓글을 작성해 주세요.');
 	
 	return ;
 }	
 
 if(btn.value =='수정')
 	const replyContent = document.querySelector("replyContent");  // ???
 	const originalReplyContent = replyContent.innerText;
 	
 alert(replyContent);
 




