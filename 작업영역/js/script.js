$(document).ready(function(){
    $('.menus>li').mouseover(function(){
        $(this).find('.sub-menu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.sub-menu').stop().slideUp(500);
    });
    // imageslide의 a의 모든 것 gt(0)
    $('.slide').eq(0).siblings().hide();
    let slideImg = 0 ;
    setInterval(function(){
        if(slideImg < 2){
            slideImg++;
        }
        else{
            slideImg = 0;
        }
        $('.slide').eq(slideImg).siblings().fadeOut();
        $('.slide').eq(slideImg).fadeIn();
    },3000);
    $('.notice>ul>li:first').click(function(){
        $('#modal').addClass('active');
    }) 
    $('.modal>button').click(function(){
        $('#modal').removeClass('active');
    })
});
