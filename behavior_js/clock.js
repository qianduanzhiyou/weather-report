var clock_box=document.querySelector('.clock_box');
var clock_dial=document.querySelector('.clock_dial');
var dial=document.querySelectorAll('.dial');
var H_clock=document.querySelector('.H');
var M_clock=document.querySelector('.M');
var S_clock=document.querySelector('.S');

console.log(dial[0].lastChild)

//1 制作表盘
    for(var i=0;i<dial.length;i++){
    var angle=360/12*i;
    dial[i].style.transform='rotate('+angle+'deg)';
    dial[i].lastChild.style.transform='rotate('+-angle+'deg)';
    
}
//2 获得当地时间，用计时器实现动画效果
function clockMove(){
    var nowTime=new Date();
    var H=nowTime.getHours();
    var M=nowTime.getMinutes();
    var S=nowTime.getSeconds();
    //1s是6度，1m是6度，1h是30度；
    S_clock.style.transform='rotate('+S*6+'deg)';
    H_clock.style.transform='rotate('+(H*30+30/60*M)+'deg)';
    M_clock.style.transform='rotate('+M*6+'deg)';

}
var timer=setInterval(function(){
    clockMove();
},1000)
