function func1(){
    return "function1" ;
}
function func2(){
    return new Promise((res, re)=>{
        setTimeout(()=>{
            console.log("Now calling it");
            res("function2");
        },1000)

    });
    
}
function func3(){
        return "function3";
    }
    function startCalling(){
        const res1= func1();
        console.log(res1);
        func2()
        .then((result)=>{
            console.log(result);
            let res3 =func3();
            console.log(res3);
        })
        .catch((error)=>{
            console.log(error)

        });
    }
    startCalling();