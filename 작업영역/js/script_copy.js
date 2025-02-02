$(function(){
    $('.menu>ul>li').mouseover(function(){
        $(this).find('.sub-menu').stop().slideDown(1000);       
    }).mouseout(function(){
        $(this).find('.sub-menu').stop().slideUp(1000);               
    });
    $('.slide a').hide();
    setInterval(function(){
        $('.slide a:first-child')
        .fadeOut(500)
        .next('a')
        .fadeIn(500)
        .end()
        .appendTo('.slide');
    },3000);
    $('.notice li:first').click(function(){
        $('#modal').addClass('active');
    });
    $('.modal > button').click(function(){
        $('#modal').removeClass('active');
    });
});
