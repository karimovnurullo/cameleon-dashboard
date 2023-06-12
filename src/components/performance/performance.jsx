import React, { Component } from "react";

import Card from "./card";
import users from "../../photos/performance/3User.svg";
import network from "../../photos/performance/network.svg";
import show from "../../photos/performance/show.svg";
import networkGreen from "../../photos/performance/network-green.svg";
import networkRed from "../../photos/performance/network-red.svg";
import chart from "../../photos/performance/chart.svg";
import calendar from "../../photos/performance/calendar.svg";

import "./performance.scss";

class Performance extends Component {
  state = {
    cards: [
      { name: "Visitors", nameImg: users, num: "92,680", miniNum: "+3,840 (26,80%)", img: network },
      { name: "Page views", nameImg: show, num: "580.5K", miniNum: "+210K (16,20%)", img: networkGreen },
      { name: "Bounce rates", nameImg: chart, num: "15.43%", miniNum: "-0.74 (0.74%)", img: networkRed },
    ],
  };
  render() {
    const { cards } = this.state;
    return (
      <div className="performance">
        <div className="performance-top">
          <div>
            <h3 className="performance-title">Site performance</h3>
            <p className="performance-subtitle">Today vs 7 days ago</p>
          </div>
          <div className="date">
            <img src={calendar} alt="" />
            <p>June 03, 22 to July 02, 22</p>
          </div>
        </div>
        <div className="performance-cards">
          {cards.map(({ name, nameImg, num, miniNum, img }) => (
            <Card name={name} nameImg={nameImg} num={num} miniNum={miniNum} img={img} />
          ))}
        </div>
      </div>
    );
  }
}

export default Performance;
