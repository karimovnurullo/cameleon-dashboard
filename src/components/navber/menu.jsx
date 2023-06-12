import react, { Component } from "react";

class Menu extends Component {
  // constructor(props) {
  //   super(props);
  //   this.img = props.img;
  //   this.title = props.title;
  //   this.new = props.new;
  //   this.notif = props.notif;
  // }
  render() {
    const { img, title, mes, notif } = this.props;
    const mesClassName = `${mes ? "new " : "none"}`;
    const notifClassName = `${notif ? "notif" : "none"}`;
    return (
      <a href="#" className="menu">
        <img src={img} alt="" />
        <div className="name">{title}</div>
        <div className={notifClassName}>{notif}</div>
        <div className={mesClassName}>{mes}</div>
      </a>
    );
  }
}
export default Menu;
