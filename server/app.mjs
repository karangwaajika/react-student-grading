import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.listen(PORT, () => {
  console.log("Listerning on port " + PORT);
});
