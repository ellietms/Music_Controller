import App from "./App";
import React, { Component } from "react";
import { render } from "react-dom";
import CreateRoom from "./CreateRoom";
import RoomJoinPage from "./RoomJoinPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <p>This is Home Page </p>
          </Route>
          <Route path="/join" component={RoomJoinPage} />
          <Route path="/create" component={CreateRoom} />
        </Switch>
      </Router>
    );
  }
}
