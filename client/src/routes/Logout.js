import React, { useState, useEffect } from 'react';
import '../styles/Login.css'
import LogoutComponent from "../components/LogoutComponent"
import AuthenticationService from '../services/AuthenticationService';


function Logout() {
  
  useEffect(()=>{
   // getReg()
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
      <LogoutComponent
        
      />

    </div>
  );
}

export default Logout;