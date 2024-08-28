import express from "express";
import userRoute from "./userRoute.mjs";
import subjectRoute from "./subjectRoute.mjs";
import studentRoute from "./studentRoute.mjs";
import marksRoute from "./marksRoute.mjs";
import cors from "cors";

const route = express();
route.use(
  cors({
    origin: "https://react-student-grading.vercel.app/",
    methods: ["POST", "GET"],
    credentials: true,
  })
);
route.use(userRoute);
route.use(subjectRoute);
route.use(studentRoute);
route.use(marksRoute);

export default route;
