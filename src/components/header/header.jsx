import React, { Component } from "react";

import bell from "../../photos/header/bell.svg";
import avatar from "../../photos/header/avatar.jpg";
import arrow from "../../photos/header/arrow.svg";

import "./header.scss";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <input type="search" className="search" placeholder="Search..." />
        <nav className="nav">
          <a href="#" className="menu active">
            Analytics
          </a>
          <a href="#" className="menu">
            Analytics
          </a>
          <a href="#" className="menu">
            Ads Experiments
          </a>
        </nav>
        <img src={bell} className="bell-icon" alt="" />
        <div className="profile">
          <img src={avatar} className="profile-img" alt="" />
          <div className="profile-content">
            <span>Welcome</span>
            <p className="profile-name">
              Karimov Nurullo <img src={arrow} alt="" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
