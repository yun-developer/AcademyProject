
const BoardNumInput = document.querySelector("#updateButton");
const BoardNum = parseInt(BoardNumInput.value);


document.getElementById("updateButton").click();


 setTimeout('move_page()', 2800); //2초후에 move_page함수실행
/*
  function move_page(){
  location.href='/board/noticeDetail';  // 페이지 이동
  }*/


  function move_page(){
  location.href='/board/noticeDetail?boardNum='+BoardNum;  // 페이지 이동
  }
	




function imgloding(boardNum){
	alert(boardNum);
	

	
	
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
	 //alert(boardNum);
	Toast.fire({
	    icon: 'success',
	    title: '이미지가 업로드 중입니다.'
	})
		
	
}