import React from "react";
import Navbar from "../components/navber/navbar";
import Main from "../components/main/main";
import "./app.scss";


export default class App extends React.Component {
  render() {
    return <div className="app">
      <Navbar/>
      <Main/>
    </div>;
  }
}
