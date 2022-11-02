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



