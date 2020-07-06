import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

const Login = ( props ) => {

    console.log(props, 'login')

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const { isLoggedIn, setLoggedIn, setIsError } = props

    function postLogin () {
        axios({
        method: 'post',
        url: '/login',
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
            onClick={postLogin}
        >Submit</button>
        <br></br>
        <Link to="/register">
            <p>Register</p>
        </Link>
        </>
    )
}

export default Login