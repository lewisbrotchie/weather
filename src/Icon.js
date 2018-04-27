import React, { Component } from "react";

class Icon extends Component {
  render() {
    return <img src={this.props.icon} alt="weather" />;
  }
}

export default Icon;
