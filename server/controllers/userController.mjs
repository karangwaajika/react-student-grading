import { User } from "../models/user.mjs";
import { hashPassword, comparedPassword } from "../utils/hashpassword.mjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const addUser = async (request, response) => {
  const { body, file } = request;

  body.password = hashPassword(body.password);

  const user = new User({
    fullname: body.name,
    email: body.email,
    password: body.password,
    image: file.filename,
  });

  try {
    await User.create(user);
    await response.send({
      success: true,
      message: "Successfuly added",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    await response.send({
      success: false,
      message: "Email  exist already!",
      error: error,
    });
  }
};

export const loginUser = (request, response) => {
  const { email, password } = request.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return response.send({
          success: false,
          message: "User doesn't exist",
        });
      }
      if (!comparedPassword(password, user.password)) {
        return response.send({
          success: false,
          message: "Incorrect password",
        });
      }
      // create our token jwt.sign(payload, secretOrPrivateKey, [options, callback])
      // this payload info is the one found in passport token strategy and hold this info
      const payload = {
        email: user.email,
        id: user._id,
      };
      const token = jwt.sign(payload, process.env.secretOrPrivateKey, {
        expiresIn: "1d",
      });
      return response.status(200).send({
        success: true,
        message: "Logged in Successfuly",
        token: "bearer " + token,
      });
    })
    .catch((error) => {
      return response.send({
        success: false,
        message: "something went wrong",
        error: error,
      });
    });
};

export const protectedUser = (request, response) => {
  return response.status(200).send({
    success: true,
    message: "authenticated",
    user: {
      id: request.user._id,
      email: request.user.email,
      fullname: request.user.fullname,
      image: request.user.image,
    },
  });
};
