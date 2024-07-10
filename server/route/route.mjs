import express from "express";
import userRoute from "./userRoute.mjs";
import subjectRoute from "./subjectRoute.mjs";

const route = express();
route.use(userRoute);
route.use(subjectRoute);

export default route;
