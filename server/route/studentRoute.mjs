import express from "express";
import * as controller from "../controllers/studentController.mjs";

const route = express();

route.post("/add_student", controller.addStudent);
route.get("/view_students", controller.viewStudents);
route.post("/update_student", controller.updateStudent);
route.post("/delete_student", controller.deleteStudent);

export default route;
