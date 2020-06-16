import React, { Component } from 'react';
import FriendComponent from './FriendComponent'

class Friends extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() { 

        const { friends } = this.props
        return ( 
            <div>
                {friends.map((friend)=>(
                    <FriendComponent
                        friend={friend.value}
                        key={friend.id}
                    />
                ))}
            </div>
          
         );
    }
}
 
export default Friends;