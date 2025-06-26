function updateDetail(student){
    student.name= "Hello" + " " +student.name;
    console.log(student);
}
let st ={name : "ABC"};
updateDetail(st);
console.log("old name is", st);