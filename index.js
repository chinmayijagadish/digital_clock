const hourE=document.getElementById("hour");
const minE=document.getElementById("minutes");
const secE=document.getElementById("seconds");
const ampmE=document.getElementById("ampm");
function updateClock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="AM"

    if(h>12){
        h=h-12;
       ampm="PM";
    }


    h=h<10? "0"+h:h
    m=m<10? "0"+m:m
    s=s<10? "0"+s:s
    
    hourE.innerText=h;
    minE.innerText=m;
    secE.innerText=s;
    ampmE.innerText=ampm;
    setTimeout(()=>{
        updateClock()
    },1000)

}
updateClock()