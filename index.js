const hourEle = document.getElementById("hour")
const minuteEle = document.getElementById("minutes")
const secEle = document.getElementById("seconds")

const ampmEle = document.getElementById("ampm")

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = "AM"

    if(h>12){
        h = h -12;
        ampm = "PM"
    }

    h = h < 10 ? "0"+h: h;  //if h<10 h = 0+h else h
    
    m = m < 10 ? "0"+m: m;  //if h<10 h = 0+h else h

    
    s = s < 10 ? "0"+s: s;  //if h<10 h = 0+h else h


    hourEle.innerText = h;
    minuteEle.innerText = m;
    secEle.innerText = s;
    ampmEle.innerText = ampm;
    setTimeout(()=>{
        updateClock()
    },1000)

    
}

updateClock()
