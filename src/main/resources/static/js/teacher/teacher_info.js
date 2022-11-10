 ///////////////////////////////변수///////////////
 

 const buttons = document.querySelectorAll('.PromptStart');
 let updateName =''
 
 /////////////////////////////////함수/////////////////////////////////////
 
 function getText(button){
	
	const buttonValue = button.value;
 	
 	updateName = buttonValue;
 
 }
 
 
 
 
 
 
 
 /////////////////////////////////이벤트////////////////////////////////
  
  
  
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
    })()
  });
 
 
 
 
 
 
 
 
 
 