

const express=require('express')
const app =express();
const cors=require('cors');
require('dotenv').config();
const mongoose=require('mongoose')
const Product=require('./model/Product')
const uri= "mongodb+srv://asmakhatoon165:786@Asma@mycluster.vgrk9gh.mongodb.net/testdb?retryWrites=true&w=majority&appName=myCluster"
app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("server is running")
})
app.post("/product",async (req,res)=>{
    try{
    const result=await Product.create(req.body);
    res.send({status:'successs'});
    }catch (error){
        console.log(error.message);
        res.send({status:'error',message:error.message})
    }
    
})
app.get("/product",async (req,res)=>{
    try{
    const products=await Product.find({});
    res.send({status:'successs',data:products});
    }catch (error){
        console.log(error.message);
        res.send({status:'error',message:error.message})
    }
    
})

async function startServer() {
  try {
    // await mongoose.connect(process.env.connectionString);
    await mongoose.connect(uri,{
      useNewUrIparser:true,
      useUnifiedTopology:true,
    });
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

startServer();