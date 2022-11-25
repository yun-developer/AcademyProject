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
		url: '/statistics/classByTeacherAjax', //요청경로
		type: 'post',
		data: {}, //필요한 데이터
		success: function(result) {
			//교사별 프로그램 수 차트를 그림
			drawChart1(result.lessonCntByTeacher);
			//교사별 담당 학생 수 차트를 그림
			drawChart2(result.studentCntByTeacher);
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
}


//차트1
//교사별 프로그램 수 차트를 그림
function drawChart1(data){

	console.log(data)

	//키 값으로 넘어온 교사 이름..
	let keys = Object.keys(data);
	//console.log(keys);
	
	
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
		 series:chart_data_arr /*[44, 55, 41, 17, 15]*/,
		 chart: {
			 type: 'donut',
		 }, labels:chart_category_arr /*['Team A', 'Team B', 'Team C', 'Team D', 'Team E']*/,
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




//차트 2
//교사별 담당 학생 수 차트를 그림
function drawChart2(data){
	
	//<교사이름, 학생수>
	//console.log(data);
	
	//키 값으로 넘어온 교사 이름..
	let keys = Object.keys(data);
	//console.log(keys);
	
	
	//data가 배열로 넘어오니까 빈 배열 만들고 
	chart_data_arr = [];
	chart_category_arr = [];
	
	//클래스를 만들고 변수를 정해줌
	//하나씩 반복문으로 돌려서 위에서 만들어준 빈배열에 넣기 
	for(const key of keys){
		chart_category_arr.push(key);
		chart_data_arr.push(data[key]);
	}
	
	//console.log(chart_category_arr);
	

	
	   var options = {
	          series:
	          
	           [{
	          data: chart_data_arr
	        }],
	          chart: {
	          type: 'bar',
	          height: 350
	        },
	        plotOptions: {
	          bar: {
	            borderRadius: 4,
	            horizontal: true,
	          }
	        },
	        dataLabels: {
	          enabled: true
	        },
	      
	        xaxis: {
	          categories: chart_category_arr,
	        }
	       /* xaxis: {    
	          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
	            'United States', 'China', 'Germany'
	          ],
	        }*/
        };

		
		
		
		
        var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
        chart2.render();
      
      
    
}


    