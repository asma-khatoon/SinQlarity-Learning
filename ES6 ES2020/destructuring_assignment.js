let arr=[1,2,3,4,5];
let [a , b]=arr;

console.log("first element:",a +" " +"Second element:",b);
console.log(`first element ${a} and second ${b}`);

[a,b] =[b,a]; //swapping
console.log(`first element is ${a} and second element is ${b}`);
console.log(a,b);

function getStudent(){
    let student ={
        sname: "ABc",
        age: 20,
        cls: "btech"
    }
    return student;
}
var {sname , cls} = getStudent();
console.log(sname, cls);
