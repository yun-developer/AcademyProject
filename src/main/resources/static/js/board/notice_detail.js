function likeAjax(boardNum) {
	
	$.ajax({
		url: '/board/noticeDetailLike', //요청경로
		type: 'post',
		data: {'boardNum':boardNum}, //필요한 데이터를 컨트롤러로 전달
		success: function(map) { //컨트롤러에서 리턴된 데이터 result로 받음
			let likeDiv = document.querySelector('#likeDiv');
					
			likeDiv.innerHTML = '';
			
			let str = '';
			
	        if(map.likeCheck == 0){
	            str += `<button onclick="likeAjax(${map.boardNum});" id="likeButton" style="height: 45px; width: 80px;" class="btn btn-outline-light">`
				str += '<img class="rounded" id="likeimg" src="/images/like/suit-heart-fill.svg" width="60px" height="60px" style="width: 50px; height: 40px;">'
				str += '</button>'
				likeDiv.insertAdjacentHTML('beforeend', str);
				
	        }
	         else if (map.likeCheck == 1){
	            str += `<button onclick="likeAjax(${map.boardNum});" id="likeButton" style="height: 45px; width: 80px;" class="btn btn-outline-light">`
				str += '<img class="rounded" id="likeimg" src="/images/like/suit-heart.svg" width="60px" height="60px" style="width: 50px; height: 40px;">'
				str += '</button>'
				likeDiv.insertAdjacentHTML('beforeend', str);
				
	         }
						
		},
		error: function() {
			alert('실패');
		}
	});
}


$("#replyLength").keyup(function(e) {
	    //console.log("키업!");
		var content = $(this).val();
		$("#replyLengthCheck").text("(" + content.length + " / 최대 500자)"); //실시간 글자수 카운팅
		
		if (content.length > 500) {
			
			Swal.fire({
			  icon: 'warning',  // 여기다가 아이콘 종류를 쓰면 됩니다.                     
			  title: '최대 500자까지 입력 가능합니다.',    
			});
			
			$(this).val(content.substring(0, 500));
			$('#replyLengthCheck').text("(500 / 최대 500자)");
		}
	});
