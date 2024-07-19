import express from "express";
import * as controller from "../controllers/marksController.mjs";

const route = express();

route.post("/add_marks", controller.addMarks);
route.get('/fetch_student_marks/:studentCode', controller.fetchStudentMarks)

export default route;
