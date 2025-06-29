function expect(value){
    const toBe =(newValue)=>{
        if(value===newValue){
            return true;
        }else{
            throw new Error("not equal");
        }
    };
    const notToBe = (newValue)=>{
        if(newValue!==value){
            return true;
        }else{
            throw new Error("Equal values");
        }
    };
    return {toBe,notToBe};
}
const newvalueToCheck =7;
console.log(expect(7).toBe(newvalueToCheck));
try{
    console.log(expect(7).toBe(4));
}
catch(error){
    console.log("Exception:", error.message);
};

try{
    console.log(expect(7).notToBe(7));
}
catch(error){
    console.log("Exception:", error.message);
};