import React, { Component } from 'react';
import Dialog from "./DialogComponent"

class About extends Component {
    state = { 
        isOpen: false 
    }
    render() { 
        return ( 
            <div>
                <button onClick={(e)=>this.setState({isOpen: true})}>Open Dialog</button>
                <Dialog isOpen={this.state.isOpen} onClose={(e)=> this.setState({ isOpen: false })}>
                    Contents of the box
                </Dialog>
            </div>

         );
    }
}
 
export default About;