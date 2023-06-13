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
    main: [
      { img: icon1, title: "Dashboard" },
      { img: icon2, title: "Messages", mes: "3 new" },
      { img: icon3, title: "Reports" },
      { img: icon4, title: "Notifications" },
      { img: icon5, title: "Invoices", notif: "10+" },
    ],
    works: [
      { img: icon6, title: "Bookmarks" },
      { img: icon7, title: "Conferences" },
    ],
    options: [
      { img: icon8, title: "Settings" },
      { img: icon9, title: "About" },
    ],
  };
  render() {
    const { main, works, options } = this.state;
    return (
      <div className="navbar">
        <div className="logo-part">
          <img src={logo} alt="" />
        </div>
        <div className="menus-part">
          <div className="menus-part-title">Main Menu</div>
          {main.map(({ img, title, mes, notif }, idx) => (
            <Menu img={img} title={title} mes={mes} notif={notif} key={idx} />
          ))}
          ;<div className="menus-part-title">WORKS</div>
          {works.map(({ img, title, mes, notif }, idx) => (
            <Menu img={img} title={title} mes={mes} notif={notif} key={idx} />
          ))}
          ;<div className="menus-part-title">OPTIONS</div>
          {options.map(({ img, title, mes, notif }, idx) => (
            <Menu img={img} title={title} mes={mes} notif={notif} key={idx} />
          ))}
          ;
          <Menu img={icon10} title={"Light Mode"} />
        </div>
      </div>
    );
  }
}

export default Navbar;
