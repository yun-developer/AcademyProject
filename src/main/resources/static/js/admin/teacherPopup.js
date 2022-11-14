/////////////////////////////////////변수////////////////////////////////////////

const teacherCode = document.querySelector('#childTeacherCode').innerText;
let str = '';

////////////////////////////////////////////////////////////////////////////////





//교사 승인 버튼을 눌렀을 때 

$(document).on("click", "#changeTeacherRoleBtn", function() {

	
	
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
					
					
					str += `<div class="col-2 text-secondary">권한</div>
								<div class="col">${result}</div>
							`;
					
					
					const changeTeacherRoleDiv = document.querySelector('#changeTeacherRoleDiv');

					changeTeacherRoleDiv.innerHTML = ''; /*내용을 지우는것*/

					changeTeacherRoleDiv.insertAdjacentHTML('beforeend', str);
					
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



//교사 상태 변경  
//구현 중임
$(document).on("click", "#teacherStatusSwitch", function() {
	
	
	
	const teacherStatus = document.querySelector('#teacherStatusSwitch').checked;
	alert(teacherStatus); // true false 로 뜨네
	
		Swal.fire({
		title: '교사 상태를 변경하시겠습니까?',
		text: '선택하신 상태로 교사 재직상태를 변경합니다',
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
				url: '/admin/changeTeacherStatusAjax', //요청경로
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
			
			Swal.fire('상태가 변경되었습니다.', '교사 재직 상태가 변경되었습니다', 'success');
		}
	})
	
	
});