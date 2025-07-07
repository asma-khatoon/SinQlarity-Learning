function multiply(num){
return new Promise((resolve, reject) => {
    resolve(num*2);
});
}
multiply(3)
.then(multiply)
.then(multiply)
.then(multiply)
.then(multiply)
.then((finalsum)=>console.log(finalsum));