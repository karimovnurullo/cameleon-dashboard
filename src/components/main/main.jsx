import React, { Component } from "react";
import "./main.scss";
import Header from "../header/header";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <h3 className="main-title">Dashboard</h3>
      </div>
    );
  }
}

export default Main;
