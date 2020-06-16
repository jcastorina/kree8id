import React, { Component } from 'react';

class Friend extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() { 

        const { friend } = this.props

        return ( 
            <div>
                {friend}
            </div>
         );
    }
}
 
export default Friend;