import React, { Component } from "react";

import "./referring.scss";
import List from "./list";

class Referring extends Component {
  state = {
    list: [
      {
        num: "1.",
        title: "Stack Overflow",
        link: "https://stackoverflow.com/question/..",
        clicks: "120",
        type: "nofollow, noopener",
      },
      {
        num: "2.",
        title: "Youtube",
        link: "https://www.youtube.com/?v=7wB1j..",
        clicks: "14,522",
        type: "nofollow",
      },
      {
        num: "3.",
        title: "Github",
        link: "https://github.com/andrew/tabler-x..",
        clicks: "36",
        type: "nofollow",
      },
      {
        num: "4.",
        title: "Gosh William",
        link: "https://gwilliam.co/blog/capture-fro..",
        clicks: "580",
        type: "ugc",
      },
      {
        num: "5.",
        title: "Stack Overflow",
        link: "https://stackoverflow.com/question/..",
        clicks: "112",
        type: "nofollow, noopener",
      },
      {
        num: "6.",
        title: "Stack Overflow",
        link: "https://stackoverflow.com/question/..",
        clicks: "4",
        type: "nofollow, noopener",
      },
      {
        num: "7.",
        title: "Stack Overflow",
        link: "https://stackoverflow.com/question/..",
        clicks: "51",
        type: "nofollow, noopener",
      },
      {
        num: "8.",
        title: "Stack Overflow",
        link: "https://stackoverflow.com/question/..",
        clicks: "68",
        type: "nofollow, noopener",
      },
    ],
  };
  render() {
    const { list } = this.state;
    return (
      <div className="referring">
        <div>
          <h3 className="referring-title">Top referring sites</h3>
          <p className="referring-subtitle">Outbond links that come to your site</p>
        </div>
        <div className="referring-list">
          <table className="table">
            <thead>
              <tr>
                <td>No</td>
                <td>Site title</td>
                <td>Link</td>
                <td>Total clicks</td>
                <td>Referrer type</td>
              </tr>
            </thead>
            <tbody className="tbody">
              {list.map(({ num, title, link, clicks, type }, idx) => (
                <List num={num} title={title} link={link} clicks={clicks} type={type} key={idx} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Referring;
