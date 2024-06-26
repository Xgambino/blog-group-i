import "./register.css"
import React from "react";

function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label >UserName</label>
            <input type="text" className="registerInput" placeholder="Enter Your UserName"/>
            <label >Email</label>
            <input type="text" className="registerInput" placeholder="Enter Your Email"/>
            <label >Password</label>
            <input type="password" className="registerInput" placeholder="Enter Your Password"/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
        </div>
  )
}
export default Register;