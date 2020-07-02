import React, { Component } from 'react';
import UsersComponent from './UsersComponent'

class Search extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: [],
            visUsers: [],
            get: false,
            friends: [],
            search: ''
        }

        this.filter = this.filter.bind(this)
    }

    friends = async () => {
    
        const rawFriends = await fetch('/myFriends')
        const friends = await rawFriends.json()
        let index = []
        for(let i in friends){
            index.push({ id: i, value: friends[i] })
        }
        this.setState({ friends: index, get: true })
    }

    componentDidMount = async () => {
        await this.friends()

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
           this.setState({ users: userArray, visUsers: userArray, get: true })
        })
    }

    friendToggle = async (e) => {
        
        await fetch('/removeFriend', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({a: e.user})
        })
        .then(res=>res.json())
        .then(json=>{
            this.friends()
            const { users } = this.state
            
            for(let i in users){
                if(e.user === users[i].user){
                    users[i].friend = !users[i].friend
                    break
                }
            }
            this.setState({ users: users })
        })
    }

    getUsers = async () => {
             
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

    filter = (v) => {
        
        const { users } = this.state
        let visUsers = []
        for(let i in users){
            let regex = new RegExp('^'+v+'')
           
            if((users[i].user).match(regex)){
                visUsers.push(users[i])
            }
        }   
        this.setState({ visUsers: visUsers, search: v })        
    }

    render() { 
          
            return ( 
            <div>
                <h1>Search</h1>
                <div>
                    
                    <input 
                        ref={val=>this.input=val}
                        name="search" 
                        id="search"
                        onChange={()=>{
                            this.filter(this.input.value)
                        }}
                        value={this.state.search}
                    />
                    <button onClick={()=>{
                        this.getUsers()
                    }}>All Users</button>

                </div>
                {this.state.get ?
                    <UsersComponent
                    switch={this.switch}
                    users={this.state.visUsers}
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

