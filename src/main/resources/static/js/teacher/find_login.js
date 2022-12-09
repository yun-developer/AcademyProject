//아이디 찾기 버튼을 누르면 진행되는 함수
function findLoginIdAjax(){

	//teacherName 값 
	const teacherName = document.querySelector('#findName').value;
	//teacherTell 값
	const teacherTell = document.querySelector('#findTell').value;
		
	console.log(teacherName);
	console.log(teacherTell);
	
	let str = '';
	

	//ajax start
	$.ajax({
		url: '/teacher/findLoginIdAjax', //요청경로
		type: 'post',
		data: {'teacherName':teacherName, 'teacherTell':teacherTell}, //필요한 데이터
		success: function(result) {
			
			
		
			
			if(result.check == 0){
				str += ' <div class="col-md-4" style="float: none; margin: 0 auto;">  ';
				str += ' <div>  ';
				str += ' 아이디 조회 결과 입력하신 정보와 일치하는 아이디가 존재하지 않습니다.  ';
				str += ' </div>  ';
				str += ' </div>  ';
			}
			else if(result.check == 1){
				str += ' <div class="col-md-4" style="float: none; margin: 0 auto;">  ';
				str += ' <div class="mb-3">  ';
				str += ' 아이디 조회 결과 입력하신 정보와 일치하는 아이디는 아래와 같습니다 ';
				str += ' </div> ';
				str += ` <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
						<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
						</svg> ${result.teacherId}</div>` ;
				str += ' </div> ';
			}
			
			
			const findResult = document.querySelector('#findResult');

			findResult.innerHTML = ''; /*내용을 지우는것*/

			findResult.insertAdjacentHTML('beforeend', str);
			
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end

}


////////////////////////////////////////////////////////////
///////////////////////이벤트///////////////////////////////
////////////////////////////////////////////////////////////

//비밀번호 찾기에서 연락처로 문자전송을 눌렀을 때 


//$('#sendPhoneNumber').click(function(){

$(document).on("click", "#sendPhoneNumber", function() {
	//teacherName 값 
	const teacherName = document.querySelector('#teacherName').value;
	//teacherTell 값
	const teacherId = document.querySelector('#teacherId').value;

	let str = '';
	let teacherTell = $('#teacherTell').val();


	$.ajax({
		type: "GET",
		url: "/sms/sendSMS",
		data: {
			"teacherTell": teacherTell, "teacherName": teacherName, "teacherId": teacherId
		},
		success: function(res) {
			
			//입력한 정보(이름 아이디 전화번호)에 맞는 회원이 있다면 인증번호 보내고 인증번호 입력창 생성 
			if (res != "") {

				//Swal.fire('인증번호 발송 완료!')
				Swal.fire({
					title: '인증번호 발송 완료!',
					//icon: 'warning',
					showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
					confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
					cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
					confirmButtonText: '확인', // confirm 버튼 텍스트 지정
					cancelButtonText: '취소', // cancel 버튼 텍스트 지정
					reverseButtons: false, // 버튼 순서 거꾸로
				})
						

				str += `<div class="row mb-3">
							<div class="col-sm-12">
								<input type="password" class="form-control" name="inputCertifiedNumber"
									id="inputCertifiedNumber" placeholder="인증번호">
							</div>
						</div>
						<div class="row mb-3">	
							<div class="d-grid gap-2 mb-3">
								<button id="checkBtn" class="btn btn-primary" type="button">확인</button>
							</div>
						</div>`;

				const changeFindPwDiv = document.querySelector('#changeFindPwDiv');

				changeFindPwDiv.innerHTML = ''; /*내용을 지우는것*/

				changeFindPwDiv.insertAdjacentHTML('beforeend', str);
			}
			//입력한 정보(이름 아이디 전화번호)에 맞는 회원이 없다면 error 모달
			else {
				//Swal.fire('인증번호 발송 실패!', '입력하신 데이터와 일치하는 회원이 없습니다', 'error')
				Swal.fire({
					title:'인증번호 발송 실패!',
					text: '입력하신 데이터와 일치하는 회원이 없습니다!',
					icon: 'error',
					confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
					confirmButtonText: '확인', // confirm 버튼 텍스트 지정
				})
				
				
			}

			//인증번호 확인 버튼을 눌렀을 때 
			$('#checkBtn').click(function() {
				
				let check = $('#inputCertifiedNumber').val();
				//인증번호 input 데이터 값이 빈문자열이 아니라면	
				if (check != '') {
					//인증번호 일치한다면 인증번호로 비밀번호 업데이트
					if ($.trim(res) == $('#inputCertifiedNumber').val()) {

						$.ajax({
							type: "post",
							url: "/teacher/updateTemporaryPw",
							data: {
								"teacherPw": $('#inputCertifiedNumber').val(), "teacherTell": teacherTell
							},
							success: function(res1) {
								
								Swal.fire({
									title: '인증성공',
									text: "임시비밀번호로 변경되었습니다",
									icon: 'success',
									showCancelButton: false,
									confirmButtonColor: '#3085d6',
									cancelButtonColor: '#d33',
									confirmButtonText: '확인',
									cancelButtonText: '취소',
									reverseButtons: true, // 버튼 순서 거꾸로

								}).then((result) => {
									if (result.isConfirmed) {
										//로그인 페이지로 이동
										location.href=`/teacher/loginPage`;
									}
								})
							},
							error: function() {
								alert('실패');
							}
						})
					//인증번호 불일치한다면 error 모달
					} else {
						Swal.fire({
							icon: 'error',
							title: '인증오류',
							text: '인증번호가 올바르지 않습니다!',
							confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
							confirmButtonText: '확인', // confirm 버튼 텍스트 지정
						})
						
					}
				}
				//인증번호 input 데이터 값이 빈문자열이라면
				else {
					Swal.fire({
						icon: 'error',
						title: '인증오류',
						text: '인증번호를 입력하세요!',
						confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
						confirmButtonText: '확인', // confirm 버튼 텍스트 지정
					})
				}
			})
		}
	})
});