const fs= require('fs');
function errorfirstCallback(){
    fs.readFile("file.txt", (err,data)=>{
        if(err){
            console.error("Error occured", err);
            return;
        }
        console.log(data.toString());

    });
}
errorfirstCallback();