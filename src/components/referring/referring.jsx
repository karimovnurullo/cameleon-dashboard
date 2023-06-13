import React, { Component } from "react";

import "./referring.scss";

class Referring extends Component {
  render() {
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
            <tbody>
              <tr>
                <td>1.</td>
                <td>Stack Overflow</td>
                <td>https://stackoverflow.com/question/..</td>
                <td>120</td>
                <td>nofollow, noopener</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Referring;
