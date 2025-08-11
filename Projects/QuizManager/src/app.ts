

import express from "express";
import userRoute from "./routes/user";
import authRoute from "./routes/auth";
import examRoute from "./routes/exam"
import mongoose from "mongoose";
import ProjectError from "./helper/error";
import quizRoute from './routes/quiz'
import  reportRoute from './routes/report';
import { Request,Response,NextFunction } from "express";

const app = express();
interface ReturnResponse {
  status:"success"| "error",
  message:String,
  data:{}
}

app.use(express.json());
declare global {
  namespace Express{
    interface Request{
      userId: String;
    }
  }
}

app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/quiz',quizRoute)
app.use('/exam',examRoute)
app.use('/report',reportRoute)
app.use((err:ProjectError,req:Request,res:Response,next:NextFunction)=>{
  let message:String;
  let statusCode:number;
  if(!!err.statusCode && err.statusCode<500){
 message=err.message;
 statusCode=err.statusCode;
  }else{
    message="something went wrong please try after some time";
    statusCode=500;
  }
  let resp:ReturnResponse={status:"error",message,data:{}}
  if(!!err.data){
    resp.data=err.data;
  }
  console.log(err);
  res.status(statusCode).send(resp)
})



const url =
  "mongodb+srv://asmakhatoon165:165%40Asma@mycluster.vgrk9gh.mongodb.net/q/quizapp?retryWrites=true&w=majority&appName=myCluster";

mongoose
  .connect(url)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3002, () => console.log("Server running on port 3002"));
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });