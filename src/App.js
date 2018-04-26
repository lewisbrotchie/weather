import React, { Component } from "react";
import moment from "moment";

import DayCard from "./DayCard";

import "./App.css";

const d = new moment(new Date());

class App extends Component {
  render() {
    return (
      <div className="App">
        <DayCard
          day={d.toString().substring(0, 4)}
          tempHigh="24"
          tempLow="12"
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
          tempHigh="25"
          tempLow="13"
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
          tempHigh="26"
          tempLow="14"
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
          tempHigh="27"
          tempLow="15"
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
          tempHigh="28"
          tempLow="16"
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
          tempHigh="29"
          tempLow="17"
        />
      </div>
    );
  }
}

export default App;
