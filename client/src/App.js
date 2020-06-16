import React, {Component} from 'react';
import './styles/App.css';
import Nav from "./routes/Nav"
import Profile from './routes/Profile'
import Feed from './routes/Feed'
import Search from './routes/Search'
import Catalog from './routes/Catalog'
import Upload from './routes/Upload'
import Login from './routes/Login'
import Logout from './routes/Logout'
import Register from './routes/Register'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

          

class App extends Component {
  
  

  render() {
    return (
      <Router>
        <div className="App text-center">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile}/>
            <Route path="/feed" component={Feed}/>
            <Route path="/search" component={Search}/>
            <Route path="/catalog" exact component={Catalog} />
            <Route path="/upload" exact component={Upload} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/logout" exact component={Logout} />
          

          </Switch>
        </div>

      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)


export default App;
