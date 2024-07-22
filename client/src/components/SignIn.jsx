import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FlashMessage from "./ui/FlashMessage";
import InputField from "./ui/InputField";
import Button from "./ui/Button";
import useResponseMessage from "../Hooks/useResponseMessage";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };
  const { responseMessage, setResponseMessage, removeMessage } =
    useResponseMessage();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(import.meta.env.VITE_REACT_APP_LOGIN_USER_API, {
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token); //store the token in local storage
          navigate("/dashboard");
        }else{
          setResponseMessage({
            success: false,
            message: res.data.message,
          });
        }
      })
      .catch((err) => {
        setResponseMessage({
          success: false,
          message: err.message,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="signin">
      <h3>Sign-in</h3>
      {responseMessage && (
        <FlashMessage
          message={responseMessage.message}
          success={responseMessage.success}
          removeMessage={removeMessage}
        />
      )}
      <div className="form-signin">
        {isLoading && (
          <div className="loader">
            <img src="images/giphy-1.webp" width={100} height={100} />
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <InputField
              type="text"
              name="email"
              id="email-login"
              handleChange={handleChange}
              placeholder="Email"
              label="Email"
              value={form.email}
            />
          </div>
          <div className="form-control">
            <InputField
              type="password"
              name="password"
              id="login-password"
              placeholder="***********"
              handleChange={handleChange}
              value={form.password}
            />
          </div>
          <div className="form-control">
            <Button text="SignIn" />
          </div>
          <i style={{ fontWeight: "bold", fontSize: "12px" }}>
            If you have trouble signing in, please sign-up first!
          </i>
        </form>
      </div>
    </div>
  );
}
