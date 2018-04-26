import React, { Component } from "react";
import DayCard from "./DayCard";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DayCard day="Monday" />
        <DayCard day="Tuesday" />
        <DayCard day="Wednesday" />
        <DayCard day="Thursday" />
        <DayCard day="Friday" />
        <DayCard day="Saturday" />
        <DayCard day="Sunday" />
      </div>
    );
  }
}

export default App;
