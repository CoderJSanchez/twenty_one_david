import React, { Component } from "react";
class PrintButton extends Component {
  state = {};

  handlePrint = () => {
    window.print();
    return false;
  };
  render() {
    return (
      <button
        className="printButton btn btn-outline-success"
        onClick={this.handlePrint}
      >
        Print Page
      </button>
    );
  }
}

export default PrintButton;
