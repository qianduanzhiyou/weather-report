var frame = document.querySelector('.frame');//标题

//接收
var url = decodeURI(window.location.href).split('=');
// console.log(url);
//生活出行建议
var items = document.querySelectorAll('.item_fir .item');
// console.log(typeof items);
//点击查看

$('.item').click(function () {
  var the = this.firstElementChild.nextElementSibling;
  // console.log(the);
  var cname = url[1];
  fetch(`https://tianqiapi.com/api?version=v1&appid=98885227&appsecret=jld5dHeZ&city=${cname}`).then(res => res.json()).then(msg => {
    console.log(msg);
    // console.log(msg);
    // console.log(cname); //选择的城市
    //判断点击的城市对应
    if (the.innerText == msg.data[0].index[0].title) {
      frame.innerHTML = `<span class='biao'>${msg.data[0].index[0].title}:<span class="biaoti">${msg.data[0].index[0].level}</span></span>
        <p class="wen">${msg.data[0].index[0].desc}</p>
        <div class="tie">温馨提示:${msg.data[0].air_tips}</div>
        `
    } else if (the.innerText == msg.data[0].index[1].title) {
      frame.innerHTML = `<span class='biao'>${msg.data[0].index[1].title}:<span class="biaoti">${msg.data[0].index[1].level}</span></span>
        <p class="wen">${msg.data[0].index[1].desc}</p>
        <div class="tie">温馨提示:${msg.data[0].air_tips}</div>
        `
    } else if (the.innerText == msg.data[0].index[2].title) {
      frame.innerHTML = `<span class='biao'>${msg.data[0].index[2].title}:<span class="biaoti">${msg.data[0].index[2].level}</span></span>
        <p class="wen">${msg.data[0].index[2].desc}</p>
        <div class="tie">温馨提示:${msg.data[0].air_tips}</div>
        `
    } else if (the.innerText == msg.data[0].index[3].title) {
      frame.innerHTML = `<span class='biao'>${msg.data[0].index[3].title}:<span class="biaoti">${msg.data[0].index[3].level}</span></span>
        <p class="wen">${msg.data[0].index[3].desc}</p>
        <div class="tie">温馨提示:${msg.data[0].air_tips}</div>
        `
    } else if (the.innerText == msg.data[0].index[4].title) {
      frame.innerHTML = `<span class='biao'>${msg.data[0].index[4].title}:<span class="biaoti">${msg.data[0].index[4].level}</span></span>
        <p class="wen">${msg.data[0].index[4].desc}</p>
        <div class="tie">温馨提示:${msg.data[0].air_tips}</div>
        `
    } else if (the.innerText == msg.data[0].index[5].title) {
      frame.innerHTML = `<span class='biao'>${msg.data[0].index[5].title}:<span class="biaoti">${msg.data[0].index[5].level}</span></span>
        <p class="wen">${msg.data[0].index[5].desc}</p>
        <div class="tie">温馨提示:${msg.data[0].air_tips}</div>
        `
    }
  })
})
function myFunc() {
  location.replace('content.html');
}

