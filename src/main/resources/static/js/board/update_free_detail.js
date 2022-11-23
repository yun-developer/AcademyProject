//이미지 팝업 띄우기
$('.myModal').on('click',function(){
    //a태그가 가진 이벤트 막기
   // e.preventDefault();

    $("#background").fadeIn(200);  //배경 레이어
    $("#front").fadeIn(200);  //이미지 레이어

    let src = $(this).attr('data-file-name'); // 클릭한 링크의 href 속성값
    alert(src);
    let img = "<img src='" + src +"'/>"; //이미지 태그 구성 
    $('#front').html(img);

});
//화면에 표시된 배경 레이어를 클릭한 경우
$('#background').click(function(){
	$(this).fadeOut(200);
    $("#front").fadeOut(200);
}); 	