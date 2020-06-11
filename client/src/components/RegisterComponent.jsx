import React, { Component } from 'react';
import favicon from '../favicon-32x32.png'


class RegisterComponent extends Component {
    state = {  }

    render() { 

        return ( 
            <form action="/register" method="POST" className="form-signin">
              <img className="mb-4" src={favicon} alt="" width="72" height="72"/>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <label htmlFor="inputUsername" className="sr-only">username</label>
              <input type="text" id="inputUsername" className="form-control" placeholder="username" name="username" required autoFocus/>
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input type="password" id="inputPassword" className="form-control" placeholder="password" name="password" required/>
            
              <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
              <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
            </form> );
    }
}
 
export default RegisterComponent;