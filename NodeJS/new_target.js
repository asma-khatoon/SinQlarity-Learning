function newTarget(x){
    if(new.target==undefined){
        console.log("No");

    }else{
        this.x =x;
        console.log("creating an object");
    }
    console.log("inside the function");
}
newTarget(6);
let x= new newTarget(7);
console.log(x);