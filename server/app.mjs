import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

mongoose.connect(process.env.MongoStringID).then(()=>{
  console.log("database connected")
}).catch(err=>console.log(err))

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.listen(PORT, () => {
  console.log("Listerning on port " + PORT);
});
