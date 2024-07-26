import express from "express";
import * as controller from "../controllers/studentController.mjs";
import cors from "cors";

const route = express();
route.use(
  cors({
    origin: "https://react-student-grading.onrender.com",
    methods: ["POST", "GET"],
    credentials: true,
  })
);
route.post("/add_student", controller.addStudent);
route.get("/view_students", controller.viewStudents);
route.post("/update_student", controller.updateStudent);
route.post("/delete_student", controller.deleteStudent);
route.get("/auto_fetch_student", controller.autoFetchStudent);
route.get("/fetch_student/:studentCode", controller.fetchStudent);

export default route;
