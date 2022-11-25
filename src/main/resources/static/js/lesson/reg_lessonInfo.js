////////////////함수 ///////////////////
// 교실등록 페이지에서 신규버튼 클릭 시 모달창
function goRegLessonRoomAjax(){
	
	$('#bb').modal('show');


}	

// 학급 편성 등록 시 교실장소, 수업시간 겹치지 않게 조회
function selectUseCheck(){
	const lessonDayCode = document.querySelector('#lessonDayCode option:checked').value;
	//   = id가 lessonDayCode(selectBox id)인 option:checked -> Css문법처럼 그냥 써준다.
	//ajax start
	$.ajax({
		url: '/lesson/selectClassUseAjax', //요청경로
		type: 'post',
		data: {'lessonDayCode':lessonDayCode}, //필요한 데이터
		success: function(result) {
			//학년별 학생 수 차트를 그림
			$('#lessonTime').empty();
			
			str = ''
			str += '<option value="">선택</option>';
			for(const useCheck of result){
				str += `<option value="">${useCheck}</option>`;
					
			}
			
			$('#lessonTime').append(str);
			
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
}
	

	
	



////////////////함수 3///////////////////
// 교실등록 페이지에서 신규버튼 클릭 시 모달창
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
	
	if(checkedChks.length == 0){
		 const modal = new bootstrap.Modal('#bb'); 
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

//모달창에서 저장 버튼을 클릭하면 실행되는 함수
//수강료를 숫자 형태로 바꾼 후 submit 시킴.
function regLessonInfo(){
	//---수강료를 숫자로 바꾼다.---
	//천단위 구분기호를 적용할 인풋태그의 값(value)을 가져온다.
	let money = document.querySelector('#money').value;//￦1,000
	// /,/gi는 쉼표를 다 지워준다. replace의 문제는 ₩, ￦의 구별이 달라서 두개 다 빈문자로 해줘야한다.
	let imsiMoney =  money.replace(/,/gi, '').replace('₩', '').replace('￦', ''); //1000

	document.querySelector('#money').value = imsiMoney;
	
	let maxStudent = document.querySelector('#maxStudent')
	
	alert(maxStudent);
	
	//입력한 정원과 의자수를 비교
	//입력한 값이 의자수보다 크면 return ;
	//if(){
	//	return ;
	//}
	


}

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('click', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()