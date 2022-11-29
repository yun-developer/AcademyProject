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
			
			//분기별 과목 테스트 평균
			drawChart1(result.quarterlySubTestAvg);
			
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
}

//분기별 과목 테스트 평균 차트를 그림 
function drawChart1(data) {

	console.log(data);
	
	
	let keys = Object.keys(data);
	console.log("키값 나와라~!~!~!" + keys);
	
	
	
	let values =  Object.values(data);
	console.log("밸류값 나와라~!~!~!" + values);
	
	//data가 배열로 넘어오니까 빈 배열 만들고 
	chart_data_arr= [];
	
	//category_arr 에는 테스트 일자들 담을거임!
	chart_category_arr = [];
	
	
	
	for(const key of keys){
		chart_data = new Object();
		chart_data.name = data[key].subjectCode;
		chart_data.data = data[key].scoreAvg;
		//chart_data.data = data[key].testDate;
		console.log("key 값 : "+key);
		//console.log("data[key]나와라~!~!~!"+data[key]);
		console.log("chart_data.name : "+chart_data.name);
		console.log("chart_data.date : "+chart_data.data);
		
		chart_data_arr.push(chart_data);
	}
	
	
	//클래스를 만들고 변수를 정해줌
	//하나씩 반복문으로 돌려서 위에서 만들어준 빈배열에 넣기 
	for(const value of values){
		chart_data = new Object();
		chart_data.name = value.subjectCode;
		chart_data.data = value.scoreAvg;
		
		
		//console.log("testDate : "+value.testDate);

		//chart_data_arr.push(chart_data);
		//chart_category_arr.push(value.testDate);
	
		
	}
	
	//console.log("chart_data_arr 데이터 나와라" + chart_data_arr);
	
	//console.log(chart_category_arr);

	
	
	//console.log("chart_data_arr 나와라!!!!!!!!!"+chart_data_arr);


	var options = {
		/*series: [
			{
				name: "High - 2013",
				data: [28, 29, 33, 36, 32, 32, 33]
			},
			{
				name: "Low - 2013",
				data: [12, 11, 14, 18, 17, 13, 13]
			}
		]*/series:chart_data_arr,
		chart: {
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
			}
		},
		colors: ['#77B6EA', '#545454'],
		dataLabels: {
			enabled: true,
		},
		stroke: {
			curve: 'smooth'
		},
		title: {
			text: 'Average High & Low Temperature',
			align: 'left'
		},
		grid: {
			borderColor: '#e7e7e7',
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5
			},
		},
		markers: {
			size: 1
		},
		xaxis: {
			categories:chart_category_arr /*['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']*/,
			title: {
				text: 'Month'
			}
		},
		yaxis: {
			title: {
				text: 'Temperature'
			},
			min: 5,
			max: 40
		},
		legend: {
			position: 'top',
			horizontalAlign: 'right',
			floating: true,
			offsetY: -25,
			offsetX: -5
		}
	};

	var chart = new ApexCharts(document.querySelector("#chart"), options);
	chart.render();

}