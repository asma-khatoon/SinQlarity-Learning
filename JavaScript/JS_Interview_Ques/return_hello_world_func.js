function createHelloWorld(){
    return function(){
        return "Hello World!"
    }
}
const newFunction = createHelloWorld();
// const value = newFunction();
//const value= console.log(newFunction());
console.log(newFunction());