import React, { Component } from 'react';
import '../styles/Profile.css'
import FriendsComponent from './FriendsComponent'

class Profile extends Component {
    constructor(props){
        super(props)

        this.state = {
            friends: [],
            get: false,
            name: this.props.name
        }
    }

    componentDidMount = async () => {
        const rawFriends = await fetch('/myFriends')
        const friends = await rawFriends.json()
        let index = []
        for(let i in friends){
            index.push({ id: i, value: friends[i] })
        }
        this.setState({ friends: index })
    }

    render() {        
        
        return ( 
        <div>
            <h1>{this.props.name}</h1>               
                {this.state.friends?
                <FriendsComponent
                    friends = {this.state.friends}
                />
                : null
                }              
        </div>
        );
    }
}
 
export default Profile;