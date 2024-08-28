import express from "express";
import * as controller from "../controllers/marksController.mjs";
import cors from "cors";

const route = express();
route.use(
  cors({
    origin: ["https://react-student-grading.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
route.post("/add_marks", controller.addMarks);
route.get("/fetch_student_marks/:studentCode", controller.fetchStudentMarks);
route.get("/fetch_all_marks", controller.fetchAllMarks);

export default route;
