document.getElementById("nonButton").click();

 setTimeout('move_page()', 2800); //2초후에 move_page함수실행

  function move_page(){
  location.href='/teacher/selectInfo';  // 페이지 이동
  }


function fun(){
	
	const Toast = Swal.mixin({
	    toast: true,
	    position: 'center-center',
	    showConfirmButton: false,
	    timer: 2500,
	    timerProgressBar: true,
	    didOpen: (toast) => {
	    }
	})
	 
	Toast.fire({
	    icon: 'success',
	    title: '프로필 이미지가 변경되었습니다.'
	})
	
}