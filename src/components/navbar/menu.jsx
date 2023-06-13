import react, { Component } from "react";

class Menu extends Component {
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
