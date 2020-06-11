import React, { useState, useEffect } from 'react';
import '../styles/Login.css'
import RegisterComponent from "../components/RegisterComponent"
import AuthenticationService from '../services/AuthenticationService';


function Register() {
  
  useEffect(()=>{
    getReg()
  },[])

  const getReg = async () => {
  
      const response = await fetch("/register")
      .then((res)=>res.json())
      .then((data)=>console.log(data))
      // const json = await response.json()

    //console.log(response)
  }

  return (
    <div>
      <RegisterComponent
        
      />

    </div>
  );
}

export default Register;