import React, { Component } from "react";

import "./WeatherIcons/weather-icons.min.css";

class Icon extends Component {
  render() {
    return <i className={this.props.icon} />;
  }
}

export default Icon;
