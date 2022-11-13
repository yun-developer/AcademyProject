
//학생등록 버튼 클릭 시 보여지는 모달에서
//수강료를 벼경하면 화폐 단위로 바꾸어지는 함수
function setformatCurrency(){
	//천단위 구분기호를 적용할 인풋태그의 값(value)을 가져온다.
	let money = document.querySelector('#money').value;//￦300,000,000
	// /,/gi는 쉼표를 다 지워준다. replace의 문제는 ₩, ￦의 구별이 달라서 두개 다 빈문자로 해줘야한다.
	let imsiMoney =  money.replace(/,/gi, '').replace('₩', '').replace('￦', '');
	
	// 만약에 임시데이터가 빈문자라면 머니를 0으로 주겠다. 0을 숫자로 바꾸는건 문제가 없다.
	if(imsiMoney == ''){
		imsiMoney = 0;
	}    
	
	money = parseInt(imsiMoney);//300000
	money = '￦' + money.toLocaleString();
	
	document.querySelector('#money').value = money;
}




////////////////함수 1///////////////////

// 학급 편성 리스트에서 삭제버튼 클릭 시

function lessonInfoDeleteAjax(){

	const LessonInfoForm = document.querySelector('#deleteLessonInfoForm')
   
	//체크한 Code 다 들고 온다. Code는 체크박스안에 들어있다. 전체 체크박스에서 체크된 것을 들고 오면 됨
	const checkedChks = document.querySelectorAll('.chk:checked'); // -> 내가 선택한 체크박스들(여러개) // 나는 클래스가 .chk인 애를 선택할 꺼야 클래스호출은 .을 써주기
	alert(checkedChks);
	if(checkedChks.length == 0){
		 const modal = new bootstrap.Modal('#deleteModal');  // #myModal -> 모달창의 id를 가지고 오는 것이다.
	     modal.show();
		return ;
	}
	// 문자열로 만들어서 던져 줌
	let lessonInfoCodes = '';
	for(const checkedChk of checkedChks){
		lessonInfoCodes = lessonInfoCodes + checkedChk.value + ',';
	}	

	LessonInfoForm.querySelector('input').value = lessonInfoCodes;  // cartCode셋팅
	
	
	LessonInfoForm.submit();
	
}


//체크박스 하나 해제되면 제목줄 체크박스 해제
for(const chk of chks){
	chk.addEventListener('click',chk=>{
		//아래에 있는 전체 체크박스의 수 
		const cnt = chks.length;
		//아래에 있는 전체 체크박스 중 체크된 수
		const checkedCnt = document.querySelectorAll('.chk:checked').length;
		
		//수가 같으면 제목 체크박스도 체크
		if(cnt ==checkedCnt ){
			document.querySelector('#checkAll').checked = true;
		}
		//수가 다르면 제목 체크박스도 해체
		else{
			document.querySelector('#checkAll').checked = false;
		}
	})
}