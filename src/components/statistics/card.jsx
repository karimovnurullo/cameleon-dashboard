import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, nameImg, num, miniNum, img } = this.props;
    return (
      <div className="card">
        <div className="top-part">
          <h3>{name}</h3>
          <img src={nameImg} alt="" />
        </div>
        <div className="main-number">{num}</div>
        <div className="bottom-part">
          <h3>{miniNum}</h3>
          <img src={img} alt="" />
        </div>
      </div>
    );
  }
}

export default Card;
