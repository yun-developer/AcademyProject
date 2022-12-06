
const BoardNumInput = document.querySelector("#freeButton");
const BoardNum = parseInt(BoardNumInput.value);


document.getElementById("freeButton").click();


 setTimeout('move_page()', 2800); //2초후에 move_page함수실행
/*
  function move_page(){
  location.href='/board/noticeDetail';  // 페이지 이동
  }*/


  function move_page(){
  location.href='/board/freeDetail?boardNum='+BoardNum;  // 페이지 이동
  }
	




function imgloding(boardNum){

	
// 팡
	
	
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