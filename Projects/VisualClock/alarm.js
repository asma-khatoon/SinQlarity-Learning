
const Display = document.getElementById("alarm");
const audio = new Audio("bedside-clock-alarm-95792.mp3");
audio.loop = true;
 
    let alarms = [];
 

    function addAlarm() {
      const input = document.getElementById("alarmTime").value;
      if (!input) return alert("Please select a valid date/time");
 
      const alarmTime = new Date(input);
      if (alarmTime <= new Date()) {
        alert("Please set a future time!");
        return;
      }
 
      const alarmId = Date.now();
      const timeout = setTimeout(() => {
        audio.play();
        alert("Alarm ringing for: " + alarmTime.toLocaleString());
      }, alarmTime - new Date());
 
      alarms.push({ id: alarmId, time: alarmTime, timeout });
      updateAlarmList();
      alert("Alarm set for: " + alarmTime.toLocaleString());
    }
 
    
function updateAlarmList() {
  const list = document.getElementById("alarmList");
  list.innerHTML = "";

  alarms.forEach(alarm => {
    const alarmCard = document.createElement("div");
    alarmCard.className = "alarm-item";

    
    alarmCard.title = alarm.time.toLocaleString();

    const timeIcon = document.createElement("span");
    timeIcon.className = "alarm-icon";
    timeIcon.innerHTML = "⏰"; 

    const btn = document.createElement("button");
    btn.innerText = "×";
    btn.title = "Delete this alarm";
    btn.className = "delete-btn";
    btn.onclick = () => deleteAlarm(alarm.id);

    alarmCard.appendChild(timeIcon);
    alarmCard.appendChild(btn);
    list.appendChild(alarmCard);
  });
}

    function deleteAlarm(id) {
      const index = alarms.findIndex(alarm => alarm.id === id);
      if (index !== -1) {
        clearTimeout(alarms[index].timeout);
        alarms.splice(index, 1);
        updateAlarmList();
        alert("Alarm deleted");
      }
    }
 
    function clearAllAlarms() {
 
      alarms.forEach(alarm => clearTimeout(alarm.timeout));
      alarms = [];
      updateAlarmList();
      audio.pause();
     
      alarmTime.value=0;
      alert("all alarms cleared");
     
    }
 
    function checkAlarms(currentTime) {
 
    }
 
    setInterval(updateTime, 1000);

    

