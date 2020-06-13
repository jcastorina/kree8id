import React, { Component } from "react";

class Image extends Component {
  state = {};
  drawBox(im, i) {
    let classes = "m-2";
    if (im === i) {
      classes += " box";
    } else {
      classes += " bump";
    }
    return classes;
  }
  render() {
    const { value, imgNum, id, clickTile } = this.props;
    return (
      <div>
        <img
          onClick={() => {
            clickTile(id);
          }}
          src={value}
          alt="tile"
          style={{ height: 64, width: 64, objectFit: "cover" }}
          className={this.drawBox(imgNum, parseInt(id))}
        />
      </div>
    );
  }
}

export default Image;
