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
			drawChart(result.quarterlySubTestAvg);
			
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
}

//분기별 과목 테스트 평균 차트를 그림 
function drawChart(data) {





	var options = {
		series: [
			{
				name: "High - 2013",
				data: [28, 29, 33, 36, 32, 32, 33]
			},
			{
				name: "Low - 2013",
				data: [12, 11, 14, 18, 17, 13, 13]
			}
		],
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
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
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