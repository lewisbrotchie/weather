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
      cards: [0, 0, 0, 0, 0],
      tempHigh: [],
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
          return index % 8 === 0;
        });
        console.log(filtered);
        const arr = [];
        filtered.forEach((element, index) => {
          arr.push(filtered[index].main.temp);
        });
        this.setState({
          tempHigh: arr
        });
      })
      .catch(error => {
        console.log(error.toString());
      });
  }
  render() {
    //tomorrow + onwards
    let today = true;
    const cards = this.state.cards.map((card, index) => {
      return today ? (
        <DayCard
          day={d.toString().substring(0, 4)}
          icon={Logo}
          tempHigh={this.state.tempHigh[index]}
        />
      ) : (
        <DayCard
          day={d
            .add(1, "days")
            .toString()
            .substring(0, 4)}
          icon={Logo}
          tempHigh={this.state.tempHigh[index]}
        />
      );
      today = false;
    });
    return <div className="App">{cards}</div>;
  }
}

export default App;
