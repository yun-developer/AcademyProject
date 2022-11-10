
//로그인 버튼 클릭 했을 때 입력한 정보에 일치하는 회원이 없는 경우
$(document).on("click", "#loginBtn", function() {
	
	//teacherId 값
	const teacherId = document.querySelector('#teacherId').value;
	
	
	
	
	alert(teacherId);

	//ajax start
	$.ajax({
		url: '/teacher/loginAjax', //요청경로
		type: 'post',
		data: {}, //필요한 데이터
		success: function(result) {
			alert('aaa');
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end



	

});