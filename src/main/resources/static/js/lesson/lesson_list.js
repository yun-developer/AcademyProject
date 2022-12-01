////////////////////////변수///////////////////////////////
//모달
const modal = new bootstrap.Modal('#exampleModal'); 
const modalContent = document.querySelector('#modalContent');
const modalTableContent = document.querySelector('#modalTableContent');

//담당강사
const teacherDiv = document.querySelector('#teacher');
//학급명
const lessonNameDiv = document.querySelector('#lessonName');
const attendDateDiv = document.querySelector('#attendDate');


//데이터 받아오기
putlessonInfo();


//모달 내용그리기
function getModal(lessonCode, lessonDate){
	let date1 = new Date(lessonDate); 
	
	date1.setMonth(date1.getMonth()+1)
	let eachDate = date1.getFullYear() +''+ date1.getMonth() +''+ date1.getDate();
	//ajax start
	$.ajax({
		url: '/lesson/stuListByLessonAjax', //요청경로
		type: 'post',
		data: {"lessonInfoCode": lessonCode, 'eachDate':eachDate}, //필요한 데이터
		success: function(result) {
			let str1 ='';
			
			if(result ==''){
				
				Swal.fire('수강생 없음', '현재 등록된 수강생이 없는 학급입니다.', 'warning');
				return;
			}
			else{
				
				for(const stu of result){
					str1 += `<tr>
					      <td scope="row"><a href="/stu/detail?studentCode=${stu.studentCode}">${stu.studentName}</a></td>
					      
					      <td>
					      	<div class="form-check form-check-inline">
							  <input class="form-check-input chk" name='${stu.studentCode}' type="radio"  id="${stu.studentCode}" value="Y">
							  <label class="form-check-label" for="inlineCheckbox1">출석</label>
							</div>
							<div class="form-check form-check-inline">
							  <input class="form-check-input chkNoAttend" name='${stu.studentCode}' type="radio" id="${stu.studentCode}" value="N">
							  <label class="form-check-label" for="inlineCheckbox2">결석</label>
							</div>
					      </td>
					    </tr>`
					
				
				}
				//담당 강사
				teacherDiv.innerText = result[0].studentLessonInfoList[0].lessonInfoVO.teacherVO.teacherName;
				lessonNameDiv.innerText = '[ ' 
											+ result[0].studentLessonInfoList[0].lessonInfoVO.subjectVO.subjectName
											+ '-'
											+ result[0].studentLessonInfoList[0].lessonInfoVO.stepVO.stepName
											+ '-'
											+ result[0].studentLessonInfoList[0].lessonInfoVO.year 
											+ ' ]';
				attendDateDiv.innerText = eachDate;

				
				modalTableContent.innerHTML = str1;
				modal.show();
				
			}
						
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
	
	
}



//오자마자 실행되는 함수
function putlessonInfo(){
	
	//ajax start
	$.ajax({
		url: '/lesson/lessonListAjax', //요청경로
		type: 'post',
		data: {}, //필요한 데이터
		success: function(result) {
			//학년별 학생 수 차트를 그림
			drawCalendar(result);
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
}

//캘린터 그리기
function drawCalendar(result){ 
	
		//data가 배열로 넘어오니까 빈 배열 만들고 
		calendar_data_arr = [];
		
		//클래스를 만들고 변수를 정해줌
		//하나씩 반복문으로 돌려서 위에서 만들어준 빈배열에 넣기 
		for(const lesson of result){
			calendar_data = new Object();
			calendar_data.title = lesson.title;
			calendar_data.start = lesson.start;
			calendar_data.end = lesson.end;
			calendar_data.id = lesson.id;
			calendar_data.color = lesson.color;
			calendar_data_arr.push(calendar_data);
	
		}
		console.log(calendar_data_arr);
		
		
		var options = {
                // Tool Bar 목록 document : https://fullcalendar.io/docs/toolbar
                headerToolbar: {
                    left: 'prevYear,prev,next,nextYear today',
                    center: 'title',
                    right: 'dayGridWeek'
                },
				dayMaxEvents: true, // 이벤트가 오버되면 높이 제한 (+ 몇 개식으로 표현)
                selectable: true,
                selectMirror: true,
				
				initialView: 'timeGridWeek', //주별로 보이게
				slotMinTime: '18:00:00', //달력에서 보여주는 시작 시간
				
                navLinks: true, // can click day/week names to navigate views
                editable: true,
                interactive : true,
             	weekends :false, //주말은 안 보이게
                dayMaxEvents: false, // allow "more" link when too many events 이벤트가 길어져도 보이게
                // 이벤트 객체 필드 document : https://fullcalendar.io/docs/event-object
                events: 
                   
               	calendar_data_arr,
               	eventClick: function (info) {
			    //alert('Event: ' + info.event.id);
			    getModal(info.event.id, info.event.start);
			  }
                    
                
            }
		
        	var calendarEl = document.getElementById('calendar');
        	
            var calendar = new FullCalendar.Calendar(calendarEl, options);

            calendar.render();
	
		/*document.addEventListener('DOMContentLoaded', function() {
        });*/
	
}





    	/*document.addEventListener('DOMContentLoaded', function() {
        	var calendarEl = document.getElementById('calendar');
        	
            var calendar = new FullCalendar.Calendar(calendarEl, {
                // Tool Bar 목록 document : https://fullcalendar.io/docs/toolbar
                headerToolbar: {
                    left: 'prevYear,prev,next,nextYear today',
                    center: 'title',
                    right: 'dayGridMonth,dayGridWeek'
                },

                selectable: true,
                selectMirror: true,

                navLinks: true, // can click day/week names to navigate views
                editable: true,
                

             
                dayMaxEvents: false, // allow "more" link when too many events
                // 이벤트 객체 필드 document : https://fullcalendar.io/docs/event-object
                events: [
                    {
                    title: 'All Day Event',
                    start: '2022-11-21'
                    },
                    {
                    title: 'Long Event',
                    start: '2022-07-07',
                    end: '2022-07-10'
                    },
                    {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2022-11-24T16:00:00'
                    },
                    {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2022-07-16T16:00:00'
                    },
              
                    {
                    title: 'Meeting',
                    start: '2022-07-12T10:30:00',
                    end: '2022-07-12T12:30:00'
                    },
                    {
                    title: 'Lunch',
                    start: '2022-07-12T12:00:00'
                    },
                    {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2022-07-28'
                    }
                ]
            });

            calendar.render();
        });*/




//출결 저장 버튼
function changeAttend(){
	
	let lessonDate = attendDateDiv.innerText;
	var stuCode = [];
	var isAttend = [];
	/*선택한 체트박스의 아이디값을 들고간다. studentCode라는 이름으로
	그래서 UPDATE AJAx 실행*/
	//체크가 된 체크박스들 가져오기
	const checkedBoxes = document.querySelectorAll('.chk:checked');
	const checkedNoBoxes = document.querySelectorAll('.chkNoAttend:checked');
	
	for(const checkedBox of checkedBoxes){
		
		stuCode.push(checkedBox.id);
		isAttend.push(checkedBox.value);
	}
	for(const checkedNoBox of checkedNoBoxes){
		
		stuCode.push(checkedNoBox.id);
		isAttend.push(checkedNoBox.value);
	}
	//alert("학생코드들" +stuCode)
	//alert("출석상태"+isAttend)
	
	//ajax start
	$.ajax({
		url: '/lesson/updateIsAttandenceAjax', //요청경로
		type: 'post',
		/*dataType:'json',*/
		data: {stuCodeList:stuCode, isAttendList:isAttend, lessonDate:lessonDate}, //필요한 데이터
		success: function() {
			
			Swal.fire({
		  		title: '출결상태가 등록되었습니다.',
		  		icon: 'info',
		 		 confirmButtonText: '확인'
				})
			
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
}






























//전체선택, 전체해제 이벤트
checkAll.addEventListener('click',function(){
	//제목줄의 체크박스 체크여부
	const isChecked = checkAll.checked; //true,false
	
	//리스트 목록의 모든 체크박스
	const checkboxes = document.querySelectorAll('.chk');
	
	//제목줄 체크박스가 체크되었다면,
	if(isChecked){
		for (const checkBox of checkboxes){
			checkBox.checked = true;
		}
	}
	else{
		
		for (const checkBox of checkboxes){
			checkBox.checked = false;
		}
	}
	
	
});


//리스트 체크박스 선택 시 제목줄 체크박스 이벤트
for(const chk of chks){
	chk.addEventListener('click', chk=>{ 
		//아래에 있는 전체 체크박스의 수 
		const cnt = chks.length;
		//아래에 있는 전체 체크박스 중 체크된 수
		const checkedCnt = document.querySelectorAll('.chk:checked').length;
		
		//수가 같으면 제목 체크박스도 체크
		if(cnt == checkedCnt ){
			document.querySelector('#checkAll').checked = true;
		}
		//수가 다르면 제목 체크박스도 해체
		else{
			document.querySelector('#checkAll').checked = false;
		}
		
	});
}

