import React, { Component } from "react";
import moment from "moment";
import axios from "axios";

import api from "./Api";
import DayCard from "./DayCard";

import Logo from "./logo.svg";

import "./App.css";

const url = `https://api.openweathermap.org/data/2.5/forecast?q=London,uk&mode=JSON&units=metric&APPID=${api}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [0, 0, 0, 0, 0],
      tempHigh: []
    };
  }

  componentWillMount() {
    axios
      .get(url)
      .then(response => {
        console.log(response);
        const filtered = response.data.list.filter((item, index) => {
          return index % 8 === 0;
        });
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
    return (
      <div className="App">
        {this.state.cards.map((card, index) => {
          return (
            <DayCard
              day={moment()
                .add(index, "days")
                .toString()
                .substring(0, 4)}
              icon={Logo}
              tempHigh={this.state.tempHigh[index]}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
