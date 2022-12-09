/* 차트 그리는 메소드 호출*/
drawChart();

function drawChart(){
	//ajax start
	$.ajax({
		url: '/lesson/mainChartAjax', //요청경로
		type: 'post',
		data: {}, //필요한 데이터
		success: function(result) {
			//교사별 프로그램 수 차트를 그림
			drawChart1(result.lessonCntByTeacher);
			//분기별 과목1 테스트 평균 차트를 그림
			drawChart2(result.quarterlySubTestAvg);
			//분기별 과목2 테스트 평균 차트를 그림
			drawChart3(result.quarterlySubTestAvg);
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
}


//////////////////////////변수///////////////////////////////////////////////
/*회원가입 진행여부*/
const isNew = document.querySelector('#isNew');
//const modal = new bootstrap.Modal('#idDouble_Yes');




if(isNew.value=='new'){
	isNew.value='';
	Swal.fire({
         title:'회원가입 완료',
         /*text: 'Potato Academy의 회원이 되신것을 환영합니다. \n'+' 로그인 화면으로 이동하시겠습니까?',*/
         html: 'Potato Academy의 회원이 되신것을 환영합니다. <br> 로그인 화면으로 이동하시겠습니까?',
         icon: 'success',
         
         showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
         confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
         cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
         confirmButtonText: '확인', // confirm 버튼 텍스트 지정
         cancelButtonText: '취소', // cancel 버튼 텍스트 지정
         
         reverseButtons: false, // 버튼 순서 거꾸로
         
      }).then(result => {
         // 만약 Promise리턴을 받으면,
         if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
            
               location.href=`/teacher/loginPage`;
            
         }
      });
      
	//modal.show();
}










/*메인페이지 내 차트 =====================================================================================================================*/

//차트1
//교사별 프로그램 수 차트를 그림
function drawChart1(data){


	//키 값으로 넘어온 교사 이름
	let keys = Object.keys(data);
	
	
	//data가 배열로 넘어오니까 빈 배열 만들고 
	chart_data_arr = [];
	chart_category_arr = [];
	
	//클래스를 만들고 변수를 정해줌
	//하나씩 반복문으로 돌려서 위에서 만들어준 빈배열에 넣기 
	for(const key of keys){
		chart_category_arr.push(key);
		chart_data_arr.push(data[key]);
	}

	
	
	 var options = {
		 series:chart_data_arr,
		 chart: {
			 type: 'donut',
			 width: '100%' 
		 }, labels:chart_category_arr,
		 
		 responsive: [{
			 breakpoint: 480,
			 options: {
				 chart: {
					 width: 200
				 },
				 legend: {
					 position: 'bottom'
				 }
			 }
		 }]
	 };

        var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
        chart1.render();
	



}


//분기별 과목1 테스트 평균 차트를 그림
function drawChart2(data) {
	
	//data가 배열로 넘어오니까 빈 배열 만들고 
	chart_data_arr = [];
	
	//category_arr 에는 테스트 일자들 담기
	chart_category_arr = [];
	
	//학년 별 데이터를 담을 빈 배열 만들고
	subject_001_1year_arr = [];
	subject_001_2year_arr = [];
	subject_001_3year_arr = [];
	
	//학년별 데이터를 넣을 객체를 학년수 만큼 생성	
	chart_data = new Object();
	chart_data2 = new Object();
	chart_data3 = new Object();
	
	//타이틀에 변수로 들어갈 과목 이름
	let subjectTitle = '';
	
	//클래스를 만들고 변수를 정해줌
	//하나씩 반복문으로 돌려서 위에서 만들어준 빈배열에 넣기 
	for(const info of data){
		
		//1학년의 SUBJECT_001 데이터
		if(info.subjectCode == 'SUBJECT_001' & info.studentYear == '1'){
			
			chart_data.name = info.studentYear + '학년' ;
			// 1학년의 SUBJECT_001의 평균 점수 데이터 값을 배열에 넣기 
			subject_001_1year_arr.push(info.scoreAvg);
			
			//테스트 일자를 category_arr 배열에 push
			chart_category_arr.push(info.testDate);
			//SUBJECT_001 의 subjectName 을 변수 subjectTitle에 넣기
			subjectTitle = info.subjectName;
			
		}
		else if(info.subjectCode == 'SUBJECT_001' & info.studentYear == '2'){
			
			chart_data2.name = info.studentYear + '학년';
			subject_001_2year_arr.push(info.scoreAvg);
		}
		else if(info.subjectCode == 'SUBJECT_001' & info.studentYear == '3'){
			
			chart_data3.name = info.studentYear + '학년';
			subject_001_3year_arr.push(info.scoreAvg);
		}
		
		chart_data.data =subject_001_1year_arr;
		chart_data2.data =subject_001_2year_arr;
		chart_data3.data =subject_001_3year_arr;
		
	}
	
	chart_data_arr.push(chart_data);
	chart_data_arr.push(chart_data2);
	chart_data_arr.push(chart_data3);
	
	

	var options = {
		series:chart_data_arr,
		chart: {
			width: '100%',
			height: 230,
			type: 'line',
			dropShadow: {
				enabled: true,
				color: '#000',
				top: 18,
				left: 7,
				blur: 10,
				opacity: 0.2
			},
			toolbar: {
				show: false
			},
					    animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 300,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 150
        }
    },
		},
		colors: ['#3AB0FF', '#FABB51', '#F87474'],
		dataLabels: {
			enabled: true,
		},
		stroke: {
			//curve: 'smooth'
		},
		title: {
			text: '분기별 '+subjectTitle +' 테스트 평균',
			align: 'left'
		},
		grid: {
			borderColor: '#e7e7e7',
			row: {
				colors: ['#f3f3f3', 'transparent'], 
				opacity: 0.5
			},
		},
		markers: {
			size: 1
		},
		xaxis: {
			categories:chart_category_arr ,
			title: {
				text: 'Test Date'
			}
		},
		yaxis: {
			title: {
				text: 'Score AVG'
			},
			min: 0,
			max: 100
		},
		legend: {
			position: 'top',
			horizontalAlign: 'right',
			floating: true,
			offsetY: -25,
			offsetX: -5
		}
	};


	var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
	chart2.render();


}



