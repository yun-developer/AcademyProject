//////////////////////////////////////////////////////////////////////////////////////////////////
///-------------------------------스크립트 실행과 동시에 변수 생성----------------------------///
////////////////////////////////////////////////////////////////////////////////////////////////


// 과목 목록에서 제목줄 체크박스(전체 체크박스)
const checkAll = document.querySelector('#checkAll');


// 제목줄을 제외한 모든 체크박스 (cartCode 데이터 있음)
const chks = document.querySelectorAll('.chk');



function subjectDelete(selectedTag){

	const subjectForm = document.querySelector('#subjectForm')
   alert("1");
	//체크한 cartCode 다 들고 온다. cartCode는 체크박스안에 들어있다. 전체 체크박스에서 체크된 것을 들고 오면 됨
	const checkedChks = document.querySelectorAll('.chk:checked'); // -> 내가 선택한 체크박스들(여러개) // 나는 클래스가 .chk인 애를 선택할 꺼야 클래스호출은 .을 써주기
	
	if(checkedChks.length == 0){
		alert('먼저 상품을 선택하세요');
		return ;
	}
	
	let cartCodes = '';
	
	for(const checkedChk of checkedChks){ /*내가 체크한 체크박스들의 cartcode를 확인하는 것*/
		cartCodes = cartCodes + checkedChk.value + ',';
	}	// -> cartCodes에는 데이터가 "CART_001,CART_002,...."

	deleteForm.querySelector('input').value = cartCodes;  // cartCode셋팅
	
	if(selectedTag.innerText == '선택삭제'){// 내가 선택한 innertext - 내가 선택한 버튼태그안에 있는 글자 , 중복 최소한 한 것(속성값 바꾼 것)
		deleteForm.action = '/cart/deleteCart';
	}
	else{
		deleteForm.action = '/buy/buyInfo';
	}	
	
	deleteForm.submit();
	
}