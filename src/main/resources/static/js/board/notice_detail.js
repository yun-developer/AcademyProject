function likeAjax() {
	
	$.ajax({
		url: '/board/noticeDetailLike', //요청경로
		type: 'post',
		data: {}, //필요한 데이터를 컨트롤러로 전달
		success: function(result) { //컨트롤러에서 리턴된 데이터 result로 받음
			alert(111111111111)
			const extractTextPattern = /(<([^>]+)>)/gi;
			let likeButton = document.querySelector('.likeButton');
					
					
			 let src = likeButton.innerHTML;
			  
			 let extractedText = src.replace(extractTextPattern, '');
						
			const str = '';
			
		},
		error: function() {
			alert('실패');
		}
	});
	
	
}