//분기별 과목2 테스트 평균 차트를 그림  
function drawChart3(data) {

	console.log(data);
	
	
	//data가 배열로 넘어오니까 빈 배열 만들고 
	chart_data_arr = [];
	
	//category_arr 에는 테스트 일자들 담을거임!
	chart_category_arr = [];
	
	//학년 별 데이터를 담을 빈 배열 만들고
	subject_002_1year_arr = [];
	subject_002_2year_arr = [];
	subject_002_3year_arr = [];

	//학년별 데이터를 넣을 객체를 학년수 만큼 생성	
	chart_data = new Object();
	chart_data2 = new Object();
	chart_data3 = new Object();
	
	
	//변수로 들어갈 과목 이름
	let subjectTitle = '';
	
	//클래스를 만들고 변수를 정해줌
	//하나씩 반복문으로 돌려서 위에서 만들어준 빈배열에 넣기 
	for(const info of data){
		
		//1학년의 SUBJECT_002 데이터
		if(info.subjectCode == 'SUBJECT_002' & info.studentYear == '1'){
			
			chart_data.name = info.studentYear + '학년' ;
			// 1학년 SUBJECT_002의 평균 점수 데이터 값을 배열에 넣기 
			subject_002_1year_arr.push(info.scoreAvg);
			
			//테스트 일자를 category_arr 배열에 push
			chart_category_arr.push(info.testDate);
			
			//SUBJECT_002 의 subjectName 을 변수 subjectTitle에 넣기
			subjectTitle = info.subjectName;
			
		}
		else if(info.subjectCode == 'SUBJECT_002' & info.studentYear == '2'){
			
			chart_data2.name = info.studentYear + '학년';
			subject_002_2year_arr.push(info.scoreAvg);
		}
		else if(info.subjectCode == 'SUBJECT_002' & info.studentYear == '3'){
			
			chart_data3.name = info.studentYear + '학년';
			subject_002_3year_arr.push(info.scoreAvg);
		}
		
		chart_data.data =subject_002_1year_arr;
		chart_data2.data =subject_002_2year_arr;
		chart_data3.data =subject_002_3year_arr;
		
	}
	
	chart_data_arr.push(chart_data);
	chart_data_arr.push(chart_data2);
	chart_data_arr.push(chart_data3);
	
	

	var options = {
		series:chart_data_arr,
		chart: {
			width: '100%',
			height: 230,
			type: 'line',
			dropShadow: {
				enabled: true,
				color: '#000',
				top: 18,
				left: 7,
				blur: 10,
				opacity: 0.2
			},
			toolbar: {
				show: false
			},
					    animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 300,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 150
        }
    },
		},
		colors: ['#3AB0FF', '#FABB51', '#F87474'],
		dataLabels: {
			enabled: true,
		},
		stroke: {
			//curve: 'smooth'
		},
		title: {
			text: '분기별 '+subjectTitle +' 테스트 평균',
			align: 'left'
		},
		grid: {
			borderColor: '#e7e7e7',
			row: {
				colors: ['#f3f3f3', 'transparent'], 
				opacity: 0.5
			},
		},
		markers: {
			size: 1
		},
		xaxis: {
			categories:chart_category_arr ,
			title: {
				text: 'Test Date'
			}
		},
		yaxis: {
			title: {
				text: 'Score AVG'
			},
			min: 0,
			max: 100
		},
		legend: {
			position: 'top',
			horizontalAlign: 'right',
			floating: true,
			offsetY: -25,
			offsetX: -5
		}
	};

	var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
	chart3.render();
	
	
}



function potatoChat()
{
   const option='top=100,right=10,width=600,height=700,resizable=0,';
   const url='/potatoChat/pop';
   window.open(url, 'popup', option);
}





/////////////////////////이벤트///////////////////////////////////////////////////////

//스크롤위로
$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0 , behavior:"smooth"}, 50);
        return false;
    });

});


