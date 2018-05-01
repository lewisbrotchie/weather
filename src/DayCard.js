import React, { Component } from "react";

import Icon from "./Icon";
import Temp from "./Temp";

import "./DayCard.css";

class DayCard extends Component {
  render() {
    return (
      <div className="card">
        {this.props.day}
        <Icon icon={this.props.icon} />
        <Temp tempHigh={this.props.tempHigh} />
      </div>
    );
  }
}

export default DayCard;
