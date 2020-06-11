import React, { Component } from "react";

class SaveCancel extends Component {
  state = {};

  render() {

    return (
      
      
      <div>

        <svg 
            className="bi bi-x x" 
            width="1.5em" 
            height="1.5em" 
            viewBox="0 0 16 16" 
            fillRule="currentColor" 
            xmlns="http://www.w3.org/2000/svg">
        <path 
            fillRule="evenodd" 
            d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
        />
        <path 
            fillRule="evenodd" 
            d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
        />
        </svg>

        <svg 
            className="bi bi-check check" 
            width="2.5em" 
            height="2.5em" 
            viewBox="0 0 16 16" 
            fillRule="currentColor" 
            xmlns="http://www.w3.org/2000/svg">
        <path 
            fillRule="evenodd" 
            d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
        />
</svg>

      </div>
    );
  }
}

export default SaveCancel;