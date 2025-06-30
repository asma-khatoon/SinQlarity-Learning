function printData(sname,age){
    let toPrint = "Student's name is: "+ sname + " "+ "student's age is: " + age;
    let tempPrint = `Student's name is ${sname} student's age is ${age}`
    console.log(toPrint);
    console.log(tempPrint);
}
function something(string,sname,age){
    console.log("STRING", string);
    console.log("NAME", sname);
    console.log("AGE", age);
}
let name ="ABC";
let age =25;
printData(name,age);
something("student's name is ' ' & age is ' ' ", name,age);
something `student's name is ${name} and age is ${age}`