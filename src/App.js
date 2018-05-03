import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

import weatherIcons from "./icons.json";

import api from "./Api";
import DayCard from "./DayCard";

import "./App.css";

const url = `https://api.openweathermap.org/data/2.5/forecast?q=London,uk&mode=JSON&units=metric&APPID=${api}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: [],
      cards: [0, 0, 0, 0, 0],
      tempHigh: []
    };
  }

  componentWillMount() {
    axios
      .get(url)
      .then(response => {
        console.log(response);
        const filtered = response.data.list.filter((element, index) => {
          return index % 8 === 0;
        });
        const arr = [],
          icons = [];
        filtered.forEach((element, index) => {
          arr.push(filtered[index].main.temp);
          icons.push(
            "wi wi-day-" + weatherIcons[filtered[index].weather[0].id].icon
          );
        });
        this.setState({
          tempHigh: arr,
          icon: icons
        });
      })
      .catch(error => {
        console.log(error.toString());
      });
  }

  render() {
    return (
      <div className="App">
        {this.state.cards.map((card, index) => {
          return (
            <DayCard
              day={moment()
                .add(index, "days")
                .toString()
                .substring(0, 4)}
              icon={this.state.icon[index]}
              tempHigh={this.state.tempHigh[index] || "loading..."}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
