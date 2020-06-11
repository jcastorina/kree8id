import React, { Component } from "react";

class ImageSelect extends Component {
  state = {};

  render() {
    const { clickLeft, clickRight } = this.props;
    return (
      <div>

        <svg 
          onClick={() => {
            clickLeft();
          }}
          className="bi bi-caret-left-fill" 
          width="2em" 
          height="2em" 
          viewBox="0 0 16 16" 
          fillRule="currentColor" 
          xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
        />
        </svg>

        <svg
          onClick={() => {
            clickRight();
          }}
          className="bi bi-caret-right-fill" 
          width="2em" 
          height="2em" 
          viewBox="0 0 16 16" 
          fillRule="currentColor" 
          xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
        />
        </svg>

      </div>
    );
  }
}

export default ImageSelect;
