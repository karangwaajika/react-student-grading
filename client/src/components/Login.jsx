import { useState } from "react";
import axios from "axios";
import {Link, Navigate} from 'react-router-dom'
export default function Login() {
  const[form, setForm] = useState({
    email:"",
    password: "",
  })

  const handleChange = (e) =>{
     const {name, value} = e.target
     setForm(prevForm =>{
      return {...prevForm, [name]: value}
     })
     console.log(form)
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('email', form.email)
    formData.append('password', form.password)
    
    // axios.post('http://localhost:3001/login_user', formData)
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err))
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: form.email, password:form.password })
  };
  try{
    const response = await fetch('http://localhost:3001/login_user', requestOptions);
    const data = await response.json();
    console.log(data)
  }catch(err){
    console.log("failed")
    console.log(err.message)
  }
  
  
    }

  return (
    <>
      <h3>Sign-in</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email-login">Email</label>
          <input 
          type="text" 
          name="email" 
          id="email-login" 
          onChange = {handleChange} 
          placeholder="Email" />
        </div>
        <div className="form-control">
          <label htmlFor="password-login">Password</label>
          <input
            type="password"
            name="password"
            id="password-login"
            onChange = {handleChange}
            placeholder="***********"
          />
        </div>
        <div className="form-control">
          <button>Signin</button>
        </div>
        <i style={{ fontWeight: "bold", fontSize: "12px" }}>
          If you have trouble signing in, please sign-up first!
        </i>
      </form>
    </>
  );
}
