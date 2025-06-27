function getDigitalTime(){
    let dateObj= new Date();
    let hrs =dateObj.getHours();
    let minutes =dateObj.getMinutes();
    let sec =dateObj.getSeconds();
    let day =dateObj.getDay();
    let mt = minutes<10? "0:" + minutes:minutes;
    return hrs+ ":" + mt + ":" +sec;
}
console.log(getDigitalTime());