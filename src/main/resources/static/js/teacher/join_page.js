
//////////////////////////변수///////////////////////////

const inputTeacherId = document.querySelector('#inputTeacherId');
const doubleYesModal = new bootstrap.Modal('#idDouble_Yes');
const doubleNoModal = new bootstrap.Modal('#idDouble_No');
const isDoubleCheckModal = new bootstrap.Modal('#isDoubleCheck');

const idDouble_Yes_modal = document.querySelector('#idDouble_Yes');
const idDouble_No_modal = document.querySelector('#idDouble_No');
const isDoubleCheck_modal = document.querySelector('#isDoubleCheck');


const inputTeacherEmail = document.querySelector('#inputTeacherEmail');
const middleEmail = document.querySelector('#middleEmail');
const endEmail = document.querySelector('#endEmail');
const totalEmail = document.querySelector('#totalEmail');



//중복확인 수행 여부 TAG
const isDoubleChkTag =  document.querySelector('#isDoubleChk');


//////////////////////////함수////////////////////////////

//아이디 중복 검사 여부 확인 후 회원가입 진행
function isDoubleChk (){
	
	//회원가입 진행 폼태그
	const joinForm = document.querySelector('#joinForm');
	
	//중복검사를 하지 않았다면
	if(isDoubleChkTag.value=="unChk"){
		
		isDoubleCheckModal.show();
		return;
	}
	
	joinForm.submit();
}



//아이디 중복 검사 결과
function idDoubleCheck (){
	
	const inputTeacherIdValue = inputTeacherId.value;
	 
	if(inputTeacherIdValue==''){
		// 요소의 placeholder 속성에 특정값을 설정한다.
    	inputTeacherId.setAttribute("placeholder", "*ID를 입력하세요.");
		// 커서를 아이디 인풋태그로 이동한다.
	    inputTeacherId.focus();
	    return;
	}	
	
	
	//ajax start
	$.ajax({
	   url: '/teacher/idDoubleCheckAjax', //요청경로
	    type: 'post',
	    data:{'teacherId':inputTeacherIdValue}, //필요한 데이터
	    success: function(result) {
		 
			//중복아이디가 있을 경우
			if(result.teacherId != null){
				doubleYesModal.show();
			}
			//중복 아이디가 없을 경우
			else{
				//모달창 띄우는 소스
				doubleNoModal.show();
			}
			
	    },
	    error: function(){
	       alert('실패');
	    }
	});
	//ajax end
		
	//중복검사 수행 확인
	isDoubleChkTag.setAttribute("value", "Chk");
	
}

function resetInput(event){
	inputTeacherId.value='';
	inputTeacherId.focus();
}

function isDoubleChkChange(event){
	
	isDoubleChkTag.setAttribute("value", "unChk");
}


//온키업 밑에 글자 들어갈 스판태그 하고 아이디 주기 
//비밀번호 확인
function passChk(){
   
      if($("#pwDoubleCheck").val() == $("#inputTeacherPw").val()){
         $(".successPwChk").text("비밀번호가 일치합니다.");
         $(".successPwChk").css("color", "green");
      }else{
         $(".successPwChk").text("비밀번호가 일치하지 않습니다.");
         $(".successPwChk").css("color", "red");
      }

}

////////////////////////////이벤트///////////////
//중복 모달이 닫히면 실행되는 이벤트
idDouble_Yes_modal.addEventListener('hidden.bs.modal', resetInput);


inputTeacherId.addEventListener('keydown', isDoubleChkChange)

//이메일 입력시
endEmail.addEventListener('change', function getTotalEmail() {
	
	const emailSelectDiv = document.querySelector('#emailSelect');
	
	totalEmail.value = inputTeacherEmail.value + middleEmail.innerText + endEmail.value;

	let totalEmailAddr = '';
	//직접 선택을 선택하면
	if(endEmail.value == 'selfEmail'){
		
		emailSelectDiv.innerHTML='';
		
		let str = '';
		str = '<input type="text" class="form-control" id="newEndEmail" value="" >';
		
		emailSelectDiv.insertAdjacentHTML('afterbegin', str);
		
		
	}
	
		getNewEmail();
	
	
	
});


function getNewEmail (){
	
	const newInputEmail = document.querySelector('#newEndEmail');
		
	alert(newInputEmail.value);
	
	
	totalEmail.value = inputTeacherEmail.value + middleEmail.innerText + newEndEmail.value;
	
}

