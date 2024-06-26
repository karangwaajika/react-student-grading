import { User } from "../models/user.mjs";
import { hashPassword } from "../utils/hashpassword.mjs";

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
    await response.flash("success", "Successfuly added");
    
  } catch (e) {
    await response.flash('error', e)
    console.log(e)
  }
};
