$(".main > li").mouseover(function(){
    $(this).children(".sub").stop().slideDown();
//    $(".sub").stop().slideDown();
});
$(".main > li").mouseleave(function(){
     $(this).children(".sub").stop().slideUp();
//    $(".sub").stop().slideUp();
});

start();
var img=5;
var now =0;

function start(){
$(".img>img").eq(0).siblings().css({"margin-left":"-2000px"});    
setInterval(function(){slide();}, 2000);
}

function slide(){
now = now == img?0:now+=1;
$(".img>img").eq(now-1).css({"margin-left":"-2000px"});
$(".img>img").eq(now).css({"margin-left":"0px"});
}

function winOpen1(){
var win1 = window.open('id.html','child1','toolbar = no, location= no , status = no, menubar = no, resizable = no , scrollbars = no, width = 300, height = 200')
}
function winOpen2(){
var win2 = window.open('from.html','child2','toolbar = no, location= no , status = no, menubar = no, resizable = no , scrollbars = no, width = 850, height = 700')
}