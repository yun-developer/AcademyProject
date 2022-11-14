alert(1111);

function replyNoRegAjax(){

	const replyTag = document.querySelector('#counter')
   

	if(replyTag.length == 0){
		 const modal = new bootstrap.Modal('#deleteModal');  // #myModal -> 모달창의 id를 가지고 오는 것이다.
	     modal.show();
		return ;
	}
}