import React, { Component } from 'react'; 

class User extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() { 
        
        const { user, friendToggle } = this.props
        
        return ( 
            <div className="userPanel">
                <p>{user}</p>
                <p
                    className="addButton"
                    onClick={()=>{
                        friendToggle(user)
                    }}
                >
                Add
                </p>
            </div>
         );
    }
}
 
export default User;