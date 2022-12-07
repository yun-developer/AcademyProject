/////////////////////////////////////변수////////////////////////////////////////

//교사 코드
const teacherCode = document.querySelector('#childTeacherCode').innerText;
let str = '';

////////////////////////////////////////////////////////////////////////////////





//교사 승인 버튼을 눌렀을 때 

$(document).on("click", "#changeTeacherRoleBtn", function() {

	
	
	Swal.fire({
		title: '교사 승인하시겠습니까?',
		text: '미승인 회원을 교사로 승인합니다',
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
			
			
			//교사 권한 변경 ajax실행
			//ajax start
			$.ajax({
				url: '/admin/changeTeacherRoleAjax', //요청경로
				type: 'post',
				data: {"teacherCode": teacherCode}, //필요한 데이터
				success: function(result) {
					
					//변경된 권한을 새로 그려줌
					str += `<a href="#" class="btnView" id="">${result}</a>
					
					
							`;
					
					
					const changeTeacherRoleDiv = document.querySelector('#changeTeacherRoleDiv');

					changeTeacherRoleDiv.innerHTML = ''; /*내용을 지우는것*/

					changeTeacherRoleDiv.insertAdjacentHTML('beforeend', str);
					
					//부모창 새로고침
					opener.location.reload();
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
$(document).on("click", "#teacherStatusSwitch", function() {
	
	const isteacherStatusTag = document.querySelector('#teacherStatusSwitch');
	
	const isteacherStatus = document.querySelector('#teacherStatusSwitch').checked;
	
	
	//스위치를 off(퇴사)로 변경시 
	if(isteacherStatus == false){
		const teacherStatus = 'N';
	
			
			
			Swal.fire({
			title: '재직상태를 변경하시겠습니까?',
			text: '퇴사 상태로 교사 재직상태를 변경합니다',
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
				
				//교사 상태 변경 ajax실행
				//ajax start
				$.ajax({
					url: '/admin/changeTeacherStatusAjax', //요청경로
					type: 'post',
					data: {"teacherCode": teacherCode,"teacherStatus":teacherStatus}, //필요한 데이터
					success: function(result) {
						
						
						
						
						const changeStatusText = document.querySelector('#changeStatusText');
						changeStatusText.innerHTML = ''; /*내용을 지우는것*/
						str = `퇴사`;
						changeStatusText.insertAdjacentHTML('beforeend', str);
						
						//부모창 새로고침
						opener.location.reload();
						
					},
					error: function() {
						alert('실패');
					}
				});
				//ajax end
				
				Swal.fire('재직상태 변경.', '재직상태가 퇴사로 변경되었습니다', 'success');
			}
			else{
				
				//재직 중인 교사를 스위치 버튼 눌러서 변경하려고 하다가 취소를 누르면 
				//스위치 버튼이 원래대로 on되어있게
				isteacherStatusTag.checked = true;
			}
		})
		
		
	}
	
	
	
	
	//스위치를 on(재직중)으로 변경시 
	if(isteacherStatus == true){
		const teacherStatus = 'Y';
			
			Swal.fire({
			title: '재직상태를 변경하시겠습니까?',
			text: '재직중 상태로 교사 재직상태를 변경합니다',
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
						
				//교사 상태 변경 ajax실행
				//ajax start
				$.ajax({
					url: '/admin/changeTeacherStatusAjax', //요청경로
					type: 'post',
					data: {"teacherCode": teacherCode,"teacherStatus":teacherStatus}, //필요한 데이터
					success: function(result) {
						
						
						
						const changeStatusText = document.querySelector('#changeStatusText');
						changeStatusText.innerHTML = ''; /*내용을 지우는것*/
						str = `재직중`;
						changeStatusText.insertAdjacentHTML('beforeend', str);
					
						//부모창 새로고침
						opener.location.reload();
					},
					error: function() {
						alert('실패');
					}
				});
				//ajax end
				
				Swal.fire('재직상태 변경.', '재직상태가 재직중으로 변경되었습니다', 'success');
			}
			else{
				
				//퇴사 상태 교사를 스위치 버튼 눌러서 변경하려고 하다가 취소를 누르면 
				//스위치 버튼이 원래대로 off되어있게
				isteacherStatusTag.checked = false;
			}
		})
	}
	
	
	
	
	
	
	
	
	
});