////////////////함수 ///////////////////
const updateAmountBtn = document.querySelector('#updateAmountBtn');

// 학급 편성 등록 시 교실장소, 수업시간 겹치지 않게 조회
function selectUseCheck(){
	
	const lessonDayCode = document.querySelector('#lessonDayCode option:checked').value;
	//  lessonDayCode(변수) = id가 lessonDayCode(selectBox id)인 option:checked -> Css문법처럼 그냥 써준다.
	
	
	//ajax start
	$.ajax({
		url: '/lesson/selectClassUseAjax', //요청경로
		type: 'post', // 무조건 post, ResponseBody를 써줘야한다.
		data: {'lessonDayCode':lessonDayCode}, //필요한 데이터
		success: function( result) {
			
			//option을 다 지우는 문법
			$('#searchLessonTime').empty();
			
			// option을 다시 그려준다.
			str = ''
			str += '<option value="">선택</option>'; 
			// 요일을 바꾸면 쿼리가 실행되면서 그 결과 값은 result로 들어온다.
			// result를 for문 돌려 하나하나 useCheck라고 하겟다.
			// 그 값이 나올 수 있도록 그림을 그려준다. result가 있는 만큼 option을 그려준다.
			let startTime = 18;
			
			for(const useCheck of result){
				str += `<option value="${startTime}">${useCheck}</option>`;
				startTime++;
					
			}
			// 그렸던것을 str에 넣어놨으니 다시 html로 보내주는 방법
			$('#searchLessonTime').append(str);
		
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
}
	
	
// 과목 구분에 해당 과목을 누르면 교사 명에 담당 과목 선생님이름 조회 
function selectSubjectCheck(){
	const subjectCode = document.querySelector('#subjectCode option:checked').value;
	

	//ajax start
	$.ajax({
		url: '/lesson/selectSubjectChangeAjax', //요청경로
		type: 'post', // 무조건 post, ResponseBody를 써줘야한다.
		data: {'subjectCode':subjectCode}, //필요한 데이터
		success: function(result) {
		
			//option을 다 지우는 문법
			$('#teacherName').empty();
			
			// option을 다시 그려준다.
			str = ''
			str += '<option value="">전체</option>'; 
			
			
			for(const teacher of result){
				str += `<option value="${teacher.teacherCode}">${teacher.teacherVO.teacherName}</option>`;
				
					
			}
			// 그렸던것을 str에 넣어놨으니 다시 html로 보내주는 방법
			$('#teacherName').append(str);
		
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
}
	
	



////////////////함수 3///////////////////
// 학급등록 페이지에서 신규버튼 클릭 시 모달창
function goRegLessonInfoAjax(){
	$('#aa').modal('show');
	
}








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
	
	
	//체크한 체크박스가 없으면 뜨는 알림창
	if(checkedChks.length == 0){
	     Swal.fire({
		  title: '삭제할 학급을 선택하세요!',
		  icon: 'warning',
		  confirmButtonText: '확인'
		})
		return ;
	}
	
	// 체크한 체크박스가 있으면 뜨는 알림창
	else{
		Swal.fire({
		   title: '정말 삭제하시겠습니까?',
		   icon: 'warning',
		   
		   showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
		   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
		   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
		   confirmButtonText: '확인', // confirm 버튼 텍스트 지정
		   cancelButtonText: '취소', // cancel 버튼 텍스트 지정
		   
		}).then(result => {
		   // 만약 Promise리턴을 받으면,
		   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
			
			//삭제 완료 alert 시작
			Swal.fire({
				title: '학급 삭제 완료',
				text: '해당 학급이 삭제되었습니다.',
				icon: 'success',

				showCancelButton: false, // cancel버튼 보이기. 기본은 원래 없음
				confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
				cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
				confirmButtonText: '확인', // confirm 버튼 텍스트 지정
				cancelButtonText: '취소', // cancel 버튼 텍스트 지정

				reverseButtons: false, // 버튼 순서 거꾸로

			}).then(result => {
				// 만약 Promise리턴을 받으면,
				if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면

				//문자열로 만들어서 던져 줌
				let lessonInfoCodes = '';
				for(const checkedChk of checkedChks){
					lessonInfoCodes = lessonInfoCodes + checkedChk.value + ',';
				}	
			
				LessonInfoForm.querySelector('input').value = lessonInfoCodes;  // cartCode셋팅
			
				LessonInfoForm.submit();

				}
			});
			//삭제 완료 alert 끝
			}
		});
	}
}	




//제목줄 체크박스
const checkAll = document.querySelector('#checkAll');

//제목줄을 제외한 모든 체크박스
const chks = document.querySelectorAll('.chk');


//체크박스 전체선택, 전체해제 이벤트
checkAll.addEventListener('click', function(){
	
	//제목줄에서 체크박스의 체크여부
	const isChecked = checkAll.checked; // true, false
	
	//모든 체크박스	
	const checkBoxes = document.querySelectorAll('.chk');	
	
	//제목줄 체크박스가 체크되었다면
	if(isChecked) {
		//모든 체크박스를 체크함. 클래스가 chk인 것 모두 가져옴
		
		for(const checkBox of checkBoxes) {
			checkBox.checked = true;
		}
	}		
	else {
		for(const checkBox of checkBoxes) {
			checkBox.checked = false;
		}
	}
});




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




//const selectBoxs = document.querySelectorAll('.selectBox');


//모달창에서 저장 버튼을 클릭하면 실행되는 함수
//수강료를 숫자 형태로 바꾼 후 submit 시킴.
function regLessonInfo(){
	
	//교실명
	const lessonRoomCode =document.querySelector('#lessonRoomCode'); 
	//요일
	const lessonDayCode =document.querySelector('#lessonDayCode'); 
	//시간
	const lessonTime =document.querySelector('#searchLessonTime'); 
	
	//각 셀렉트 박스에서 선택한 값
	let lessonRoomCodeVal = lessonRoomCode.options[lessonRoomCode.selectedIndex].value;
	let lessonDayCodeVal = lessonDayCode.options[lessonDayCode.selectedIndex].value;
	let lessonTimeVal = lessonTime.options[lessonTime.selectedIndex].value;
	
	

	

	
	//ajax start
	$.ajax({
		url: '/lesson/doubleCheckLessonAjax', //요청경로
		type: 'post', // 무조건 post, ResponseBody를 써줘야한다.
		data: {'lessonDayCode':lessonDayCodeVal, 'lessonRoomCode': lessonRoomCodeVal, 'lessonTime':lessonTimeVal}, //필요한 데이터
		success: function(result) {
		
			//중복이 되는 수업이 있을때
			if(result.lessonInfoCode != null){
				
				Swal.fire({
		  		title: '중복되었습니다! 다시 선택바랍니다.',
		  		icon: 'error',
		 		 confirmButtonText: '확인'
				})
				return ;
			}	
			else {
				
				
				document.querySelector('#regLessonForm').submit();
			}
		
				}
			//ajax end
		});	

	
	
	//---수강료를 숫자로 바꾼다.---
	//천단위 구분기호를 적용할 인풋태그의 값(value)을 가져온다.
	let money = document.querySelector('#money').value;//￦1,000
	// /,/gi는 쉼표를 다 지워준다. replace의 문제는 ₩, ￦의 구별이 달라서 두개 다 빈문자로 해줘야한다.
	let imsiMoney =  money.replace(/,/gi, '').replace('₩', '').replace('￦', ''); //1000

	document.querySelector('#money').value = imsiMoney;
	
	let maxStudent = document.querySelector('#maxStudent');
	

	
	
}


// 모달에서 벨리데이션 처리하는 기능
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    updateAmountBtn.addEventListener('click', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      
     	 form.classList.add('was-validated')
      }
	 else {
		regLessonInfo()
	}
		
    }, false)
  })
})()


//페이징 라이브러리
var box = paginator({
    table: document.getElementById("table_box_bootstrap").getElementsByTagName("table")[0],
    box_mode: "list",
});
box.className = "box";
document.getElementById("table_box_bootstrap").appendChild(box);

