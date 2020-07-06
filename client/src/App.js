import React, { Component, useState, useEffect } from 'react';
import './styles/App.css'
import Nav from "./components/Nav"
import Profile from './routes/Profile'
import Feed from './routes/Feed'
import Search from './routes/Search'
import Catalog from './routes/Catalog'
import Upload from './routes/Upload'
import Register from './routes/Register'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import Private from './routes/Private'
import { AuthContext } from './routes/context/auth'
import axios from 'axios'
import Login from './routes/Login'

function App (props) {
  const [ isLoggedIn, setLoggedIn ] = useState(false)
  const [ isLoaded, setLoaded ] = useState(false)
  const [ isChecked, setIsChecked ] = useState(false)
  const [ isError, setIsError ] = useState(false)
  const [ user, setUser ] = useState({})

  useEffect(()=>{
 
    axios.get('/auth')
    .then(result=>{
      setLoggedIn(result.data.status)
      setLoaded(true)
      setUser({name: result.data.user})
      
      console.log(result.data)
    })
    .catch(err=>{
      setLoggedIn(false)
      setLoaded(true)
    })
  },[isChecked])
 


  const Home = () => {
  
    return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
  }

    const Logout = () => {

      function postLogout () {
        axios({
          method: 'post',
          url: '/logout'
        })
        .then(result=> {
          if (result.status === 200) {
            setLoggedIn(false)
            
            console.log("Logged Out")
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
      return (
        <div>
          <button
            onClick={postLogout}
            >Logout</button>
        </div>
      );
    }
    

  return (
    <AuthContext.Provider value={isLoggedIn}>
      <Router>
        <Nav 
          loggedIn={isLoggedIn} 
          loaded={isLoaded}
        />
        <Switch>
          <Route 
            path="/" 
            exact 
            render={(props)=>(
              <Home
                {...props}
              />
            )}
          />
          <Private
            path="/profile" 
            render={(props)=>(
              <Profile
                {...props}
                Component={Profile}
                Obj={user}
              />
            )} 
          />
          <Private 
            path="/feed"
            render={(props)=>(
              <Feed
                {...props}
                Component={Feed}
                Obj={null}
              />
            )}
          />
          <Private 
            path="/search" 
            render={(props)=>(
              <Search
                {...props}
                Component={Search}
                Obj={null}
              />
            )}
          />
          <Private 
            path="/catalog" 
            exact 
            render={(props)=>(
              <Catalog
                {...props}
                Component={Catalog}
                Obj={null}
              />
            )}
          />
          <Private 
            path="/upload" 
            exact 
            render={(props)=>(
              <Upload
                {...props}
                Component={Upload}
                Obj={null}
              />
            )}
          />
          <Route 
            path="/login" 
            exact 
            render={(props)=>(
              <Login
                {...props}
                isLoggedIn={isLoggedIn}
                setLoggedIn={setLoggedIn}
                setIsError={setIsError}
                Component={Login}
              />
            )} 
          />
          <Route 
            path="/register" 
            exact 
            render={(props)=>(
              <Register 
                {...props}
                isLoggedIn={isLoggedIn}
                setLoggedIn={setLoggedIn}
                setIsError={setIsError}
              />
            )} 
          />
          <Private
            path="/logout"
            exact 
            render={(props)=>(
              <Logout 
                {...props}
                Component={Logout}
                Obj={null}
              />
            )}
          />
        
        </Switch>
      
      </Router>
    </AuthContext.Provider>
  );
}


export default App;