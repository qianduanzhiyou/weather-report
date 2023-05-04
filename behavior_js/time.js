var today=new Date();         //获取当前时间日期
var year=today.getFullYear()  //获得年份
var month=today.getMonth()+1; //获得月份
var day=today.getDate();      //获得天
var days=0;
//封装判断每个月的天数
// 一、1、3、5、7、8、10、12 每月31天，4、6、9、11为30天。
// 二、2月正常为28天，如果为闰年，则多一天为29天。
function count(){
    if (month!=2) {
        if( (month==4)||(month==6)||(month==9||(month==11))) {
            days=30;
        }else{
            days=31;
        }
    }else{
        if ((year%4)==0&&(year%100)!=0||(year%400)==0) {
            days=29
        }else{
            days=28;
        }
    }
}

//输出当前日期
function showMonth(){
    var year_month=year+'年'+month+'月'+day+'日';
    document.getElementById('dqrq').innerHTML=year_month;
}
//渲染页面
function showDate(){
    showMonth();
    count();
    var firstdate=new Date(year,month-1,1); //确定每月的第一天周几
    var xq=firstdate.getDay();
    var daterow=document.getElementById("day");
    // console.log(xq,daterow,firstdate);
    daterow.innerHTML="";
    //虚拟标签
    if(xq!=0){
        for(var i=0;i<xq;i++){
            var dayElement=document.createElement("div");
            dayElement.className="everyday";
            daterow.appendChild(dayElement);
        }
    }
    //渲染天数
    for(var j=1;j<=days;j++){
        var dayElement=document.createElement("div");
        dayElement.className="everyday";
        dayElement.innerHTML=j+"";
        if(j==day){
            dayElement.style.color="red";
        }
        daterow.appendChild(dayElement);
    }
}
//上个月
function lastMonth(){
    if (month>1) {
        month--;
    }else{
        month=12;
        year--;
    }
    showDate()
}
//下个月
function nextMonth(){
    if (month<12) {
       month++;
    }else{
        month=1;
        year++;
    }
    showDate();
}
//返回主页
function buto(){
    location.replace('content.html');
  }