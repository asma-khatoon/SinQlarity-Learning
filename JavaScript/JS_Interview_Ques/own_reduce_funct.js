function reduce(nums, func, init){
    if(nums.length == 0){
        return init;
    }
    let result = init;
    for(let num of nums){
        result = func(result, num);
        //console.log(num);
    }
    return result;
}
const nums = [1,2,3,4,5,6];
func = function sum(accumulated, current){
 return accumulated + current;
};
init =0;
console.log(reduce(nums, func, init));
