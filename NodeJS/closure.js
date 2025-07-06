const generatePowerFn= (power)=>{
return (number)=>{
    return number ** power;
};
};
const square =generatePowerFn(2);
const cube =generatePowerFn(3);
const quad =generatePowerFn(4);
console.log("square:",square(2));
console.log("cube:",cube(3));
console.log("quad:",quad(4));