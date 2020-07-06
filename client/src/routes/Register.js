import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import '../styles/Login.css'
import axios from "axios"



function Register ( props ) {

  console.log('trying', props)

  const { isLoggedIn, setLoggedIn, setIsError } = props

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  function postRegister () {
    axios({
      method: 'post',
      url: '/register',
      data: {
        username,
        password
      }
    })
    .then(result=> {
      if (result.status === 200) {
        setLoggedIn(true)
        
        console.log("SUCCESS")
      } else {
        setIsError(true)
        console.log("FAILLL")
      }
    }).catch(e=> {
      console.log(e)
      console.log('failed')
      setIsError(true)
    })
  }
  if(isLoggedIn){
    return <Redirect to={'/profile'} />

  }

  return (
    <>
      <input 
        name="username"
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)          
        }}
      />
      <br></br>
      <input 
        name="password"
        type="password"
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)          
        }}
      />
      <br></br>
      <button
        onClick={postRegister}
      >Submit</button>
      <br></br>
      <Link to="/login">
          <p>Login</p>
      </Link>
    </>
  );
}

export default Register;