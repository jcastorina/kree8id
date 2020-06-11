import React, { Component } from "react";
import Image from "./ImageComponent";

class Images extends Component {
  state = {};
  render() {
    let off = false
    const { images, imgNum, clickTile } = this.props;
    typeof images[0] === undefined ? off = false : off = true
      
    
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