//alert(1111);

function replyNoRegAjax(){

	const content = document.querySelector('#replyContent')

	if(content.value == "" ){
		alert("내용을 입력해주세요");
		return;
	}
	else{
		alert("입력함");
	document.querySelector('#frmBoardContentsComment').submit();
		
	}
	
}