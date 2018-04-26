import React, { Component } from "react";

import Icon from "./Icon";
import Temp from "./Temp";

import "./DayCard.css";

class DayCard extends Component {
  render() {
    return (
      <div className="card">
        {this.props.day}
        <Icon />
        <Temp tempHigh={this.props.tempHigh} tempLow={this.props.tempLow} />
      </div>
    );
  }
}

export default DayCard;
