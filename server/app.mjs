import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import session from 'express-session'
import flash from 'express-flash-message'
import MongoStore from 'connect-mongo'
import cors from 'cors'
import route from "./route/route.mjs";
import passport from 'passport'

const app = express();
dotenv.config();
app.use(cors({
origin: 'https://react-student-grading.vercel.app',
methods: ["POST", "GET"],
credentials: true,
})); // fetch data from front-end
const PORT = process.env.PORT;

mongoose.connect(process.env.MongoStringID).then(()=>{
  console.log("database connected")
}).catch(err=>console.log(err))

app.use(express.urlencoded({ extended: true}))
app.use(express.json()) // password json 

app.use(express.static('public')) // access static file (image are stored)


app.use(session({ // add assession ID in database
    secret:"ajika",
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: MongoStore.create({
        client: mongoose.connection.getClient()
    })
}))

app.use(flash({sessionKeyName: 'express-flash-message'})) // session message

app.use(passport.initialize()) //only this is needed with jwt no session needed
app.use(passport.session())

app.use(route) // all routes

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.listen(PORT, () => {
  console.log("Listerning on port " + PORT);
});
