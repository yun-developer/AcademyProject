function updateStu(selectedTag) {
	
	const studentCode = selectedTag.previousElementSibling.value;
	
	$.ajax({
		url: '/stu/update', //요청경로
		type: 'post',
		data: {'studentCode' : studentCode}, //필요한 데이터를 컨트롤러로 전달
		success: function(result) { //컨트롤러에서 리턴된 데이터 result로 받음
			alert('aaa');
		},
		error: function() {
			alert('실패');
		}
	});
	
	
	
	
}