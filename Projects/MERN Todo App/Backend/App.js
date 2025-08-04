const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors=require("cors");
const TodoRouter = require('./Routers/todo');
app.use(cors());
app.use(express.json());         
app.use('/', TodoRouter);     
const uri = "mongodb://localhost:27017/";

async function startServer() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");

    app.listen(3000, () => {
      console.log(" Server started on port 3000");
    });

  } catch (err) {
    console.error(" Failed to connect to MongoDB:", err);
  }
}

startServer();