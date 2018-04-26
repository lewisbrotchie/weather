import React, { Component } from "react";

import Icon from "./Icon";

import "./DayCard.css";

class DayCard extends Component {
  render() {
    return (
      <div className="card">
        {this.props.day}
        <Icon />
      </div>
    );
  }
}

export default DayCard;
