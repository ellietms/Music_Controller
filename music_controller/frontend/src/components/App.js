import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import CreateRoom from "./CreateRoom";
import RoomJoinPage from "./RoomJoinPage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

const divContainer = document.getElementById("app");
render(<App />, divContainer);
