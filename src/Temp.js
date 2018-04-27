import React, { Component } from "react";

const degree = "\u00B0";

class Temp extends Component {
  render() {
    return (
      <div>
        <div style={{ float: "left", marginRight: "15px", fontSize: "8pt" }}>
          {this.props.tempHigh + degree}
        </div>
        <div style={{ float: "left", fontSize: "8pt" }}>
          {this.props.tempLow + degree}
        </div>
      </div>
    );
  }
}

export default Temp;
