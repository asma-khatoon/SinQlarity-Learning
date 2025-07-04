const express =require('express');
const userRoute = require('./routers/users')
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.send("I am response");
});

app.use('/users', userRoute);

app.listen(5500);