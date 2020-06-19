import React, { Component } from 'react';
import favicon from '../favicon-32x32.png'


class RegisterComponent extends Component {
    state = { 
       username: '',
       password: ''
     }

     updateUser (e) {
        this.setState({ username: e.value })

        console.log(this.state)
      }

     updatePass (e) {
       this.setState({ password: e.value })
       console.log(this.state)
     }

    submit = async () => {
        console.log(this.state.username,this.state.password)
        let formData = new FormData()
        formData.append('username',JSON.stringify(this.state.username))
        formData.append('password',JSON.stringify(this.state.password))
        fetch('/register', {
          method: 'POST',
          body: formData
        })
        .then(res=>res.json())
        .then(json=>console.log(json))
    }



    render() { 


        return ( 
            <form acton="/register" method="POST" className="form-signin">
              <img className="mb-4" src={favicon} alt="" width="72" height="72"/>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <label htmlFor="inputUsername" className="sr-only">username</label>
              <input ref={val=>this.user=val} type="text" id="inputUsername" className="form-control" placeholder="username" name="username" required autoFocus/>
              <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input ref={val=>this.input=val}  type="password" id="inputPassword" className="form-control" placeholder="password" name="password" required/>
            
              <button  className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
              <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
            </form> );
    }
}
 
export default RegisterComponent;