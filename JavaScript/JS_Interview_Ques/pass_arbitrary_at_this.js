// How to pass an arbitrary object as this | bind | call
function printName(){
    console.log(`${this.first_name} ${this.last_name}`);
}
const student = {
 first_name: "Node",
 last_name :"JS",
    } ;
const callItLater = printName.bind(student);
callItLater();