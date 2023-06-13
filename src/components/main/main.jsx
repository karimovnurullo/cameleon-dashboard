import React, { Component } from "react";
import "./main.scss";
import Header from "../header/header";
import Performance from "../performance/performance";
import Statistics from "../statistics/statistics";
import Referring from "../referring/referring";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <h3 className="main-title">Dashboard</h3>
        <div className="dashboard">
          <Performance />
          <Statistics />
          <Referring />
        </div>
      </div>
    );
  }
}

export default Main;
