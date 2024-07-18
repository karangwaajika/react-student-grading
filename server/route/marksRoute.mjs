import express from "express";
import * as controller from "../controllers/marksController.mjs";

const route = express();

route.post("/add_marks", controller.addMarks);

export default route;
