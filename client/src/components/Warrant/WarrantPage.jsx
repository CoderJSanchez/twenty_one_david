import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";

class WarrantPage extends Component {
  state = {
    month: "",
    day: "",
    year: "",
    time: "",
    address: "",
    officerLast: "",
    officerID: "",
    officerWitnessLast: "",
    officerWitnessID: "",
    civilianWitnessFull: "",
    civilianWitnessDOB: "",
    offenderLast: "",
    offenderFirst: "",
    race: "",
    sex: "",
    dob: "",
    dl: "",
    height: "",
    weight: "",
    hairColor: ""
  };
  handleInputs = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newWarrantForm = {
      month: this.state.month,
      day: this.state.day,
      year: this.state.year,
      time: this.state.time,
      officerLast: this.state.officerLast,
      officerID: this.state.officerID,
      offenderFirst: this.state.offenderFirst,
      offenderLast: this.state.offenderLast,
      race: this.state.race,
      sex: this.state.sex,
      dob: this.state.dob,
      dl: this.state.dl,
      height: this.state.height,
      weight: this.state.weight,
      hairColor: this.state.hairColor
    };
    axios
      .post("/api/warrantData/warrant", newWarrantForm)
      .then(warr => (window.location = "/"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Row>
              <h3>Date</h3>
            </Row>
            <Row className="mt-3">
              <Col className="mb-3">
                <Input
                  type="text"
                  name="month"
                  value={this.state.month}
                  placeholder="Month"
                  onChange={this.handleInputs}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="day"
                  placeholder="Day"
                  value={this.state.day}
                  onChange={this.handleInputs}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="year"
                  placeholder="Year"
                  value={this.state.year}
                  onChange={this.handleInputs}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="time"
                  placeholder="Time"
                  value={this.state.time}
                  onChange={this.handleInputs}
                />
              </Col>
            </Row>
            <Row>
              <h3>Address</h3>
            </Row>
            <Row>
              <Col xs="6">
                <Input
                  type="text"
                  name="address"
                  placeholder="Address of Offense"
                  value={this.state.address}
                  onChange={this.handleInputs}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <h4>Affiant Officer</h4>
            </Row>
            <Row className="mt-3">
              <Col xs="6">
                <Input
                  type="text"
                  name="officerLast"
                  placeholder="Officer Applying for Warrant"
                  value={this.state.officerLast}
                  onChange={this.handleInputs}
                />
              </Col>
              <Col xs="6">
                <Input
                  type="text"
                  name="officerID"
                  placeholder="Officer ID Number"
                  value={this.state.officerID}
                  onChange={this.handleInputs}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <h4>Officer Witness</h4>
            </Row>
            <Row className="mt-3">
              <Col xs="6">
                <Input
                  type="text"
                  name="officerWitnessLast"
                  placeholder="Officer witness"
                  value={this.state.officerWitnessLast}
                  onChange={this.handleInputs}
                />
              </Col>
              <Col xs="6">
                <Input
                  type="text"
                  name="officerWitnessID"
                  placeholder="Officer Witness ID "
                  value={this.state.officerWitnessID}
                  onChange={this.handleInputs}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <h4>Civilian Witness</h4>
            </Row>
            <Row className="mt-3">
              <Col xs="6">
                <Input
                  type="text"
                  name="civilianWitnessFull"
                  placeholder="Civilian Witness full name"
                  value={this.state.civilianWitnessFull}
                  onChange={this.handleInputs}
                />
              </Col>
              <Col xs="6">
                <Input
                  type="text"
                  name="civilianWitnessDOB"
                  placeholder="Civilian Witness DOB "
                  value={this.state.civilianWitnessDOB}
                  onChange={this.handleInputs}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <h4>Offender Info</h4>
            </Row>
            <Row className="mt-3">
              <Col className="mb-3">
                <Input
                  type="text"
                  name="offenderFirst"
                  placeholder="First Name"
                  value={this.state.offenderFirst}
                  onChange={this.handleInputs}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="offenderLast"
                  placeholder="Last Name"
                  onChange={this.handleInputs}
                  value={this.state.offenderLast}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="race"
                  placeholder="Race"
                  onChange={this.handleInputs}
                  value={this.state.race}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="sex"
                  placeholder="Sex"
                  onChange={this.handleInputs}
                  value={this.state.sex}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="mb-3">
                <Input
                  type="text"
                  name="dob"
                  placeholder="D.O.B."
                  onChange={this.handleInputs}
                  value={this.state.dob}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="dl"
                  placeholder="DL/ID"
                  onChange={this.handleInputs}
                  value={this.state.dl}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="height"
                  placeholder="Height"
                  onChange={this.handleInputs}
                  value={this.state.height}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="weight"
                  placeholder="Weight"
                  onChange={this.handleInputs}
                  value={this.state.weight}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="hairColor"
                  placeholder="Hair Color"
                  onChange={this.handleInputs}
                  value={this.state.hairColor}
                />
              </Col>
            </Row>
          </FormGroup>
          <h6>Who observed offender driving?</h6>
          <FormGroup check>
            <Row>
              <Label check>
                <Input type="checkbox" /> Officer
              </Label>
            </Row>
            <Row>
              <Label check>
                <Input type="checkbox" /> Civilian
              </Label>
            </Row>
          </FormGroup>
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-primary btn-lg btn-block"
          >
            Submit
          </button>
        </Form>
      </Container>
    );
  }
}

export default WarrantPage;
