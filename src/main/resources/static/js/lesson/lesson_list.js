putlessonInfo();


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

                selectable: true,
                selectMirror: true,

                navLinks: true, // can click day/week names to navigate views
                editable: true,
                
             
                dayMaxEvents: false, // allow "more" link when too many events
                // 이벤트 객체 필드 document : https://fullcalendar.io/docs/event-object
                events: 
                   
               	calendar_data_arr
                    
                
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

