 ///////////////////////////////변수///////////////
 

 const buttons = document.querySelectorAll('.PromptStart');
 let updateName =''
 
 /////////////////////////////////함수/////////////////////////////////////
 
 function getText(button){
	
	const buttonValue = button.value;
 	
 	updateName = buttonValue;
 
 }
 function getPw(button){
	
	const buttonValue1 = button.value;
 	
 	updateName = buttonValue1;
 
 }
 
 
 
 
 
 
 
 /////////////////////////////////이벤트////////////////////////////////
  
  
  /*개인정보 변경*/
  $(".PromptStart").click(function () {
    
    (async () => {
		
        const { value: getInfo} = await Swal.fire({
			icon: 'info',
            title: updateName + ' 정보를 수정합니다.',
            text: '',
            input: 'text',
            inputPlaceholder: '수정할 '+ updateName +' 정보를 입력..'
        })

        // 이후 처리되는 내용.
        if (getInfo) {
           /* Swal.fire(`: ${getInfo}`)*/
            
            
            Swal.fire({
			   title: '입력한 정보로 수정하시겠습니까?',
			   text: '',
			   icon: 'warning',
			   
			   showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
			   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
			   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
			   confirmButtonText: '승인', // confirm 버튼 텍스트 지정
			   cancelButtonText: '취소', // cancel 버튼 텍스트 지정
			   
			   reverseButtons: true, // 버튼 순서 거꾸로
			   
			}).then(result => {
			   // 만약 Promise리턴을 받으면,
			   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
			   	  	
			   	  	
			   	  	if(updateName=='이름'){
				         location.href=`/teacher/updateInfo?teacherName=${getInfo}`;
				         
				          /*Swal.fire('승인이 완료되었습니다.', '화끈하시네요~!', 'success');*/
					}
		            if(updateName=='연락처'){
				         location.href=`/teacher/updateInfo?teacherTell=${getInfo}`;
					}
		            if(updateName=='이메일'){
				         location.href=`/teacher/updateInfo?teacherEmail=${getInfo}`;
					}
			     
			   }
			});
            
            
            
        }
    })()
  });
  
  
  /*비밀번호 변경*/
  $(".pwPromptStart").click(function () {
    
    (async () => {
		
        const { value: getInfo} = await Swal.fire({
			icon: 'warning',
            title: updateName + '를 변경합니다.',
            text: '',
            input: 'text',
            inputPlaceholder: '변경할 '+ updateName +'를 입력..'
        })

        // 이후 처리되는 내용.
        if (getInfo) {
           /* Swal.fire(`: ${getInfo}`)*/
            
            
            Swal.fire({
			   title: '입력한 정보로 수정하시겠습니까?',
			   text: '',
			   icon: 'warning',
			   
			   showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
			   confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
			   cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
			   confirmButtonText: '승인', // confirm 버튼 텍스트 지정
			   cancelButtonText: '취소', // cancel 버튼 텍스트 지정
			   
			   reverseButtons: true, // 버튼 순서 거꾸로
			   
			}).then(result => {
			   // 만약 Promise리턴을 받으면,
			   if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
			   	  	
			   	  	
					location.href=`/teacher/updateInfo?teacherEmail=${getInfo}`;
					
			     
			   }
			});
            
            
            
        }
    })()
  });
 

  $("#leaveConfirmStart").click(function () {
    Swal.fire({
      title: '정말로 탈퇴 하시겠습니까?',
      text: "다시 되돌릴 수 없습니다. 신중하세요.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '승인',
      cancelButtonText: '취소',
      reverseButtons: true, // 버튼 순서 거꾸로
      
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '승인이 완료되었습니다.',
          '화끈하시네요~!',
          'success'
        )
     	  /*location.href=`/teacher/leave`;*/
      }
    })
  });
 
 
 
 
 
 
 
 