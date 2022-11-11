
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