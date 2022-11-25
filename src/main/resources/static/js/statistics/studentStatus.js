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


      
/////////////////
//차트 3     
     
        var options = {
          series: [{
          name: 'Income',
          type: 'column',
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }, {
          name: 'Cashflow',
          type: 'column',
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {
          name: 'Revenue',
          type: 'line',
          data: [20, 29, 37, 36, 44, 45, 50, 58]
        }],
          chart: {
          height: 350,
          type: 'line',
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 4]
        },
        title: {
          text: 'XYZ - Stock Analysis (2009 - 2016)',
          align: 'left',
          offsetX: 110
        },
        xaxis: {
          categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#008FFB',
              }
            },
            title: {
              text: "Income (thousand crores)",
              style: {
                color: '#008FFB',
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                colors: '#00E396',
              }
            },
            title: {
              text: "Operating Cashflow (thousand crores)",
              style: {
                color: '#00E396',
              }
            },
          },
          {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                colors: '#FEB019',
              },
            },
            title: {
              text: "Revenue (thousand crores)",
              style: {
                color: '#FEB019',
              }
            }
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
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
      


function drawChart(){
	//ajax start
	$.ajax({
		url: '/statistics/studentStatusAjax', //요청경로
		type: 'post',
		data: {}, //필요한 데이터
		success: function(result) {
			//학년별 학생 수 차트를 그림
			drawChart1(result.studentCntPerGrade);
			//과목별 학생 수 차트를 그림
			drawChart2(result.studentCntPerSubject);
		},
		error: function() {
			alert('실패');
		}
	});
	//ajax end
	
}

//차트 1
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
	

	console.log(chart_data_arr);

	
	options = {
	  chart: {
	    type: 'bar'
	  },
	  plotOptions: {
	    bar: {
	      horizontal: false
	    }
	  },
	  series: [{
		data:chart_data_arr
	   /* data: [{
	      x: 'category A',
	      y: 10
	    }, {
	      x: 'category B',
	      y: 18
	    }, {
	      x: 'category C',
	      y: 13
	    }]*/
	  }]
	}

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}


//차트 2
//과목별 학생 수 차트를 그림
function drawChart2(data){
	//console.log(data);
	//console.log(data.과학);
	
	
	//과학.수학
	let keys = Object.keys(data);
	//console.log(keys);

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
	

	console.log(chart_data_arr);
	
	
	
	var options = {
		/*series: [{
			name: 'PRODUCT A',
			data: [44, 55, 41]
		}, {
			name: 'PRODUCT B',
			data: [13, 23,32 ]
		}, {
			name: 'PRODUCT C',
			data: [11, 17, 15]
		}]*/
		series : chart_data_arr
		,
		chart: {
			type: 'bar',
			height: 350,
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
		legend: {
			position: 'right',
			offsetX: 0,
			offsetY: 50
		},
	};

    var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
    chart2.render();
    
}



 