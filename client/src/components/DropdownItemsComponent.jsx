import React, { Component } from 'react';
import { DropdownItem } from'react-bootstrap'
import DropdownMenu from 'react-bootstrap/DropdownMenu';

class DropdownItems extends Component {
    
    constructor(props){
        super(props)
        this.state = { 
        }
    }

    render() { 
        
        const { friends } = this.props

        return ( 
   
        <DropdownMenu>
                {friends.map((friend)=>(
                  <DropdownItem 
                    key={friend.id}
                    value={friend}
                />                    
                  
                ))
                }
                 </DropdownMenu>
            
         );
    }
}
 
export default DropdownItems;