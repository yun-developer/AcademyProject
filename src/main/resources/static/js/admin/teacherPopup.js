
//교사 승인 버튼을 눌렀을 때 

$(document).on("click", "#changeTeacherRoleBtn", function() {




	//const changeTeacherRole = document.querySelector('#changeTeacherRole').value;
	const changeTeacherRole = document.querySelector('#changeTeacherRole').innerText;
	
	const teacherCode = document.querySelector('#teacherCodeForChange').innerText;

	alert(changeTeacherRole);
	alert(teacherCode);



	Swal.fire({
		title: '미승인 회원을 승인하시겠습니까?',
		text: '다시 되돌릴 수 없습니다. 신중하세요.',
		icon: 'warning',

		showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
		confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
		cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
		confirmButtonText: '승인', // confirm 버튼 텍스트 지정
		cancelButtonText: '취소', // cancel 버튼 텍스트 지정

		reverseButtons: true, // 버튼 순서 거꾸로

	}).then(result => {
		// 만약 Promise리턴을 받으면,
		if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
			
			
			
			//ajax start
			$.ajax({
				url: '/admin/changeTeacherRoleAjax', //요청경로
				type: 'post',
				data: {"teacherCode": teacherCode}, //필요한 데이터
				success: function(result) {
					alert('aaa');
				},
				error: function() {
					alert('실패');
				}
			});
			//ajax end
			
			
			
			Swal.fire('승인이 완료되었습니다.', '교사 권한이 변경되었습니다', 'success');
		}
	})








});