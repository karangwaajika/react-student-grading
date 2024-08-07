import { useState } from "react";
import FlashMessage from "./ui/FlashMessage";
import InputField from "./ui/InputField";
import FileField from "./ui/FileField";
import Button from "./ui/Button";
import fieldValidation from "../utils/fieldValidation.mjs";
import useResponseMessage from "../Hooks/useResponseMessage";
import signUp from '../utils/signUp.mjs'

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
    image: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: type == "file" ? e.target.files[0] : value,
      };
    });
  };

  const [fieldError, setFieldError] = useState("");
  const validateSubmitForm = async (e) => {
    e.preventDefault();
    const inputFields = {
      name: form.name,
      email: form.email,
      image: form.image,
      password: form.password,
      confirmPassword: form.confirmPassword,
    };
    const errorsValidation = fieldValidation(inputFields);

    setFieldError(errorsValidation);

    if (Object.keys(errorsValidation).length == 0) {
      submitForm();
    }
  };

  const { responseMessage, setResponseMessage, removeMessage } =
    useResponseMessage();
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async () => {
    setIsLoading(true);
    const formdata = new FormData();
    formdata.append("file", form.image);
    formdata.append("name", form.name);
    formdata.append("password", form.password);
    formdata.append("email", form.email);

    signUp(
      import.meta.env.VITE_REACT_APP_ADD_USER_API,
      formdata,
      setResponseMessage,
      setIsLoading
    );
  };

  return (
    <div className="singup">
      <h3>Sign-up</h3>
      {responseMessage && (
        <FlashMessage
          message={responseMessage.message}
          success={responseMessage.success}
          removeMessage={removeMessage}
        />
      )}
      <div className="form-signup">
        {isLoading && (
          <div className="loader">
            <img src="images/giphy-1.webp" width={100} height={100} />
          </div>
        )}
        <form onSubmit={validateSubmitForm}>
          <div className="form-control">
            <InputField
              type="text"
              name="name"
              id="name"
              handleChange={handleChange}
              placeholder="Full name"
              label="Full name"
              value={form.name}
            />
            {fieldError.name && (
              <i className="error-field">{fieldError.name}</i>
            )}
          </div>
          <div className="form-row">
            <div className="form-control">
              <InputField
                type="text"
                name="email"
                id="email"
                handleChange={handleChange}
                placeholder="Email"
                label="Email"
                value={form.email}
              />
              {fieldError.email && (
                <i className="error-field">{fieldError.email}</i>
              )}
            </div>
            <div className="">
              <FileField
                type="file"
                className=""
                name="image"
                handleChange={handleChange}
                id="image"
                label="Profile"
              />
              {fieldError.image && (
                <i className="error-field">{fieldError.image}</i>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-control">
              <InputField
                type="password"
                name="password"
                id="password"
                placeholder="***********"
                handleChange={handleChange}
                value={form.password}
              />
              {fieldError.password && (
                <i className="error-field">{fieldError.password}</i>
              )}
            </div>
            <div className="form-control">
              <InputField
                type="password"
                name="confirmPassword"
                id="confirm-password"
                placeholder="***********"
                handleChange={handleChange}
                value={form.confirmPassword}
              />
              {fieldError.confirmPassword && (
                <i className="error-field">{fieldError.confirmPassword}</i>
              )}
            </div>
          </div>
          <div className="form-control">
            <Button text="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
