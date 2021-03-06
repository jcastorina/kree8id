import React from 'react';

const LoginRegister = (loginObj) => {


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
    );
  }

  export default LoginRegister