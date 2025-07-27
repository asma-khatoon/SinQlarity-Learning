//how to create a method on  datemethod to get next date
function getNextDate(){
    let date =this.getDate();
    return date+1;
}
let instanceofDate = new Date();
Date.prototype.getNextDate = getNextDate();
let nextDate = instanceofDate.getNextDate();
console.log(nextDate);