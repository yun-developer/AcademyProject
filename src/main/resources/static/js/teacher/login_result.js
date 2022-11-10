/////////////////////////////////변수//////////////////

const role = document.querySelector('#alertButton').value;

///////////////////////////////////////////////////////////


document.getElementById("alertButton").click();

function loginResult(){
	
	
	if(role=="[ROLE_ANONYMOUS]"){
		
		Swal.fire({
		   title:'회원이 아닙니다.',
		   text: '',
		   icon: 'success',
		   
		   showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
		   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
		   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
		   confirmButtonText: '승인', // confirm 버튼 텍스트 지정
		   cancelButtonText: '취소', // cancel 버튼 텍스트 지정
		   
		   reverseButtons: true, // 버튼 순서 거꾸로
		   
		}).then(result => {
		   // 만약 Promise리턴을 받으면,
		   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
		   	
		   		location.href=`/teacher/loginPage`;
		      
		   }
		});
		
	}
	else {
		
		let aaa = '';
		
		if(role=="[ROLE_TEACHER]"){
			aaa = '승인 교사'
		}
		else if(role=="[ROLE_UNAPPROVED]"){
			aaa= '미승인 교사'
		}
		else{
			aaa= '관리자'
		}
		
		
		Swal.fire({
		   title: aaa+'입니다.',
		   text: '',
		   icon: 'success',
		   
		   showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
		   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
		   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
		   confirmButtonText: '승인', // confirm 버튼 텍스트 지정
		   cancelButtonText: '취소', // cancel 버튼 텍스트 지정
		   
		   reverseButtons: true, // 버튼 순서 거꾸로
		   
		}).then(result => {
		   // 만약 Promise리턴을 받으면,
		   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
		   	
		   		location.href=`/lesson/main`;
		      
		   }
		});
	}

	
	
	
}