function printData(name,age){
    console.log("name is ",name)
    console.log("age is" ,age);
}
printData({name:"ABC", age:30});

function printData2({name:ename, age: eage}){
    console.log("name is", ename);
    console.log("age is:", eage);
}
printData2({name: "ABC" , age:20});