import express from "express";
import * as controller from "../controllers/subjectController.mjs";

const route = express();

route.post("/add_subject", controller.addSubject);
route.get("/view_subjects", controller.viewSubjects);
route.post("/update_subject", controller.updateSubject);
route.post("/delete_subject", controller.deleteSubject);

export default route;
