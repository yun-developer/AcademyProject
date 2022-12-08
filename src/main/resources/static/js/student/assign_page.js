/////////////////////////변수////////////////////////////////////
/* var window = window.open(url, windowName, [windowFeatures]);*/
 
//팝업 url 주소
let popUrl = '';

//제목줄 체크박스(전체)
const checkAll = document.querySelector('#checkAll');

//장바구니 목록의 모든 체크박스 (제목줄 제외)
const chkBoxes = document.querySelectorAll('.chk');

//









/////////////////함수/////////////////////////////////////////////////////
//팝업창 열기
function openPopup(popUrl){
	
	let popOption = "width = 1100px, height=800px, top=100px, left=300px, scrollbars=yes";
	
	window.open(popUrl,"popupTest",popOption);
}

//학생이름 선택시
function goPopup(studentCode){
	
	popUrl = `/stu/popup?studentCode=${studentCode}`;
	
	openPopup(popUrl);
	
}

//체크박스 하나만 선택가능
function checkOnlyOne(element) {
  
  const checkboxes 
      = document.querySelectorAll(".chk");
  
  checkboxes.forEach((cb) => {
    cb.checked = false;
  })
  
  element.checked = true;
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
			 
			//Swal.fire('선택 사항 없음.', '선택된 학생이 없습니다.', 'error');
			
			Swal.fire({
				title: '선택 사항 없음',
				text: '선택된 학생이 없습니다',
				icon: 'warning',
				showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
				confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
				cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
				confirmButtonText: '확인', // confirm 버튼 텍스트 지정
				cancelButtonText: '취소', // cancel 버튼 텍스트 지정

				reverseButtons: false, // 버튼 순서 거꾸로

				})
			
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

//학급이동 버튼 클릭시 
$('.updatePopup').on("click",function(e){
		
		e.preventDefault();
		
		//체크가 된 체크박스들 가져오기
		const checkedBoxes = document.querySelectorAll('.chk:checked');
		const checkedCnt = checkedBoxes.length;
		
		//선택된 체크박스가 없을 때
		if(checkedCnt == 0){
			 
			//Swal.fire('선택 사항 없음.', '선택된 학생이 없습니다.', 'error');
			
			Swal.fire({
				title: '선택 사항 없음',
				text: '선택된 학생이 없습니다',
				icon: 'warning',
				showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
				confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
				cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
				confirmButtonText: '확인', // confirm 버튼 텍스트 지정
				cancelButtonText: '취소', // cancel 버튼 텍스트 지정

				reverseButtons: false, // 버튼 순서 거꾸로

				})
			
			
			
			return ;
			//↑값을 가져오거나 함수 종료(밑으로 더이상 실행 안 함)
		}	
		
		//체크한 학생의 studentCode
		let stuCode = '';
		let lessonInfoCode= '';
		for (const checkBox of checkedBoxes){
			
			stuCode = checkBox.value;
			lessonInfoCode = checkBox.id;
			
			if(lessonInfoCode == ''){
				Swal.fire('수강 정보 없음.', '해당 학생은 수강중인 학급이 없습니다.', 'error');
				return ;
			}
			
		}
		
		popUrl = `/stu/updatePopup?studentCode=${stuCode}`;
		openPopup(popUrl);
		
});



//페이징 라이브러리
var box = paginator({
    table: document.getElementById("table_box_bootstrap").getElementsByTagName("table")[0],
    box_mode: "list",
});
box.className = "box";
document.getElementById("table_box_bootstrap").appendChild(box);





