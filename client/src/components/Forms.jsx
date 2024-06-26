import { useEffect, useState } from "react";
import axios from "axios";

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
  const submitForm = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", form.image);
    formdata.append("name", form.name);
    formdata.append("password", form.password);
    formdata.append("email", form.email);

    // axios.post('http://localhost:3001/add_user', formdata)
    // .then(res=>console.log(res))
    // .catch(e=>console.log(e))
    try {
      const resp = await fetch("http://localhost:3001/add_user", {
        method: "post",
        body: formdata,
      });
      const result = await resp.json();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="forms-container">
      <div className="singup">
        <h3>Sign-up </h3>
        <form onSubmit={submitForm}>
          <div className="form-control">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              placeholder="Full name"
            />
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
            </div>
          </div>
          <div className="form-row">
            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="confirm-password">Confirm-password</label>
              <input
                type="text"
                name="confirmPassword"
                id="confirm-password"
                placeholder="Confirm-password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div className="signin">
        <h3>Sign-in</h3>
        <form action="">
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Email" />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <div className="form-control">
            <button>Signin</button>
          </div>
          <i style={{ fontWeight: "bold", fontSize: "12px" }}>
            If you have trouble signing in, please sign-up first!
          </i>
        </form>
      </div>
    </main>
  );
}
