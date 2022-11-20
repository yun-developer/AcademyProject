
//////////////////////////변수///////////////////////////
//Id 중복체크
const inputTeacherId = document.querySelector('#inputTeacherId');
/*const doubleYesModal = new bootstrap.Modal('#idDouble_Yes');
const doubleNoModal = new bootstrap.Modal('#idDouble_No');
const isDoubleCheckModal = new bootstrap.Modal('#isDoubleCheck');*/

/*const idDouble_Yes_modal = document.querySelector('#idDouble_Yes');
const idDouble_No_modal = document.querySelector('#idDouble_No');
const isDoubleCheck_modal = document.querySelector('#isDoubleCheck');*/

//전화번호 중복체크
const inputTeacherTell = document.querySelector('#inputTeacherTell');






//이메일 입력
const inputTeacherEmail = document.querySelector('#inputTeacherEmail');
const middleEmail = document.querySelector('#middleEmail');
const endEmail = document.querySelector('#endEmail');
const totalEmail = document.querySelector('#totalEmail');


//아이디 중복확인 수행 여부 TAG
const isDoubleChkTag =  document.querySelector('#isDoubleChk');
//연락처 중복확인 수행 여부 TAG
const isTellDoubleChkTag = document.querySelector('#isTellDoubleChk')

//////////////////////////함수////////////////////////////

//아이디 중복 검사 여부 확인 후 회원가입 진행
function isDoubleChk (){
	
	//회원가입 진행 폼태그
	const joinForm = document.querySelector('#joinForm');
	
	//id 중복검사를 하지 않았다면
	if(isDoubleChkTag.value=="unChk"){
		
		 Swal.fire({
                    icon: 'warning',
                    title: '가입 불가',
                    text: 'ID 중복 검사를 실행해주세요!',
                });
		return;
	}
	
	//전화번호 중복검사를 하지 않았다면
	if(isTellDoubleChkTag.value=="unChk"){
		
		 Swal.fire({
                    icon: 'warning',
                    title: '가입 불가',
                    text: '전화번호 중복 검사를 실행해주세요!',
                });
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
				Swal.fire({
                    icon: 'error',
                    title: '가입 불가',
                    text: '사용 불가능한 아이디입니다',
                });
                	inputTeacherId.value='';
					inputTeacherId.focus();
			}
			//중복 아이디가 없을 경우
			else{
			 	 Swal.fire({
                    icon: 'success',
                    title: '가입 가능',
                    text: '사용 가능한 아이디입니다',
                });
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


//전화번호 중복 검사 결과 
function isTellDoubleCheck(){
	
	const inputTeacherTellValue = inputTeacherTell.value;
	
	if (inputTeacherTellValue ==''){
		// 요소의 placeholder 속성에 특정값을 설정한다.
    	inputTeacherTell.setAttribute("placeholder", "*전화번호를 입력하세요.");
		// 커서를 전화번호 인풋태그로 이동한다.
	    inputTeacherTell.focus();
	    return;
	}
	
	//ajax start
	$.ajax({
	   url: '/teacher/tellDoubleCheckAjax', //요청경로
	    type: 'post',
	    data:{'teacherTell':inputTeacherTellValue}, //필요한 데이터
	    success: function(result) {
		 
			//중복아이디가 있을 경우
			if(result.teacherTell != null){
				Swal.fire({
                    icon: 'error',
                    title: '가입 불가',
                    text: '이 전화번호로 가입된 회원이 있습니다',
                });
                	inputTeacherTell.value='';
					inputTeacherTell.focus();
                
                
			}
			//중복 아이디가 없을 경우
			else{
			
				  Swal.fire({
                    icon: 'success',
                    title: '가입 가능',
                    text: '이 전화번호로 가입된 회원이 없습니다',
                });
			}
	    },
	    error: function(){
	       alert('실패');
	    }
	});
	//ajax end
	
	//중복검사 수행 확인
	isTellDoubleChkTag.setAttribute("value", "Chk");
	
}




function resetInput(event){
	inputTeacherId.value='';
	inputTeacherId.focus();
}

function isDoubleChkChange(event){

	isDoubleChkTag.setAttribute("value", "unChk");
}
function tellDoubleChkChange(event){

	isTellDoubleChkTag.setAttribute("value", "unChk");
}



//온키업 밑에 글자 들어갈 스판태그 하고 아이디 주기 
//입력한 비밀번호가 맞는지 재확인
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

//ID 입력시 중복체크 할수 있도록 변경
inputTeacherId.addEventListener('keydown', isDoubleChkChange)
//연락처 입력시 중복체크 할 수 있도록 변경
inputTeacherTell.addEventListener('keydown', tellDoubleChkChange)

//이메일 입력시
endEmail.addEventListener('change', function getTotalEmail() {
	
	const emailSelectDiv = document.querySelector('#emailSelect');
	
	totalEmail.value = inputTeacherEmail.value + middleEmail.innerText + endEmail.value;
	
	//직접 선택을 선택하면
	if(endEmail.value == 'selfEmail'){
		
		emailSelectDiv.innerHTML='';
		
		let str = '';
		str = '<input type="text" class="form-control" id="newEndEmail" value="" >';
		
		emailSelectDiv.insertAdjacentHTML('afterbegin', str);
	}
	
});

$(document).on("click", "#newEndEmail", function() {
	
	$(document).on("keyup", "#newEndEmail", function() {
	
		const newEndEmaildiv = document.querySelector('#newEndEmail');
		totalEmail.value = inputTeacherEmail.value + middleEmail.innerText + newEndEmaildiv.value;
	});
	
});
