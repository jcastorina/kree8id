import React, { Component } from "react";

class Cards extends Component {
  state = {};

  render() {
    return (
      <div>
        <img
          src={this.props.image}
          alt="mainCard"
          style={{ height: 320, width: 320 }}
          className="card"
        />
      </div>
    );
  }
}

export default Cards;
