import React, { Component } from 'react'; 

class User extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() { 
        
        const { user, friendToggle } = this.props
        let color
        
        if(user.friend){
            color = {
                backgroundColor: "#CCFFEE",
                
            }
        } else {
            color = {backgroundColor:"none"}
        }
        return ( 
            <div 
                className="userPanel"
                style={color}
                >
                
                <p>{user.user}</p>
                {color.backgroundColor==="none"?
                                    <p
                        className="addButton"
                        onClick={()=>{
                            friendToggle(user)
                        }}
                        
                    >
                    Add
                    </p>
                    : null
                    }
                

            </div>
         );
    }
}
 
export default User;