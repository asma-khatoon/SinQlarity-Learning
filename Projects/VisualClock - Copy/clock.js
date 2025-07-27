
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();
    
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : '') + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : '') + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : '') + currentTime.getSeconds();


}, 1000);

//stopwatch
// const start_stopwatch=document.getElementById('start');
// const stop_stopwatch=document.getElementById('stopped');
// const reset_stopwatch=document.getElementById('reset');

// start_stopwatch.addEventListener("click",function(){
	 
// if(timer!==null){
// 	clearInterval(timer)
// }
// timer=setInterval(stopwatch, 1000);
// });

// stop_stopwatch.addEventListener("click",function(){
// 	clearInterval(timer)
// });

// reset_stopwatch.addEventListener("click",function(){
// 	clearInterval(timer)
// 	displayTime.innerHTML="00:00:00";
	
// });


let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");

let timer = null;
function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
   displayTime.innerHTML = h + ":" + m + ":" + s;
   

}
 function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}
function watchStop() {
    clearInterval(timer);
}
function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
};

// Alarm//
const display = document.getElementById("alarm");
const audio = new Audio("bedside-clock-alarm-95792.mp3");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;
function setAlarmTime(value) {
  alarmTime = value;
}

function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(function() {
        audio.play();
      }, timeout);
      alert("Alarm set");
    }
  }
}


function clearAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert("Alarm cleared");
  }
};

