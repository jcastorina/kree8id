import React, { useState, useEffect } from 'react';
import '../styles/Login.css'
import LoginComponent from "../components/LoginComponent"
import AuthenticationService from '../services/AuthenticationService';


function Login() {
  
  useEffect(()=>{
    //sendForm()
  },[])

  // const sendForm = async () => {
  //   const response = await AuthenticationService.login({
  //         username: this.username,
  //         password: this.password
  //   })
  //   console.log(response)
  // }

  return (
    <div>
      <LoginComponent
  
      />

    </div>
  );
}

export default Login;