import React, { Component } from 'react';
import UsersComponent from './UsersComponent'

class Search extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: [],
            get: false,
            friends: []
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

        let userArray = []
        

        await fetch('/allUsersButMe')
        .then(res=>res.json())
        .then(json=>{
            for(let i in json){
            
                let obj = { id: i, user: json[i], friend: false }
                for(let j in this.state.friends){
                    if(json[i] === this.state.friends[j].value){
                        obj.friend = true
                    }        
                }
                userArray.push(obj)        
            }
           this.setState({ users: userArray, get: true })
        })
    }

    friendToggle = async (e) => {
        const rawRes = await fetch('/addFriend', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({a: e})
        })
        const content = await rawRes.json()
        console.log(content)

    }

    getUsers = async () => {
        // need to fetch /friends as well,
        // and color code tile based on friendship 
        
        
        let userArray = []
        

        await fetch('/allUsersButMe')
        .then(res=>res.json())
        .then(json=>{
            for(let i in json){
            
                let obj = { id: i, user: json[i], friend: false }
                for(let j in this.state.friends){
                    if(json[i] === this.state.friends[j].value){
                        obj.friend = true
                    }        
                }
                userArray.push(obj)        
            }
           this.setState({ users: userArray, get: true })
        })
    }

    render() { 
          
            return ( 
            <div>
                <h1>Search</h1>
                <button onClick={()=>{
                    this.getUsers()
                }}>All Users</button>

                {this.state.get ?
                    <UsersComponent
                
                    users={this.state.users}
                    friends={this.state.friends}
                    friendToggle={this.friendToggle}
                    />
                    : null
                }
            </div>

         );
    }
}
 
export default Search;

