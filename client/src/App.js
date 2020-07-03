import React, { useState } from 'react';
import './styles/App.css'
import Nav from "./components/Nav"
import Profile from './routes/Profile'
import Feed from './routes/Feed'
import Search from './routes/Search'
import Catalog from './routes/Catalog'
import Upload from './routes/Upload'
import Logout from './routes/Logout'
import Register from './routes/Register'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Private from './routes/Private'
import { AuthContext } from './routes/context/auth'
import axios from 'axios'

function App (props) {
  
  const [ isLoggedIn, setLoggedIn ] = useState(false)

  const Login = () => {
    const [ isError, setIsError ] = useState(false)
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
  
    function postLogin() {
      console.log('clicked')
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
      </>
    );
  }

  return (
    <AuthContext.Provider value={isLoggedIn}>
      <Router>
        <Nav 
          loggedIn={isLoggedIn}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Private path="/profile" component={Profile} />
          <Private path="/feed" component={Feed}/>
          <Private path="/search" component={Search}/>
          <Private path="/catalog" exact component={Catalog} />
          <Private path="/upload" exact component={Upload} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/logout" exact component={Logout} />
        
        </Switch>
      
      </Router>
    </AuthContext.Provider>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;

//  "proxy": "http://localhost:8080"