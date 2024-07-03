import { useEffect, useState } from "react";
import axios from "axios";
import FlashMessage from "./FlashMessage";
import Login from "./Login";

export default function Forms() {
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

  const [responseMessage, setResponseMessage] = useState();

  const removeMessage = () => {
    setResponseMessage();
  };

  const [fieldError, setFieldError] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const errorsValidation = {};
    if (!form.name.trim()) {
      errorsValidation["name"] = "Name is required";
    } else if (form.name.length < 3) {
      errorsValidation["name"] = "Characters should be greater than 3";
    } else if (!/^[a-zA-Z]+$/.test(form.name)) {
      errorsValidation["name"] = "Use letters only";
    }

    if (!form.email.trim()) {
      errorsValidation["email"] = "Email is required";
    } else if (!/\S+@\S+.\S+/.test(form.email)) {
      errorsValidation["email"] = "Email is invalid";
    }

    if (!form.image) {
      errorsValidation["image"] = "Profile picture is required";
    }

    if (!form.password.trim()) {
      errorsValidation["password"] = "Password required";
    }

    if (form.password != form.confirmPassword) {
      errorsValidation["confirmPassword"] = "Password didn't match !";
    }

    setFieldError(errorsValidation);

    if (Object.keys(errorsValidation).length == 0) {
      submitForm();
    }
  };

  const submitForm = async () => {
    const formdata = new FormData();
    formdata.append("file", form.image);
    formdata.append("name", form.name);
    formdata.append("password", form.password);
    formdata.append("email", form.email);

    axios.post("http://localhost:3001/add_user", formdata)
      .then((res) => {
        setResponseMessage({
          success: res.data.success,
          message: res.data.message,
        });
      })
      .catch((e) => {
        setResponseMessage({
          success: false,
          message: e,
        });
      });
  };


  return (
    <main className="forms-container">
      <div className="singup">
        <h3>Sign-up </h3>
        {responseMessage && (
          <FlashMessage
            message={responseMessage.message}
            success={responseMessage.success}
            removeMessage={removeMessage}
          />
        )}
        <form onSubmit={handleSubmitForm}>
          <div className="form-control">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              placeholder="Full name"
            />
            {fieldError.name && (
              <i className="error-field">{fieldError.name}</i>
            )}
          </div>
          <div className="form-row">
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="Email"
              />
              {fieldError.email && (
                <i className="error-field">{fieldError.email}</i>
              )}
            </div>
            <div className="">
              <label htmlFor="image">Profile</label>
              <input
                type="file"
                className="form-file"
                name="image"
                onChange={handleChange}
                id="image"
              />
              {fieldError.image && (
                <i className="error-field">{fieldError.image}</i>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="***********"
                onChange={handleChange}
              />
              {fieldError.password && (
                <i className="error-field">{fieldError.password}</i>
              )}
            </div>
            <div className="form-control">
              <label htmlFor="confirm-password">Confirm-password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                placeholder="***********"
                onChange={handleChange}
              />
              {fieldError.confirmPassword && (
                <i className="error-field">{fieldError.confirmPassword}</i>
              )}
            </div>
          </div>
          <div className="form-control">
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div className="signin">
        <Login />
      </div>
    </main>
  );
}
