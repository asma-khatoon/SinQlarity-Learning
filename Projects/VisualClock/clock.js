
 
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let am_pm = document.getElementById("am_pm");
let toggleBtn = document.getElementById("toggle");

let is24HourFormat = false; // default is 12-hour

toggleBtn.addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;
    toggleBtn.innerText = is24HourFormat ? "Switch to 12-Hour" : "Switch to 24-Hour";
});

setInterval(() => {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let session = "AM";

    if (!is24HourFormat) {
        if (hour >= 12) {
            session = "PM";
            if (hour > 12) hour -= 12;
        }
        if (hour === 0) hour = 12;

        am_pm.style.display = "inline";
        am_pm.innerHTML = session;
    } else {
        am_pm.style.display = "none";
    }

    hrs.innerHTML = (hour < 10 ? "0" : "") + hour;
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

}, 1000);