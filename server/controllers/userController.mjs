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
    await response.send({"success":"Successfuly added"});
    
  } catch (e) {
    await response.send({'error':"user exist"})
    console.log(e)
  }
};

export const loginUser = (request, response)=>{
  response.send({'data':"success"})
}
