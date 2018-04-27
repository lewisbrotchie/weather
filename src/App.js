import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

import api from "./Api";
import DayCard from "./DayCard";

import Logo from "./logo.svg";

import "./App.css";

const d = new moment(new Date());
const url = `https://api.openweathermap.org/data/2.5/forecast?q=London,uk&mode=JSON&units=metric&APPID=${api}`;

class App extends Component {
  componentDidMount() {
    axios
      .get(url)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.toString());
      });
  }
  render() {
    return (
      <div className="App">
        <DayCard
          day={d.toString().substring(0, 4)}
          icon={Logo}
          tempHigh="24"
          tempLow="12"
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
          icon={Logo}
          tempHigh="25"
          tempLow="13"
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
          icon={Logo}
          tempHigh="26"
          tempLow="14"
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
          icon={Logo}
          tempHigh="27"
          tempLow="15"
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
          icon={Logo}
          tempHigh="28"
          tempLow="16"
        />
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
          icon={Logo}
          tempHigh="29"
          tempLow="17"
        />
      </div>
    );
  }
}

export default App;
