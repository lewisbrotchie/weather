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
      cityName: " ",
      located: false,
      latitude: 0,
      longitude: 0,
      icon: [],
      cards: [0, 0, 0, 0, 0],
      tempHigh: []
    };
  }

  componentWillMount() {
    const locatedURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${
      this.state.latitude
    }&lon=${this.state.longitude}&mode=JSON&units=metric&APPID=${api}`;

    axios
      .get(this.state.located ? locatedURL : url)
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
          cityName: response.data.city.name,
          tempHigh: arr,
          icon: icons
        });
      })
      .then(this.getLocation())
      .catch(error => {
        console.log(error.toString());
      });
  }
  getLocation() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.setState({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          located: true
        });
        console.log(pos.coords.latitude);
        console.log(pos.coords.longitude);
      },
      err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      },
      {
        enableHighAccuracy: true
      }
    );
  }

  render() {
    return (
      <div>
        <h1 align="center">{this.state.cityName}</h1>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2%" }}
        >
          <button
            onClick={() => {
              this.componentWillMount();
            }}
          >
            Locate me, bitch
          </button>
        </div>
        <div className="Cards">
          {this.state.cards.map((card, index) => {
            return (
              <DayCard
                day={moment()
                  .add(index, "days")
                  .toString()
                  .substring(0, 4)}
                icon={this.state.icon[index]}
                tempHigh={this.state.tempHigh[index] || "loading..."}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
