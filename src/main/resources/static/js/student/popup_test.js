/////////////////////////변수////////////////////////////////////
/* var window = window.open(url, windowName, [windowFeatures]);*/
 
//팝업 url 주소
let popUrl = '';

//제목줄 체크박스(전체)
const checkAll = document.querySelector('#checkAll');

//장바구니 목록의 모든 체크박스 (제목줄 제외)
const chkBoxes = document.querySelectorAll('.chk');



/////////////////함수/////////////////////////////////////////////////////
function openPopup(popUrl){
	
	let popOption = "width = 1100px, height=800px, top=300px, left=300px, scrollbars=yes";
	
	window.open(popUrl,"popupTest",popOption);
}

function goPopup(studentCode){
	
	popUrl = `/stu/popup?studentCode=${studentCode}`;
	
	openPopup(popUrl);
	
}



///////////////////////////////////////이벤트///////////////////////////////

//학급배정 버튼 클릭시 
$('.popup').on("click",function(e){
		
		e.preventDefault();
		
		//체크가 된 체크박스들 가져오기
		const checkedBoxes = document.querySelectorAll('.chk:checked');
		const checkedCnt = checkedBoxes.length;
		
		//선택된 체크박스가 없을 때
		if(checkedCnt == 0){
			 
			Swal.fire('선택 사항 없음.', '선택된 학생이 없습니다.', 'error');
			return ;
			//↑값을 가져오거나 함수 종료(밑으로 더이상 실행 안 함)
		}	
		
		//체크한 학생의 studentCode
		let stuCode = '';
		for (const checkBox of checkedBoxes){
			
			stuCode = checkBox.value;
			
		}
		
		
		
		
		popUrl = `/stu/popup?studentCode=${stuCode}`;
		openPopup(popUrl);
		
});





