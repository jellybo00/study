$(function(){
    // 스플리팅 호출
    Splitting()
    
    // header영역 스크롤 방향 감지 이벤트
    var prevSCrollTop = 0
    document.addEventListener('scroll',function(){
        var nowScrollTop = $(window).scrollTop()
        
        if(nowScrollTop > prevSCrollTop){
            $('.header').addClass('active')
        }else {
            $('.header').removeClass('active')
        }
        prevSCrollTop = nowScrollTop
    })
    
    // 스크롤라 호출
    $('.animate').scrolla({
        mobile : true,
        once : false
    });
    
    
    // svg path 길이 구하기
    $(function(){
        // each() 매서드는 object와 배열 모두 사용할 수 있는 반복함수, length 속성을 갖는 배열과 유사 배열객체들의 index를 기준으로 첫번째 매개변수로 배열이나 객체를 받고, 두번째 매개변수로 콜백함수 값을 인자로 받음
        $('.svg_ani').find('#svgAni05').each(function(i, path){
            var length = path.getTotalLength();
            // alert(length)
        })
    })
    
})