document.getElementById("nonButton").click();


 setTimeout('move_page()', 2800); //2초후에 move_page함수실행

  function move_page(){
  location.href='/teacher/selectInfo';  // 페이지 이동
  }





function fun(){
	
/*	Swal.fire({
	   title: '프로필 이미지가 변경되었습니다.',
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
	   	
	   		location.href=`/teacher/selectInfo`;
	      
	   }
	});*/
	
	
	const Toast = Swal.mixin({
	    toast: true,
	    position: 'center-center',
	    showConfirmButton: false,
	    timer: 2500,
	    timerProgressBar: true,
	    didOpen: (toast) => {
	       /* toast.addEventListener('mouseenter', Swal.stopTimer)
	        toast.addEventListener('mouseleave', Swal.resumeTimer)*/
	    }
	})
	 
	Toast.fire({
	    icon: 'success',
	    title: '프로필 이미지가 변경되었습니다.'
	})
		
	
	
	
}