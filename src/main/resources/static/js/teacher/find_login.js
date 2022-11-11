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




//비밀번호 찾기 버튼을 누르면 진행되는 함수

function findLoginPwAjax(){
	
	
}



//이메일 or 전화번호로 찾기 누를 때 진행/////////////////////////////////



//이메일로 찾기 눌렀을 때 
$('#findByEmail').click(function(){
	
	
	let str = '';
	
	//ajax start
	$.ajax({
		url: '/teacher/findByEmailAjax', //요청경로
		type: 'post',
		data: {}, //필요한 데이터
		success: function(result) {
			str += `			<div class="row mb-3">
				<div class="col-sm-12">
					<input type="text" class="form-control" name="teacherId"
						id="teacherId" placeholder="아이디">
				</div>
			</div>
			<div class="row mb-3">
				<div class="col-sm-12">
					<input type="text" class="form-control" name="teacherName"
						id="teacherName" placeholder="이름">
				</div>
			</div>
			<form action="/mail/send" method="post">
				<div class="row mb-3">
					<div class="col-sm-9">
						<input type="email" class="form-control" name="teacherEmail"
							id="teacherEmail" placeholder="이메일">
					</div>
				<div class="col-sm-3">
					<button class="btn btn-primary"
						type="button" data-bs-toggle="modal"
                                            data-bs-target="#sendEmailModal">인증번호전송</button>
				</div>
				</div>
			</form>
			
			  `;
			  
			  
			 const changeFindPwDiv = document.querySelector('#changeFindPwDiv');

			 changeFindPwDiv.innerHTML = ''; /*내용을 지우는것*/


			 changeFindPwDiv.insertAdjacentHTML('beforeend', str);
			  
			  
		},
		error: function() {
			alert('실패');
		}
	});
//ajax end


	
	
});


//전화번호로 찾기 눌렀을 때 
$('#findByTell').click(function(){
	
	
	let str = '';
	
	//ajax start
	$.ajax({
		url: '/teacher/findByTellAjax', //요청경로
		type: 'post',
		data: {}, //필요한 데이터
		success: function(result) {
			
			str += `			<div class="row mb-3">
				<div class="col-sm-12">
					<input type="text" class="form-control" name="teacherId"
						id="teacherId" placeholder="아이디">
				</div>
			</div>
			<div class="row mb-3">
				<div class="col-sm-12">
					<input type="text" class="form-control" name="teacherName"
						id="teacherName" placeholder="이름">
				</div>
			</div>
			<div class="row mb-3">
				<div class="col-sm-12">
					<input type="text" class="form-control" name="teacherTell"
						id="teacherTell" placeholder="전화번호">
				</div>
			</div>
			<div class="row mb-3">
				<div class="d-grid gap-2 mb-3">
					<button th:onclick="" id="sendPhoneNumber" class="btn btn-primary"
						type="button">문자 전송</button>
				</div>
			</div>
			<!-- 아래 div도 ajax...?로? 해야 할듯?ㅠㅠ  -->
			<div class="row mb-3">
				<div class="col-sm-12">
					<input type="text" class="form-control" name="inputCertifiedNumber"
						id="inputCertifiedNumber" placeholder="인증번호">
				</div>
			</div>
			<div class="row mb-3">	
				<div class="d-grid gap-2 mb-3">
					<button id="checkBtn" class="btn btn-primary" type="button">확인</button>
				</div>
			</div>
			
			  `;
			  
			  
			 const changeFindPwDiv = document.querySelector('#changeFindPwDiv');

			 changeFindPwDiv.innerHTML = ''; /*내용을 지우는것*/


			 changeFindPwDiv.insertAdjacentHTML('beforeend', str);
		},
		error: function() {
			alert('실패');
		}
	});
//ajax end

	
	
	
	
});















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
	//teacherTell
	//const teacherTells = document.querySelector('#teacherTell').value;
	
	console.log(teacherName);
	console.log(teacherId);
	//console.log(teacherTells);
	
	//셀렉트 쿼리
	
	//아이디 + 이름 + 전화번호가 동시에 맞아야 문자 보내야지..번호만 넣으면 보내지잖아..
	/*if(){
		
	}
	else{
		
	}*/
	
	
    let teacherTell = $('#teacherTell').val();
    Swal.fire('인증번호 발송 완료!')


    $.ajax({
        type: "GET",
        url: "/sms/sendSMS",
        data: {
            "teacherTell" : teacherTell, "teacherName":teacherName , "teacherId":teacherId
        },
        success: function(res){
			
			alert(res);
	
            $('#checkBtn').click(function(){
                if($.trim(res) ==$('#inputCertifiedNumber').val()){
                    Swal.fire(
                        '인증성공!',
                        '휴대폰 인증이 정상적으로 완료되었습니다.',
                        'success'
                    )
                    
                     $.ajax({
                        type: "post",
                        url: "/teacher/updateTemporaryPw",
                        data: {
                            "teacherPw" : $('#inputCertifiedNumber').val(),"teacherTell" : teacherTell
                        },
			        	success: function(res1){
							
							
								
	                    	document.location.href="/teacher/loginPage"; 
						},
						error: function() {
							alert('실패');
						}
	                      
	                        
	                    })
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: '인증오류',
                        text: '인증번호가 올바르지 않습니다!',
                       // footer: '<a href="/teacher/findLoginPage">다시 인증하기</a>'
                    })
                }
            })


        }
    })
});