import express from "express";
import * as controller from "../controllers/userController.mjs";
import multer from "multer";
import passport from "passport";
import "../login-strategy/local-strategy.mjs";

const route = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });

route.post("/add_user", upload.single("file"), controller.addUser);
route.post(
  "/login_user",
  passport.authenticate("local", {
    failureRedirect: "/",
    failureMessage: true,
  }),
  controller.loginUser
);

export default route;
