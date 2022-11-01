

//아이디 찾기 버튼을 누르면 진행되는 함수
function findLoginAjax(){

	//ajax start
	$.ajax({
		url: '/teacher/findLoginAjax', //요청경로
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

}