/* 
1. 그릴 차트를 선택한다
2. 차트 데이터 설정을 보고 맞춤형 쿼리를 작성한다.(*****)
3. 페이지 들어오자마자 차트 그리는 함수 실행 (ex. drawChart();)
4. 차트 그리는 함수 안에 에이작스 실행
5. 에이작스에서 컨트롤러로 바로 이동
6. 컨트롤러에서 차트를 그릴 데이터를 조회하는 메소드를 작성
7. 메소드의 리턴타입에 따라 map의 리턴타입을 때때로 다르게 설정 
8. 다시 에이작스로 map에 담은 데이터 보내기
9. 차트별 데이터에 map으로 받아온 데이터를 잘 뽑아내기 (key,value)(***)*/

drawChart();

function drawChart(){
	//ajax start
	$.ajax({
		url: '/statistics/testAnalysisAjax', //요청경로
		type: 'post',
		data: {}, //필요한 데이터
		success: function(result) {
			
			//분기별 과목1 테스트 평균
			drawChart1(result.quarterlySubTestAvg);
			//분기별 과목2 테스트 평균
			drawChart2(result.quarterlySubTestAvg);
			
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
}

//분기별 과목1 테스트 평균 차트를 그림
function drawChart1(data) {

	
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
			height: 350,
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
function drawChart2(data) {

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
			
			height: 350,
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