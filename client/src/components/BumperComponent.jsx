import React, { Component } from 'react';

class Bumper extends Component {
    constructor(props){
        super(props)
        this.state = { 

        }          
      }
       
    render() { 
        
        const { classy } = this.props

        return ( 
        <div className="grid">
            <div className={classy.a}/>
            <div className={classy.b}/>
            <div className={classy.c}/>
            <div className={classy.d}/>
            <div className={classy.e}/>
        </div>
         );
    }
}
 
export default Bumper;