////////////////////////////////////////////////////////////////////
//-------------------------이벤트 정의 영역----------------------//
///////////////////////////////////////////////////////////////////


/*엑셀 다운로드 버튼을 눌렀을 때*/
const excelDownload = document.querySelector('#excelDownload');

document.addEventListener('DOMContentLoaded', ()=>{
    excelDownload.addEventListener('click', exportExcel);
});

function exportExcel(){ 
  // step 1. workbook 생성
  var wb = XLSX.utils.book_new();

  // step 2. 시트 만들기 
  var newWorksheet = excelHandler.getWorksheet();

  // step 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.  
  XLSX.utils.book_append_sheet(wb, newWorksheet, excelHandler.getSheetName());

  // step 4. 엑셀 파일 만들기 
  var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});

  // step 5. 엑셀 파일 내보내기 
  saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), excelHandler.getExcelFileName());
}

var excelHandler = {
    getExcelFileName : function(){
        return 'Teacher_List.xlsx';	//파일명
    },
    getSheetName : function(){
        return 'Table Test Sheet';	//시트명
    },
    getExcelData : function(){
        return document.getElementById('tableData'); 	//TABLE id
    },
    getWorksheet : function(){
        return XLSX.utils.table_to_sheet(this.getExcelData());
    }
}

function s2ab(s) { 
  var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
  var view = new Uint8Array(buf);  //create uint8array as viewer
  for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
  return buf;    
}





//페이징 라이브러리
var box = paginator({
    table: document.getElementById("table_box_bootstrap").getElementsByTagName("table")[0],
    box_mode: "list",
});
box.className = "box";
document.getElementById("table_box_bootstrap").appendChild(box);




///////////////////////////////////////////////////////////////////
//-----------------------함수 정의 영역--------------------------//
///////////////////////////////////////////////////////////////////

//교사 이름 클릭시 팝업 창 띄우는 함수 
function teacherPopup(teacherCode){
	

	//window.open("[팝업을 띄울 파일명 path]", "[별칭]", "[팝업 옵션]")
	//별칭 지정 -> 1. 팝업 파일을 열고 웹브라우저 새로고침을 눌렀을 때 똑같은 팝업창이 계속해서 열리는 문제를 해결할 수 있다!
	var pop = window.open(`/admin/popup?teacherCode=${teacherCode}`,"teacherPopup","width=850,height=1000, top=80px, left=500px, scrollbars=yes, resizable=yes");
	
	//팝업이 차단되어 있으면 알림 창 표시
	if(pop ==null){
		alert("팝업이 차단되어 있습니다. 팝업 차단을 해제해 주세요")
	}
	
}



















