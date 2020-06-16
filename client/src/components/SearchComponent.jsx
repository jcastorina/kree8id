import React, { Component } from 'react';
import UsersComponent from './UsersComponent'

class Search extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: [],
            get: false
        }
    }

    componentDidMount = async () => {
        
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
                let obj = { id: i, user: json[i] }
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
                
                    userList={this.state.users}
                    friendToggle={this.friendToggle}
                    />
                    : <h1>packle</h1>
                }
            </div>

         );
    }
}
 
export default Search;

