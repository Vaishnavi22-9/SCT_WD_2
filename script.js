let sec = 0;
let min = 0;
let hr = 0;

let timer = null;

function stopwatch(){

    sec++;

    if(sec==60){
        sec=0;
        min++;
    }

    if(min==60){
        min=0;
        hr++;
    }

    let h = hr<10 ? "0"+hr : hr;
    let m = min<10 ? "0"+min : min;
    let s = sec<10 ? "0"+sec : sec;

    document.getElementById("display").innerHTML =
    h + ":" + m + ":" + s;
}

function start(){

    if(timer!==null) return;

    timer = setInterval(stopwatch,1000);
}

function pause(){

    clearInterval(timer);
    timer=null;
}

function reset(){

    clearInterval(timer);

    timer=null;

    sec=0;
    min=0;
    hr=0;

    document.getElementById("display").innerHTML="00:00:00";

    document.getElementById("laps").innerHTML="";
}

function lap(){

    let li=document.createElement("li");

    li.innerHTML=document.getElementById("display").innerHTML;

    document.getElementById("laps").appendChild(li);
}