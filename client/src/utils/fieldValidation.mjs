export default function fieldValidation({
  name,
  email,
  image,
  password,
  confirmPassword,
}) {
  const errorsValidation = {};
  if (!name.trim()) {
    errorsValidation.name = "Name is required";
  } else if (name.length < 3) {
    errorsValidation["name"] = "Characters should be greater than 3";
  } else if (!/^[a-zA-Z]+$/.test(name)) {
    errorsValidation.name = "Use letters only";
  }

  if (!email.trim()) {
    errorsValidation.email = "Email is required";
  } else if (!/\S+@\S+.\S+/.test(email)) {
    errorsValidation["email"] = "Email is invalid";
  }

  if (!image) {
    errorsValidation.image = "Profile picture is required";
  }

  if (!password.trim()) {
    errorsValidation.password = "Password required";
  }

  if (password != confirmPassword) {
    errorsValidation.confirmPassword = "Password didn't match !";
  }

  return errorsValidation;
}
