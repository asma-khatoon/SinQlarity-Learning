function stdMarks(...marks){
    this.sub1= marks[0];
    this.sub2= marks[1];
    this.sub3= marks[2];
    this.sub4= marks[3];
    this.sub5= marks[4];
    let status = 'pass';
    marks.forEach((num) => {
    if(num<33){
        status ='fail';
    }
});
this.result =status;
}

function student(stdname, ...marks){
    this.stdname=stdname;
    stdMarks.apply(this, marks);
}
const std= new student("ABC", 45,67,67,87,23);
console.log(std);