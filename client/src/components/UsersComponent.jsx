import React, { Component } from 'react';
import UserComponent from './UserComponent'

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() { 
        
        const { userList, friendToggle } = this.props
        
        return ( 
            <div>
                {userList.map((user)=>(
                    <UserComponent 
                        key={user.id}
                        user={user.user}
                        friendToggle={friendToggle}
                    />
                ))}
            </div>
         );
    }
}
 
export default Users;