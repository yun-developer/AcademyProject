function likeAjax(boardNum) {
	$.ajax({
		url: '/board/freeDetailLike', //요청경로
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