let student ={
    sname:"Ali",
    class:5,
    city:"lko"
}
console.log(student);
let strObj= JSON.stringify(student);
console.log|(strObj);
console.log(strObj.sname);

let objStr = JSON.parse(strObj);
console.log(objStr);
console.log(objStr.sname);