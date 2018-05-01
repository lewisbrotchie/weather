import React, { Component } from "react";

const degree = "\u00B0";

class Temp extends Component {
  render() {
    return (
      <div>
        <div style={{ float: "center", fontSize: "8pt" }}>
          {this.props.tempHigh + degree}
        </div>
      </div>
    );
  }
}

export default Temp;
