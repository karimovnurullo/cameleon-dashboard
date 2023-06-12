import React, { Component } from "react";

import Menu from "./menu";

import icon1 from "../../photos/navbar/icon1.svg";
import icon2 from "../../photos/navbar/icon2.svg";
import icon3 from "../../photos/navbar/icon3.svg";
import icon4 from "../../photos/navbar/icon4.svg";
import icon5 from "../../photos/navbar/icon5.svg";
import icon6 from "../../photos/navbar/icon6.svg";
import icon7 from "../../photos/navbar/icon7.svg";
import icon8 from "../../photos/navbar/icon8.svg";
import icon9 from "../../photos/navbar/icon9.svg";
import icon10 from "../../photos/navbar/icon10.svg";
import logo from "../../photos/navbar/logo.svg";
import "./navbar.scss";

class Navbar extends Component {
  state = {
    menus: [
      { img: icon1, title: "Dashboard" },
      { img: icon2, title: "Messages" },
      { img: icon3, title: "Reports" },
      { img: icon4, title: "Notifications" },
      { img: icon5, title: "Invoices" },
    ],
  };
  render() {
    const { menus } = this.state;
    return (
      <div className="navbar">
        <div className="logo-part">
          <img src={logo} alt="" />
        </div>
        <div className="menus-part">
          <div className="menus-part-title">Main Menu</div>
          {menus.map(({ img, title }, idx) => (
            <Menu img={img} title={title} key={idx} />
          ))}
          ;
        </div>
      </div>
    );
  }
}

export default Navbar;
