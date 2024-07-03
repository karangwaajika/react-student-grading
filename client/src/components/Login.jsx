import { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import FlashMessage from './FlashMessage'
export default function Login() {
  const[form, setForm] = useState({
    email:"",
    password: "",
  })

  const [responseMessage, setResponseMessage] = useState();
  const removeMessage = () => {
    setResponseMessage();
  };

  const navigate = useNavigate()

  const handleChange = (e) =>{
     const {name, value} = e.target
     setForm(prevForm =>{
      return {...prevForm, [name]: value}
     })
     
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    axios.post('http://localhost:3001/login_user', { email: form.email, password:form.password })
    .then(res=>{
      if(res.data.success){
        localStorage.setItem('token', res.data.token) //store the token in local storage
        navigate('/dashboard')
      }
          })
    .catch(err=>{
      console.log(err.response.data)
      setResponseMessage({
        success: false,
        message: err.response.data.message,
      });
    })

  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ email: form.email, password:form.password })
  // };
  // try{
  //   const response = await fetch('http://localhost:3001/login_user', requestOptions);
  //   const data = await response.json();
  //   console.log(data)
  // }catch(err){
  //   console.log("failed")
  //   console.log(err)
  // }
    }

  return (
    <>
      <h3>Sign-in</h3>
      {responseMessage && (
          <FlashMessage
            message={responseMessage.message}
            success={responseMessage.success}
            removeMessage={removeMessage}
          />
        )}
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
