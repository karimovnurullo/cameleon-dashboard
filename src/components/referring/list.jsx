import React, { Component } from "react";

class List extends Component {
  render() {
    const { num, title, link, clicks, type } = this.props;
    return (
      <tr className="row">
        <td>{num}</td>
        <td>{title}</td>
        <td>{link}</td>
        <td>{clicks}</td>
        <td>{type}</td>
      </tr>
    );
  }
}

export default List;
