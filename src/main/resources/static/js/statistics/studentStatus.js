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
		url: '/statistics/studentStatusAjax', //요청경로
		type: 'post',
		data: {}, //필요한 데이터
		success: function(result) {
			// ① 학년별 학생 수 차트를 그림
			drawChart1(result.studentCntPerGrade);
			// ② 과목별 학생 수 차트를 그림
			drawChart2(result.studentCntPerSubject);
			// ③ 22년 월별 학생수 차트를 그림
			drawChart3(result.newStudentCntByMonth);
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
}

/*차트 ① -------------------------------------------------------------------------------------------------*/
//학년별 학생 수 차트를 그림
function drawChart1(data){
	
	
	//data가 배열로 넘어오니까 빈 배열 만들고 
	chart_data_arr = [];
	
	//클래스를 만들고 변수를 정해줌
	//하나씩 반복문으로 돌려서 위에서 만들어준 빈배열에 넣기 
	for(const grade of data){
		chart_data = new Object();
		chart_data.x = grade.studentYear;
		chart_data.y = grade.studentCnt;
		chart_data_arr.push(chart_data);
		
	}
	

	
	options = {
	  chart: {
	    type: 'bar',
	    height: 300
	    
	  },
	  plotOptions: {
	    bar: {
	      horizontal: false
	    }
	  },
	   colors: ['#008FFB' ],
	  series: [{
		data:chart_data_arr
	  }]
	}

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}


/*차트 ② -------------------------------------------------------------------------------------------------*/
//과목별 학생 수 차트를 그림
function drawChart2(data){
	
	
	//과학.수학
	let keys = Object.keys(data);

    //data가 배열로 넘어오니까 빈 배열 만들고 
	chart_data_arr = [];
	
	//클래스를 만들고 변수를 정해줌
	//하나씩 반복문으로 돌려서 위에서 만들어준 빈배열에 넣기 
	for(const key of keys){
		chart_data = new Object();
		chart_data.name = key;
		chart_data.data = data[key];
		chart_data_arr.push(chart_data);
		
	}
	
	
	var options = {
		series : chart_data_arr
		,
		chart: {
			type: 'bar',
			height: 300,
			stacked: true,
			stackType: '100%'
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					position: 'bottom',
					offsetX: -10,
					offsetY: 0
				}
			}
		}],
		
		xaxis: {
			categories: ['1학년','2학년','3학년'
			],
		},
		fill: {
			opacity: 1
		},
		 colors: ['#00E396', '#FEB019'],
		legend: {
			position: 'right',
			offsetX: 0,
			offsetY: 50
		},
	};

    var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
    chart2.render();
    
}


/*차트 ③ -------------------------------------------------------------------------------------------------*/
// 22년 월별 학생수 차트를 그림
function drawChart3(data){

	
	//data가 배열로 넘어오니까 빈 배열 만들고 
	chart_data_arr = [];
	chart_category_arr = [];
	studentCnt_arr = [];
	//클래스를 만들고 변수를 정해줌
	//하나씩 반복문으로 돌려서 위에서 만들어준 빈배열에 넣기 
	
	chart_data = new Object();
	chart_data.name = '신규 학생 수';
	
	for(const info of data){
		
		studentCnt_arr.push(info.studentCnt);
		chart_category_arr.push(info.mm+'월');
	}
	
		chart_data.data = studentCnt_arr;
		chart_data_arr.push(chart_data);
	
	
	console.log(chart_data.data);
	
	    var options = {
		series:chart_data_arr
          ,
          chart: {
          height: 300,
          type: 'line',
          stacked: false
         
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          width: [5]
        },
        title: {
          text: '',
          align: 'left',
          offsetX: 110
        },
         colors: [ '#FF4560'], // 선 색상 속성 추가
        xaxis: {
		 categories: chart_category_arr
        },
        yaxis: [
          {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: true,
              color: '#A5978B'
            },
            labels: {
              style: {
                colors: '#008FFB',
              }
            },
            title: {
              text: "Number of new students per month",
              style: {
                color: '#008FFB',
              }
            },
            tooltip: {
              enabled: true
            }
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            offsetY: 30,
            offsetX: 60
          },
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40
        }
        };

        var chart3 = new ApexCharts(document.querySelector("#chart3"), options);
        chart3.render();
      
 }