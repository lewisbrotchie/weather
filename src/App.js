import React, { Component } from "react";
import moment from "moment";

import DayCard from "./DayCard";

import "./App.css";

const d = new moment(new Date());

class App extends Component {
  render() {
    return (
      <div className="App">
        <DayCard day={d.toString().substring(0, 4)} />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
        />
      </div>
    );
  }
}

export default App;
