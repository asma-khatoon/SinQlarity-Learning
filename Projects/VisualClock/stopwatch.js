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
// const start = document.querySelector('#start');
//  const reset = document.querySelector('#reset');

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
    alert("start!");
}
function watchStop() {
    clearInterval(timer);
    alert("stopped!")
}
function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
};

// const timer = document.querySelector('#timer');

// const start = document.querySelector('#start');

// const reset = document.querySelector('#reset');
 
// console.log(timer);

// console.log(start);

// console.log(reset);
 
// let active = false;

// let [ss,mm,hh] = [0,0,0];

// let interval;
 
// function watchcount(){

//     ss++;

//     if ( ss > 59 ) {

//         ss = 0;

//         mm++;

//         if ( mm > 59){

//             mm = 0;

//             hh++;

//         }

//     }

//     console.log(ss,mm,hh)  

//     hh = String(hh).padStart(2,'0');

//     mm = String(mm).padStart(2,'0');

//     ss = String(ss).padStart(2,'0');

//     timer.textContent = `${hh}:${mm}:${ss}`;  

// }
 
 
// start.addEventListener('click', () => {
 
//     active = active ? false : true;

//     if ( active ) {

//         start.textContent = 'Stop';

//         start.classList.add('active');

//         interval = setInterval(watchcount,100);
 
//     }else{

//         start.textContent = 'Start';

//         start.classList.remove('active');

//         clearInterval(interval);
 
//     }
 
// });
 
// reset.addEventListener('click', () => { 

//     clearInterval(interval);

//     [ss,mm,hh] = [0,0,0];

//     timer.textContent = '00:00:00';

// });
 