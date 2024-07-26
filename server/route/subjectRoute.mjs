import express from "express";
import * as controller from "../controllers/subjectController.mjs";
import cors from "cors";

const route = express();
route.use(
  cors({
    origin: "https://react-student-grading.onrender.com",
    methods: ["POST", "GET"],
    credentials: true,
  })
);
route.post("/add_subject", controller.addSubject);
route.get("/view_subjects", controller.viewSubjects);
route.post("/update_subject", controller.updateSubject);
route.post("/delete_subject", controller.deleteSubject);

export default route;
