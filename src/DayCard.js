import React, { Component } from "react";
import "./DayCard.css";

class DayCard extends Component {
  render() {
    return <div className="card">{this.props.day}</div>;
  }
}

export default DayCard;
