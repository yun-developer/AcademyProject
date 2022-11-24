
drawChart();


function drawChart(){
	//ajax start
	$.ajax({
		url: '/statistics/classByTeacherAjax', //요청경로
		type: 'post',
		data: {}, //필요한 데이터
		success: function(result) {
			//교사별 프로그램 수 차트를 그림
			//drawChart1(result.);
			//교사별 담당 학생 수 차트를 그림
			drawChart2(result.studentCntByTeacher);
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
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
	
	console.log(chart_category_arr);
	

	
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
	            horizontal: false,
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


    