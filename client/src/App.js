import React, {Component} from 'react';
import './styles/App.css';
import Nav from "./routes/Nav"
import About from './routes/About'
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
            <Route path="/about" component={About}/>
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
