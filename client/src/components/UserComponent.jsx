import React, { Component } from 'react'; 

class User extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() { 
        
        const { user, friendToggle } = this.props
        let style = "panel"

        if(user.friend){
            style+=" friend"
        } else {
            style+=" user"
        }
    
        return ( 
            <div 
                className={style}
  
               
                >
                
                <p>{user.user}</p>
                {
                    !user.friend
                    ?
                    <p
                        className="addButton"
                        onClick={()=>{
                            friendToggle(user)
                        }}   
                    >Add</p>
                    :
                    <p
                    className="addButton"
                    onClick={()=>{
                        friendToggle(user)
                    }}   
                    >Remove</p> 
                    }
                

            </div>
         );
    }
}
 
export default User;