import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
class FindWarrant extends Component {
  state = {
    reportNumber: ""
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const oldWarrant = {
      reportNumber: this.state.reportNumber
    };
    axios
      .get("/api/warrantData/warrant/:reportNumber", oldWarrant)
      .then(num => {
        console.log(num);
      });
  };

  render() {
    return (
      <div>
        <Container>
          <Jumbotron className="mt-4">
            <Form>
              <FormGroup>
                <h4>Find a warrant</h4>
                <Input
                  type="text"
                  name="reportNumber"
                  placeholder="Type in report number"
                  value={this.state.reportNumber}
                  onChange={this.handleInput}
                />
                <Button color="primary">Find</Button>{" "}
              </FormGroup>
            </Form>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default FindWarrant;
