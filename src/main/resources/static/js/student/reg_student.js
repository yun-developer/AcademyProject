//회원가입에서 Search버튼 클릭시 주소검색 진행
function searchAddr() {
	new daum.Postcode({
        oncomplete: function(data) {
			const roadAddr = data.roadAddress;
			document.querySelector('#addr').value = roadAddr;  // 도로명 주소 변수
			// 커서를 상세주소 필드로 이동한다.
			document.querySelector("#addrDetail").focus();
        }
    }).open();
}





(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
	regBtn.addEventListener('click', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
	 //밸리데이션 체크했음으로 상태바꿈]
      form.classList.add('was-validated')
      }
      
      else {
		regStudent();
	}
		
    }, false)
  })
})()



function regStudent() {

	Swal.fire({
         title:'학생이 등록되었습니다',
         icon: 'success',
         
         showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
         confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
         cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
         confirmButtonText: '확인', // confirm 버튼 텍스트 지정
         cancelButtonText: '취소', // cancel 버튼 텍스트 지정
         
         reverseButtons: true, // 버튼 순서 거꾸로
         
      }).then(result => {
         if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
			const regForm = document.querySelector('#regStuForm');
			regForm.submit();
         }
      });
}

