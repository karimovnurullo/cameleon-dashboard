import react, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.img = props.img;
    this.title = props.title;
  }
  render() {
    return (
      <a href="#" className="menu">
        <img src={this.img} alt="" />
        <div className="name">{this.title}</div>
      </a>
    );
  }
}
export default Menu;
