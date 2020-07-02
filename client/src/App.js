import React from 'react';
import './styles/App.css'
import Nav from "./components/Nav"
import Profile from './routes/Profile'
import Feed from './routes/Feed'
import Search from './routes/Search'
import Catalog from './routes/Catalog'
import Upload from './routes/Upload'
import Login from './routes/Login'
import Logout from './routes/Logout'
import Register from './routes/Register'
import Button from './routes/Button'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Private from './routes/Private'
import { AuthContext } from './routes/context/auth'

function App (props) {
  

  console.log(localStorage)

  return (
    <AuthContext.Provider value={true}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Private path="/profile" component={Profile} />
          <Route path="/feed" component={Feed}/>
          <Route path="/search" component={Search}/>
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/upload" exact component={Upload} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/button" exact component={Button} />
        
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