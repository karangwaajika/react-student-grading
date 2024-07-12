import express from "express";
import userRoute from "./userRoute.mjs";
import subjectRoute from "./subjectRoute.mjs";
import studentRoute from "./studentRoute.mjs";

const route = express();
route.use(userRoute);
route.use(subjectRoute);
route.use(studentRoute);

export default route;
