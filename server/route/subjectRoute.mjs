import express from "express";
import * as controller from '../controllers/subjectController.mjs'

const route = express();

route.post("/add_subject", controller.addSubject);
export default route;
