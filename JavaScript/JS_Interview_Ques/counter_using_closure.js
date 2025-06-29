function counterFunc(count){
    return function(){
        return count++;
    }
};
const newFunction =counterFunc(5);
console.log(newFunction());
console.log(newFunction());
console.log(newFunction());
console.log(newFunction());
