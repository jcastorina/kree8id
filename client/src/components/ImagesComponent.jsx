import React, { Component } from "react";
import Image from "./ImageComponent";

class Images extends Component {
  state = {};
  render() {

    const { images, imgNum, clickTile } = this.props;

      
    
    return (
      <div className="row">
        {images.map((image) => (
            <Image
            key={image.id}
            value={image.value}
            imgNum={imgNum}
            clickTile={clickTile}
            id={image.id}
   
            />
        ))}
      </div>
    );
  }
}

export default Images;