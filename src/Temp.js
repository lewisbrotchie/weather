import React, { Component } from "react";

const degree = "\u00B0";

class Temp extends Component {
  render() {
    return (
      <p>
        {this.props.tempHigh + degree + "  ||  " + this.props.tempLow + degree}
      </p>
    );
  }
}

export default Temp;
