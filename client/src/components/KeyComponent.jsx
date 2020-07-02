import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Key extends Component {
    state = {  }

    render() { 

        return ( 
           
        <div className="key">
            <Link to='/login'>
            <svg 
                width="2em" 
                height="2em" 
                viewBox="0 0 16 16" 
                className="key" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg"
                >
 
                <path 
                    fillRule="evenodd" 
                    d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
            </svg>
            </Link>
        </div>
     
         );
    }
}
 
export default Key;