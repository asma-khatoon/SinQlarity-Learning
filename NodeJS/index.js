const express = require('express');
const app = express();
const calculatorRouter = require('./routers/calculator');
app.use(express.json());
app.get('/',(req,res)=>{
    //req.send("I am request");
    res.send("I am response");
    
});
// app.get('/add',(req,res)=>{
//     let n1= 10;
//     let n2= 30;
//     let sum= n1+n2;
//     res.send(`sum =${sum}`);
    
// });

app.use('/calculator', calculatorRouter);
app.listen(5500);

