function createCounter(initialValue){
    let counter =initialValue;
    function increment(){
        counter++;
        console.log(counter);
    }
    function decrement(){
        counter--;
        console.log(counter);
    }
    function reset(){
        counter = initialValue;
        console.log(counter);
    }
 return {increment, decrement, reset};
}
const myCounter = createCounter(150);

myCounter.increment();
myCounter.decrement();
myCounter.decrement();
myCounter.decrement();
myCounter.reset();