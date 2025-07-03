const express = require('express');
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    //req.send("I am request");
    res.send("I am response");
    
});
app.get('/add',(req,res)=>{
    let n1= 10;
    let n2= 30;
    let sum= n1+n2;
    res.send(`sum =${sum}`);
    
});
app.post('/add',(req,res)=>{
    console.log(req.body);
    let sum=0;
    res.send(`sum =${sum}`);

});
app.listen(5500);
//app.listen(5500);
