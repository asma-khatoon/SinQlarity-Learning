function otherFunc(){
    throw new error("my custom error");
    
}
function trycatch(){
    try{

        const value =otherFunc();
        console.log(value);
    }
    catch(error){
        console.log("error occured", error);
    }
}
otherFunc();