//how to create a method on instance of date to get next date
function getNextDate(){
    let date =this.getDate();
    return date+1;
}
let instanceofDate = new Date();
instanceofDate.getNextDate = getNextDate;
let nextDate = instanceofDate.getNextDate();
console.log(nextDate);