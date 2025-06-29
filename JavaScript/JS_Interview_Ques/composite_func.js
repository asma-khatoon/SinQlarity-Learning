function compositeFunction(functionArray){
    return function(x){
        functionArray.reverse();
        for(let func of functionArray){
            x= func(x);
        }
        return x;
    };
}
const functions =[(x)=>10*x, (x)=>10*x, (x)=>10*x];
const x =1;
const func =  compositeFunction(functions);
const result = func(x);
console.log("result is:", result);