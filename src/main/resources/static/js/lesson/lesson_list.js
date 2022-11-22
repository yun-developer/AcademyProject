

    	document.addEventListener('DOMContentLoaded', function() {
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
                    start: '2022-07-09T16:00:00'
                    },
                    {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2022-07-16T16:00:00'
                    },
                    {
                    title: 'Conference',
                    start: '2022-07-11',
                    end: '2022-07-13'
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
                    title: 'Meeting',
                    start: '2022-07-12T14:30:00'
                    },
                    {
                    title: 'Happy Hour',
                    start: '2022-07-12T17:30:00'
                    },
                    {
                    title: 'Dinner',
                    start: '2022-07-12T20:00:00'
                    },
                    {
                    title: 'Birthday Party',
                    start: '2022-07-13T07:00:00'
                    },
                    {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2022-07-28'
                    }
                ]
            });

            calendar.render();
        });

