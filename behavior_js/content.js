//获取当前页面元素
var btn = document.querySelector('#btn');   //点击按钮
var ipt = document.querySelector('#text');   //查询城市
var h2 = document.querySelector('.int');   //当前城市
var Weather = document.querySelector('.Weather')  //天气图
var weather = document.querySelector('.weather')  //天气
var dge = document.querySelector('.more_info .dge')  //温度
var fle = document.querySelector('.more_info .fle')  //风力
var dag = document.querySelector('.dag');    //当前日期
var pm = document.querySelector('.pm')       //空气质量
var uit='北京'    //地图地址默认北京
var str = '' 
var num='北京'
//默认渲染北京
fetch(`https://tianqiapi.com/api?version=v1&appid=98885227&appsecret=jld5dHeZ&city=${uit}`).then(res=>res.json()).then(msg=>{
    console.log(msg);
    h2.innerText=msg.city;
    dag.innerText=msg.update_time;
    weather.innerText=msg.data[0].wea;
    dge.innerText='最低' + msg.data[0].tem1 + '-' + '最高' + msg.data[0].tem2;
    fle.innerText=msg.data[0].win_speed;
    pm.innerText=msg.data[0].air_level;
    str = '' 
    for (let i = 0; i < 5; i++) {

        str += `
       <div class="future_box">
            <img class='tio' src="./picture_img/${msg.data[i].wea_day}.png" alt="天气"/>
            <span class="future_info">${msg.data[i].date}</span>
            <span class="future_info">${msg.data[i].day}</span>
            <span class="future_info">${msg.data[i].wea_day}</span><span class="future_info">${msg.data[i].tem1}-${msg.data[i].tem2}</span>
        </div>
       `
    }
    document.querySelector('#future_container').innerHTML = str

})
$('#btn').click(function () {
    content();
})

document.onkeydown=function(event){
    if (event.keyCode==13) {
        content();
    }
    
}
//点击之后渲染页面
function content(){
    var cname = ipt.value;
    uit=cname;
    map.centerAndZoom(uit, 10);
    $('.info').empty();
    $('#future_container').empty();//清空
    fetch(`https://tianqiapi.com/api?version=v1&appid=98885227&appsecret=jld5dHeZ&city=${cname}`).then(res=>res.json()).then(msg=>{
        console.log(msg);
        var data = msg.data;
        var city = msg.city;
        if (cname != msg.city) {
            alert('你输入的城市信息有误，请重新输入');
        }
        h2.innerText = city;//添加当前获取到的城市
       
        //将获取的数组信息添加到标签中
        // console.log(data);
        console.log(msg);

        dag.innerText = data[0].date;  //日期
        weather.innerText = data[0].wea;  //天气
        dge.innerText = '最低' + data[0].tem1 + '-' + '最高' + data[0].tem2;  //温度
        fle.innerText = data[0].win_speed;  //风力
        pm.innerText = data[0].air_level;    //空气质量
        //渲染添加
        str = '' 
        for (let i = 0; i < 5; i++) {
            str += `
           <div class="future_box">
                <img class='tio' src="./picture_img/${data[i].wea_day}.png" alt="天气"/>
                <span class="future_info">${data[i].date}</span>
                <span class="future_info">${data[i].day}</span>
                <span class="future_info">${data[i].wea_day}</span><span class="future_info">${data[i].tem1}-${data[i].tem2}</span>
            </div>
           `
           
        }
        document.querySelector('#future_container').innerHTML = str
        //跳转生活出行页面
        num=cname;
    })
}
//携带参数跳转
$("#sheng").click(function () {
    console.log(11);
    
    window.location.href = "Life_travel.html?num=" + num;
})

//地图
var map = new BMapGL.Map('tainer');
map.centerAndZoom(uit, 10);
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
map.addControl(scaleCtrl);
var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
map.addControl(zoomCtrl);




//菜单隐藏显现
$(function () {
    $('.but1').click(function () {
        $(this).next().slideToggle(1000);
    })
})
