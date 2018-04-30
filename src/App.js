import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

import api from "./Api";
import DayCard from "./DayCard";

import Logo from "./logo.svg";

import "./App.css";

const d = new moment(new Date());
const today = new moment(new Date());
const url = `https://api.openweathermap.org/data/2.5/forecast?q=London,uk&mode=JSON&units=metric&APPID=${api}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [0, 0, 0, 0],
      tempHigh: [0, 0, 0, 0, 0],
      tempLow: [0, 0, 0, 0, 0]
    };
  }

  componentDidMount() {
    let dataIndex = 0;
    axios
      .get(url)
      .then(response => {
        console.log(response);
        const filtered = response.data.list.filter((item, index) => {
          return (
            response.data.list[index].id ===
            (response.data.list[index].id / 8) % 0
          );
        });
        console.log(filtered);
        const tempHigh = this.state.tempHigh.map((temp, index) => {
          return response.data.list[dataIndex].main.temp_max;
        });
        console.log(tempHigh);
      })
      .catch(error => {
        console.log(error.toString());
      });
  }
  render() {
    //tomorrow + onwards
    const cards = this.state.cards.map((card, index) => {
      return (
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
          icon={Logo}
          tempHigh={"hi: " + this.state.tempHigh[index]}
          tempLow={"lo: " + this.state.tempLow[index]}
        />
      );
    });
    return (
      <div className="App">
        <DayCard
          day={today.toString().substring(0, 4) + "(Today)"}
          icon={Logo}
          tempHigh={"hi: " + this.state.tempHigh[0]}
          tempLow={"low: " + this.state.tempLow[0]}
        />
        {cards}
      </div>
    );
  }
}

export default App;
