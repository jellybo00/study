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
})