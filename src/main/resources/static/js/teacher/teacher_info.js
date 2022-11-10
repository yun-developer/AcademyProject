 ///////////////////////////////변수///////////////
 
 const nameText = document.querySelector('#nameText').innerText;
 const tellText = document.querySelector('#tellText').innerText;
 const emailText = document.querySelector('#emailText').innerText;

 const buttons = document.querySelectorAll('.PromptStart');
 
 
 
 
 
 
 
 
 /////////////////////////////////이벤트////////////////////////////////
  
  
  
  $(".PromptStart").click(function () {
    
    (async () => {
		
		let updateName =''; 
		
		
        const { value: getInfo} = await Swal.fire({
			icon: 'info',
            title: '연락처 정보를 수정합니다.',
            text: '',
            input: 'text',
            inputPlaceholder: '수정할 전화번호를 입력..'
        })

        // 이후 처리되는 내용.
        if (getInfo) {
            Swal.fire(`: ${getInfo}`)
            
            
        }
    })()
  });
  