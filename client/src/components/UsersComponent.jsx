import React, { Component } from 'react';
import UserComponent from './UserComponent'

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() { 
        
        const { users, friendToggle } = this.props

        return ( 
            <div>
                
                {users.map((user)=>(
                                      
                    <UserComponent 
                        key={user.id}
                        user={user}
                        friendToggle={friendToggle}
                    
                    />
                ))}
            </div>
         );
    }
}
 
export default Users;