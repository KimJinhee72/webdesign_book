$(function(){
    // 탑메뉴
    $('.nav li').mouseover(function(){
        $(this).find('.sub-menu').stop().slideDown(700)
    }).mouseout(function(){
        $(this).find('.sub-menu').stop().slideUp(700)
    })
    // 이미지 슬라이드
    $('.slide>a').hide();
    setInterval(function(){
        $('.slide>a:first-child')
        .fadeOut(1000)
        .next('a')
        .fadeIn(1000)
        .end()
        .appendTo('.slide')
    },3000)
    // contents
    $(".c1 h4").click(function(){
        $(".c1 h4 , .c1>ul").removeClass("active")
        $(this).addClass("active").next("ul").addClass("active")
    })
    // 모달창
    $('.modal').hide()
    $('.popup').click(function(){
        $('.modal').show()
    })
    $('.modalPop button').click(function(){
        $('.modal').hide()
    })

})
