import React, { Component } from "react";

import Card from "./card";
import users from "../../photos/performance/3User.svg";
import network from "../../photos/performance/network.svg";
import show from "../../photos/performance/show.svg";
import networkGreen from "../../photos/performance/network-green.svg";
import networkRed from "../../photos/performance/network-red.svg";
import chart from "../../photos/performance/chart.svg";
import calendar from "../../photos/performance/calendar.svg";
import card from "../../photos/statistics/card.svg";
import addUser from "../../photos/statistics/add-user.svg";
import activity from "../../photos/statistics/Activity.svg";

import "./statistics.scss";

class Statistics extends Component {
  state = {
    cards: [
      { name: "New users", nameImg: addUser, num: "17,805", miniNum: "+1,500 (4,17%)" },
      { name: "Online users", nameImg: activity, num: "1,846", miniNum: "+530 (8,38%)", img: networkGreen },
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
          <img src={card} alt="" />
          {cards.map(({ name, nameImg, num, miniNum, img }) => (
            <Card name={name} nameImg={nameImg} num={num} miniNum={miniNum} img={img} />
          ))}
          <div className="view-all">View all {">"}</div>
        </div>
      </div>
    );
  }
}

export default Statistics;
