 
const hour = document.getElementById("hour");
const minute = document.getElementById("Min");
const second = document.getElementById("Sec");
const display = document.getElementById("Disp");
const start = document.getElementById("btnstart");
const stop = document.getElementById("btnstop");
const reset = document.getElementById("btnreset");
 
let interval = null;
let total = 0;
 
const timer = () => {
    if (total >= 0) {
        const hr = Math.floor(total / 3600);
        const mt = Math.floor((total % 3600) / 60);
        const sc = total % 60;
 
        hour.value = hr;
        minute.value = mt;
        second.value = sc;
 
        total--;
    } else {
        clearInterval(interval);
        display.innerText = "Time over!!";
    }
};
 
const totalvalue = () => {
    total = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
};
 
start.addEventListener('click', () => {
    clearInterval(interval);
    totalvalue();
    if (total > 0) {
        interval = setInterval(timer, 1000);
        display.innerText = "Timer started";
    } else {
        display.innerText = "Please enter a valid time";
    }
});
 stop.addEventListener('click', () => {
    alert("Timer Stopped")
    clearInterval(interval);
    display.innerText= "Timer Stopped";
 });
reset.addEventListener('click', () => {
    clearInterval(interval);
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    display.innerText = "Timer Reset";
    // total = 0;
});
 
 