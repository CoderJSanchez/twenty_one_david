import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import axios from "axios";

class FindWarrant extends Component {
  state = {
    reportNumber: []
  };

  componentWillMount = () => {
    axios.get("/api/warrantData/warrant/findwarrant").then(response => {
      const warrantInfo = response.data;
      const loop = warrantInfo.map(num => {
        return num.reportNumber;
      });
      console.log(loop);
    });
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Find more stuff</h1>
        </Jumbotron>
        <h1>Find more stuff</h1>
        <Jumbotron>
          <h1>{this.state.reportNumber}</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default FindWarrant;
