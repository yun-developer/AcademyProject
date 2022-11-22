
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
	
	//console.log(data);
	
	//키 값으로 넘어온 교사 이름..
	let keys = Object.keys(data);
	console.log(keys);
	
	//data가 배열로 넘어오니까 빈 배열 만들고 
	chart_data_arr = [];
	
	//클래스를 만들고 변수를 정해줌
	//하나씩 반복문으로 돌려서 위에서 만들어준 빈배열에 넣기 
	for(const key of keys){
		chart_data = new Object();
		chart_data.categories = key;
		chart_data.data = data[key];
		chart_data_arr.push(chart_data);

	}
	

	console.log("chart_data_arr="+chart_data_arr);
	console.log("chart_data="+chart_data);

	
	   var options = {
          series:chart_data_arr
          
           /*[{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }]*/,
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
          categories: keys/*['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ]*/,
        }
        };

        var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
        chart2.render();
      
      
    
}


    