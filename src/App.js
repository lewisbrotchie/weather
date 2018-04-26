import React, { Component } from "react";
import DayCard from "./DayCard";

import "./App.css";

class App extends Component {
  render() {
    const d = new Date();
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    return (
      <div className="App">
        <DayCard day={weekday[d.getDay()]} />
        <DayCard day={weekday[d.getDay() + 1]} />
        <DayCard day={weekday[d.getDay() + 2]} />
        <DayCard day={weekday[d.getDay() + 3]} />
        <DayCard day={weekday[d.getDay() + 4]} />
        <DayCard day={weekday[d.getDay() + 5]} />
        <DayCard day={weekday[d.getDay() + 6]} />
      </div>
    );
  }
}

export default App;
