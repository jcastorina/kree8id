import React, { Component } from 'react';
import favicon from '../favicon-32x32.png'


class LogoutComponent extends Component {
    state = {  }

    render() { 

        return ( 
            <div>
            <form action="/logout" method="POST" className="form-signin">
              <img className="mb-4" src={favicon} alt="" width="72" height="72"/>
              <h1 className="h3 mb-3 font-weight-normal">Logout</h1>

              <button className="btn btn-lg btn-primary btn-block" type="submit">Logout</button>
              <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
            </form>
            </div> );
    }
}
 
export default LogoutComponent;