function* getNum(index){
    while(index<10){
        yield index;
        index++;
    }
}
let i = getNum(0);
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());
console.log(i.next());