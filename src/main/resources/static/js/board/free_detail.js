

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



//자유게시판 상세페이지에서 삭제 버튼 클릭
function DetailFreeDelete() {

	const deleteForm = document.querySelector('#deleteStuForm');	// from태그의 id가 deleteStuForm 인 것
	
	
		Swal.fire({
		   title: '정말 삭제하시겠습니까?',
		   icon: 'warning',
		   
		   showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
		   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
		   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
		   confirmButtonText: '확인', // confirm 버튼 텍스트 지정
		   cancelButtonText: '취소', // cancel 버튼 텍스트 지정
		   
		   
		}).then(result => {
		   // 만약 Promise리턴을 받으면,
		   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
			//문자열로 만들어서 던져 줌

			let boardNum = deleteForm.querySelector('input[type="hidden"]').value
					
				    
			deleteForm.submit();
			
			   /*-> 1,2,  boardNums가져오기 위해서는 반복하고 있는 목록 데이터에서 체크박스 input태그 안에 value값에 baordNum을 넣어줘야 한다.*/
			
			//type이 히든인 input태그를 찾아서 value안에 boardNum을 넣어준다. 목록이라서 boardNums로 변수만듦.
			  
			// 그리고 submit을 시켜준다. submit을 하면 form태그 액션이 실행된다.
			
			}
		});
	}	



//자유게시판 상세페이지 수정 하고 수정완료 버튼 클릭
function updateFreeDelete() {

	const deleteForm = document.querySelector('#boardNum');	// from태그의 id가 deleteStuForm 인 것
	
	
		Swal.fire({
		   title: '게시 글 수정이 완료되었습니다!',
		   icon: 'warning',
		   
		   showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
		   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
		   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
		   cancelButtonText: '확인', // cancel 버튼 텍스트 지정
		   
		   
		}).then(result => {
		   // 만약 Promise리턴을 받으면,
		   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
			//문자열로 만들어서 던져 줌
			
			let boardNum = deleteForm.querySelector('input[type="hidden"]').value
				
				    
			deleteForm.submit();
			
			   /*-> 1,2,  boardNums가져오기 위해서는 반복하고 있는 목록 데이터에서 체크박스 input태그 안에 value값에 baordNum을 넣어줘야 한다.*/
			
			//type이 히든인 input태그를 찾아서 value안에 boardNum을 넣어준다. 목록이라서 boardNums로 변수만듦.
			  
			// 그리고 submit을 시켜준다. submit을 하면 form태그 액션이 실행된다.
			
			}
		});
	}


	