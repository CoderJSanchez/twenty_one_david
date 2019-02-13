import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

class WarrantPage extends Component {
  state = {
    reportNumber: "",
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
    hair: "",
    drivingBehaviorTextBox: "",
    countyOfWarrant: "",
    countyOfOffense: "",
    civilianCheckBox: false,
    officerCheckBox: false,
    suspectAdmittedBox: false,
    alcoholStrong: false,
    alcoholModerate: false,
    alcoholFaint: false,
    alcoholNone: false,
    eyesBloodshot: false,
    eyesRedPink: false,
    eyesGlassy: false,
    eyesWatery: false,
    eyesDilated: false,
    eyesNormal: false,
    speechThick: false,
    speechIncoherent: false,
    speechSlurred: false,
    speechSlow: false,
    speechMumbled: false,
    speechStuttered: false,
    speechTalkative: false,
    speechRapid: false,
    speechRepetitive: false,
    speechFair: false,
    speechGood: false,
    attArgumentative: false,
    attCombative: false,
    attProfane: false,
    attSarcastic: false,
    attInsulting: false,
    attCooperative: false,
    attCocky: false,
    attLaughing: false,
    attCarefree: false,
    attIndifferent: false,
    attSleepy: false,
    attPolite: false,
    attSilent: false,
    attReserved: false,
    attCalm: false,
    attTalkative: false,
    attAnxious: false,
    attExcited: false,
    attConfused: false,
    attUninhibited: false,
    attMoodswing: false,
    appDisorderly: false,
    appOrderly: false,
    appUrine: false,
    appVomit: false,
    balFalling: false,
    balUnsteady: false,
    balSwaying: false,
    balSupport: false,
    balFair: false,
    balGood: false,
    walkFalling: false,
    walkStagg: false,
    walkSwaying: false,
    walkHeavy: false,
    walkFair: false,
    walkGood: false,
    walkSupport: false,
    turnFalling: false,
    turnStaggering: false,
    turnSwaying: false,
    turnHesitant: false,
    turnFair: false,
    turnGood: false,
    trainedAffient: false,
    suspectRefused: false,
    sfstOtherTests: false,
    sfstOfficer: false,
    sfstAffient: false,
    suspectInjured: false,
    hgnLackLeft: false,
    hgnLackRight: false,
    hgnDisLeft: false,
    hgnDisRight: false,
    hgnOnsetLeft: false,
    hgnOnsetRight: false
  };
  handleInputs = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckboxChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newWarrantForm = {
      reportNumber: this.state.reportNumber.toUpperCase(),
      countyOfWarrant: this.state.countyOfWarrant.toUpperCase(),
      countyOfOffense: this.state.countyOfOffense.toUpperCase(),
      month: this.state.month.toUpperCase(),
      day: this.state.day.toUpperCase(),
      year: this.state.year,
      time: this.state.time,
      address: this.state.address.toUpperCase(),
      drivingBehaviorTextBox: this.state.drivingBehaviorTextBox,
      officerLast: this.state.officerLast.toUpperCase(),
      officerID: this.state.officerID,
      officerWitnessLast: this.state.officerWitnessLast.toUpperCase(),
      officerWitnessID: this.state.officerWitnessID,
      civilianWitnessFull: this.state.civilianWitnessFull.toUpperCase(),
      civilianWitnessDOB: this.state.civilianWitnessDOB,
      offenderFirst: this.state.offenderFirst.toUpperCase(),
      offenderLast: this.state.offenderLast.toUpperCase(),
      race: this.state.race.toUpperCase(),
      sex: this.state.sex.toUpperCase(),
      dob: this.state.dob,
      dl: this.state.dl,
      height: this.state.height,
      weight: this.state.weight,
      hair: this.state.hair.toUpperCase(),
      civilianCheckBox: this.state.civilianCheckBox,
      officerCheckBox: this.state.officerCheckBox,
      suspectAdmittedBox: this.state.suspectAdmittedBox,
      alcoholStrong: this.state.alcoholStrong,
      alcoholModerate: this.state.alcoholModerate,
      alcoholFaint: this.state.alcoholFaint,
      alcoholNone: this.state.alcoholNone,
      eyesBloodshot: this.state.eyesBloodshot,
      eyesRedPink: this.state.eyesRedPink,
      eyesGlassy: this.state.eyesGlassy,
      eyesWatery: this.state.eyesWatery,
      eyesDilated: this.state.eyesDilated,
      eyesNormal: this.state.eyesNormal,
      speechThick: this.state.speechThick,
      speechIncoherent: this.state.speechIncoherent,
      speechSlurred: this.state.speechSlurred,
      speechSlow: this.state.speechSlow,
      speechMumbled: this.state.speechMumbled,
      speechStuttered: this.state.speechStuttered,
      speechTalkative: this.state.speechTalkative,
      speechRapid: this.state.speechRapid,
      speechRepetitive: this.state.speechRepetitive,
      speechFair: this.state.speechFair,
      speechGood: this.state.speechGood,
      attArgumentative: this.state.attArgumentative,
      attCombative: this.state.attCombative,
      attProfane: this.state.attProfane,
      attSarcastic: this.state.attSarcastic,
      attInsulting: this.state.attInsulting,
      attCooperative: this.state.attCooperative,
      attCocky: this.state.attCocky,
      attLaughing: this.state.attLaughing,
      attCarefree: this.state.attCarefree,
      attIndifferent: this.state.attIndifferent,
      attSleepy: this.state.attSleepy,
      attPolite: this.state.attPolite,
      attSilent: this.state.attSilent,
      attReserved: this.state.attReserved,
      attCalm: this.state.attCalm,
      attTalkative: this.state.attTalkative,
      attAnxious: this.state.attAnxious,
      attExcited: this.state.attExcited,
      attConfused: this.state.attConfused,
      attUninhibited: this.state.attUninhibited,
      attMoodswing: this.state.attMoodswing,
      appDisorderly: this.state.appDisorderly,
      appOrderly: this.state.appOrderly,
      appUrine: this.state.appUrine,
      appVomit: this.state.appVomit,
      balFalling: this.state.balFalling,
      balUnsteady: this.state.balUnsteady,
      balSwaying: this.state.balSwaying,
      balSupport: this.state.balSupport,
      balFair: this.state.balFair,
      balGood: this.state.balGood,
      walkFalling: this.state.walkFalling,
      walkSwaying: this.state.walkSwaying,
      walkHeavy: this.state.walkHeavy,
      walkFair: this.state.walkFair,
      walkGood: this.state.walkGood,
      walkSupport: this.state.walkSupport,
      turnFalling: this.state.turnFalling,
      turnStaggering: this.state.turnStaggering,
      turnSwaying: this.state.turnSwaying,
      turnHesitant: this.state.turnHesitant,
      turnFair: this.state.turnFair,
      turnGood: this.state.turnGood,
      trainedAffient: this.state.trainedAffient,
      suspectRefused: this.state.suspectRefused,
      sfstOtherTests: this.state.sfstOtherTests,
      sfstOfficer: this.state.sfstOfficer,
      sfstAffient: this.state.sfstAffient,
      suspectInjured: this.state.suspectInjured,
      hgnLackLeft: this.state.hgnLackLeft,
      hgnLackRight: this.state.hgnLackRight,
      hgnDisLeft: this.state.hgnDisLeft,
      hgnDisRight: this.state.hgnDisRight,
      hgnOnsetLeft: this.state.hgnOnsetLeft,
      hgnOnsetRight: this.state.hgnOnsetRight
    };
    axios
      .post("/api/warrantData/warrant", newWarrantForm)
      .then(warr => (window.location = "/warrantfinal"))
      .catch(err => console.log(err));

    this.setState({
      reportNumber: "",
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
      hair: "",
      drivingBehaviorTextBox: "",
      countyOfWarrant: "",
      countyOfOffense: "",
      civilianCheckBox: false,
      officerCheckBox: false,
      suspectAdmittedBox: false,
      alcoholStrong: false,
      alcoholModerate: false,
      alcoholFaint: false,
      alcoholNone: false,
      eyesBloodshot: false,
      eyesRedPink: false,
      eyesGlassy: false,
      eyesWatery: false,
      eyesDilated: false,
      eyesNormal: false,
      speechThick: false,
      speechIncoherent: false,
      speechSlurred: false,
      speechSlow: false,
      speechMumbled: false,
      speechStuttered: false,
      speechTalkative: false,
      speechRapid: false,
      speechRepetitive: false,
      speechFair: false,
      speechGood: false,
      attArgumentative: false,
      attCombative: false,
      attProfane: false,
      attSarcastic: false,
      attInsulting: false,
      attCooperative: false,
      attCocky: false,
      attLaughing: false,
      attCarefree: false,
      attIndifferent: false,
      attSleepy: false,
      attPolite: false,
      attSilent: false,
      attReserved: false,
      attCalm: false,
      attTalkative: false,
      attAnxious: false,
      attExcited: false,
      attConfused: false,
      attUninhibited: false,
      attMoodswing: false,
      appDisorderly: false,
      appOrderly: false,
      appUrine: false,
      appVomit: false,
      balFalling: false,
      balUnsteady: false,
      balSwaying: false,
      balSupport: false,
      balFair: false,
      balGood: false,
      walkFalling: false,
      walkStagg: false,
      walkSwaying: false,
      walkHeavy: false,
      walkFair: false,
      walkGood: false,
      walkSupport: false,
      turnFalling: false,
      turnStaggering: false,
      turnSwaying: false,
      turnHesitant: false,
      turnFair: false,
      turnGood: false,
      trainedAffient: false,
      suspectRefused: false,
      sfstOtherTests: false,
      sfstOfficer: false,
      sfstAffient: false,
      suspectInjured: false,
      hgnLackLeft: false,
      hgnLackRight: false,
      hgnDisLeft: false,
      hgnDisRight: false,
      hgnOnsetLeft: false,
      hgnOnsetRight: false
    });
  };

  render() {
    return (
      <Container>
        <Jumbotron className="mt-4">
          <h3>Warrant Page Instructions</h3>
          <h6>
            Fill in each box that suits your situation with the requested
            information. When you click submit, a complete warrant will be
            generated that you can view and print. Each page will be formated
            when printed.
          </h6>
        </Jumbotron>
        <Form>
          <FormGroup>
            <div className="row">
              <Col md="4">
                <h4>Report Number</h4>
                <Input
                  className="mb-3"
                  type="text"
                  name="reportNumber"
                  placeholder="20xxRxxxxx"
                  value={this.state.reportNumber}
                  onChange={this.handleInputs}
                />
              </Col>
            </div>
            <Row>
              <Col md="6">
                <h4>County of Warrant Execution</h4>
                <Input
                  className="mb-3"
                  type="text"
                  name="countyOfWarrant"
                  placeholder="Where warrant will execute"
                  value={this.state.countyOfWarrant}
                  onChange={this.handleInputs}
                />
              </Col>

              <Col md="6">
                <h4>County of Offense</h4>
                <Input
                  className="mb-3"
                  type="text"
                  name="countyOfOffense"
                  placeholder="Where offense happened"
                  value={this.state.countyOfOffense}
                  onChange={this.handleInputs}
                />
              </Col>
            </Row>
            <Row>
              <h4>Date</h4>
            </Row>
            <Row>
              <Col className="mb-3">
                <Input
                  type="text"
                  name="month"
                  value={this.state.month}
                  placeholder="Month - 'January' "
                  onChange={this.handleInputs}
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="day"
                  placeholder="Day - ex. '21st'"
                  value={this.state.day}
                  onChange={this.handleInputs}
                />
              </Col>
              <Col>
                <Input
                  type="year"
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
              <h4>Address</h4>
            </Row>
            <Row>
              <Col xs="6">
                <Input
                  className="mb-3"
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
            <Row>
              <Col xs="6">
                <Input
                  type="text"
                  className="mb-3"
                  name="officerLast"
                  placeholder="Officer Applying for Warrant"
                  value={this.state.officerLast}
                  onChange={this.handleInputs}
                />
              </Col>
              <Col xs="6">
                <Input
                  type="text"
                  className="mb-3"
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
            <Row>
              <Col xs="6">
                <Input
                  type="text"
                  className="mb-3"
                  name="officerWitnessLast"
                  placeholder="Officer witness"
                  value={this.state.officerWitnessLast}
                  onChange={this.handleInputs}
                />
              </Col>
              <Col xs="6">
                <Input
                  type="text"
                  className="mb-3"
                  name="officerWitnessID"
                  placeholder="Officer Witness ID "
                  value={this.state.officerWitnessID}
                  onChange={this.handleInputs}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <h4>Civilian Witness (full name)</h4>
            </Row>
            <Row>
              <Col xs="6">
                <Input
                  type="text"
                  className="mb-3"
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
            <Row>
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
                  name="hair"
                  placeholder="Hair Color"
                  onChange={this.handleInputs}
                  value={this.state.hair}
                />
              </Col>
            </Row>
          </FormGroup>
          <h6>Who observed offender driving?</h6>
          <FormGroup check>
            <Row>
              <Label check>
                <Input
                  type="checkbox"
                  name="officerCheckBox"
                  checked={this.state.officerCheckBox}
                  onChange={this.handleCheckboxChange}
                  value={this.state.officerCheckBox}
                />{" "}
                Officer
              </Label>
            </Row>
            <Row>
              <Label check>
                <Input
                  type="checkbox"
                  name="civilianCheckBox"
                  checked={this.state.civilianCheckBox}
                  onChange={this.handleCheckboxChange}
                  value={this.state.civilianCheckBox}
                />{" "}
                Civilian
              </Label>
            </Row>
            <Row>
              <Label check>
                <Input
                  type="checkbox"
                  name="suspectAdmittedBox"
                  checked={this.state.suspectAdmittedBox}
                  onChange={this.handleCheckboxChange}
                  value={this.state.suspectAdmittedBox}
                />{" "}
                Suspect Admitted
              </Label>
            </Row>
          </FormGroup>
          <br />
          <br />
          <div className="row">
            <div className="col-md-12 form-group">
              <label>Describe Driving Observations</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="drivingBehaviorTextBox"
                onChange={this.handleInputs}
                value={this.state.drivingBehaviorTextBox}
                rows="3"
                placeholder="Briefly describe why you believe offender was intoxicated.  Describe vehicle with tag if available."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group">
              <label>Describe Public Place</label>
              <textarea
                className="form-control"
                id="formControl"
                rows="3"
                placeholder="Briefly describe: roadway, public parking lot, highway etc..."
              />
            </div>
          </div>
          <Row>
            <Col md="12">
              <h2 className="text-center mb-3">
                <u>Driving Observations</u>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <h4>Odor of alcohol</h4>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="alcoholStrong"
                    checked={this.state.alcoholStrong}
                    onChange={this.handleCheckboxChange}
                    value={this.state.alcoholStrong}
                  />{" "}
                  Strong
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="alcoholModerate"
                    checked={this.state.alcoholModerate}
                    onChange={this.handleCheckboxChange}
                    value={this.state.alcoholModerate}
                  />{" "}
                  Moderate
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="alcoholFaint"
                    checked={this.state.alcoholFaint}
                    onChange={this.handleCheckboxChange}
                    value={this.state.alcoholFaint}
                  />{" "}
                  Faint
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="alcoholNone"
                    checked={this.state.alcoholNone}
                    onChange={this.handleCheckboxChange}
                    value={this.state.alcoholNone}
                  />{" "}
                  None
                </Label>
              </Row>
              <h4>Eyes</h4>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="eyesBloodshot"
                    checked={this.state.eyesBloodshot}
                    onChange={this.handleCheckboxChange}
                    value={this.state.eyesBloodshot}
                  />{" "}
                  Bloodshot
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="eyesRedPink"
                    checked={this.state.eyesRedPink}
                    onChange={this.handleCheckboxChange}
                    value={this.state.eyesRedPink}
                  />{" "}
                  Red/Pink
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="eyesGlassy"
                    checked={this.state.eyesGlassy}
                    onChange={this.handleCheckboxChange}
                    value={this.state.eyesGlassy}
                  />{" "}
                  Glassy
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="eyesWatery"
                    checked={this.state.eyesWatery}
                    onChange={this.handleCheckboxChange}
                    value={this.state.eyesWatery}
                  />{" "}
                  Watery
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="eyesDilated"
                    checked={this.state.eyesDilated}
                    onChange={this.handleCheckboxChange}
                    value={this.state.eyesDilated}
                  />{" "}
                  Dilated
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="eyesNormal"
                    checked={this.state.eyesNormal}
                    onChange={this.handleCheckboxChange}
                    value={this.state.eyesNormal}
                  />{" "}
                  Normal
                </Label>
              </Row>
              <h4>Speech</h4>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="speechThick"
                    checked={this.state.speechThick}
                    onChange={this.handleCheckboxChange}
                    value={this.state.speechThick}
                  />{" "}
                  Thick-tongued
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="speechIncoherent"
                    checked={this.state.speechIncoherent}
                    onChange={this.handleCheckboxChange}
                    value={this.state.speechIncoherent}
                  />{" "}
                  Incoherent
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="speechSlurred"
                    checked={this.state.speechSlurred}
                    onChange={this.handleCheckboxChange}
                    value={this.state.speechSlurred}
                  />{" "}
                  Slurred
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="speechSlow"
                    checked={this.state.speechSlow}
                    onChange={this.handleCheckboxChange}
                    value={this.state.speechSlow}
                  />{" "}
                  Slow
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="speechMumbled"
                    checked={this.state.speechMumbled}
                    onChange={this.handleCheckboxChange}
                    value={this.state.speechMumbled}
                  />{" "}
                  Mumbled
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="speechStuttered"
                    checked={this.state.speechStuttered}
                    onChange={this.handleCheckboxChange}
                    value={this.state.speechStuttered}
                  />{" "}
                  Stuttered
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="speechTalkative"
                    checked={this.state.speechTalkative}
                    onChange={this.handleCheckboxChange}
                    value={this.state.speechTalkative}
                  />{" "}
                  Talkative
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="speechRapid"
                    checked={this.state.speechRapid}
                    onChange={this.handleCheckboxChange}
                    value={this.state.speechRapid}
                  />{" "}
                  Rapid
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="speechRepetitive"
                    checked={this.state.speechRepetitive}
                    onChange={this.handleCheckboxChange}
                    value={this.state.speechRepetitive}
                  />{" "}
                  Repetitive
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="speechFair"
                    checked={this.state.speechFair}
                    onChange={this.handleCheckboxChange}
                    value={this.state.speechFair}
                  />{" "}
                  Fair
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="speechGood"
                    checked={this.state.speechGood}
                    onChange={this.handleCheckboxChange}
                    value={this.state.speechGood}
                  />{" "}
                  Good
                </Label>
              </Row>
            </Col>

            {/* break */}
            {/* break */}
            {/* break */}
            {/* break */}
            {/* break */}
            {/* break */}
            <Col md="4">
              <h4>Attitude/condct</h4>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attArgumentative"
                    checked={this.state.attArgumentative}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attArgumentative}
                  />{" "}
                  Argumentative
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attCombative"
                    checked={this.state.attCombative}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attCombative}
                  />{" "}
                  Combative
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attProfane"
                    checked={this.state.attProfane}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attProfane}
                  />{" "}
                  Profane
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attSarcastic"
                    checked={this.state.attSarcastic}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attSarcastic}
                  />{" "}
                  Sarcastic
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attInsulting"
                    checked={this.state.attInsulting}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attInsulting}
                  />{" "}
                  Insulting
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attCooperative"
                    checked={this.state.attCooperative}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attCooperative}
                  />{" "}
                  Cooperative
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attCocky"
                    checked={this.state.attCocky}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attCocky}
                  />{" "}
                  Cocky
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attLaughing"
                    checked={this.state.attLaughing}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attLaughing}
                  />{" "}
                  Laughing
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attCarefree"
                    checked={this.state.attCarefree}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attCarefree}
                  />{" "}
                  Carefree
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attIndifferent"
                    checked={this.state.attIndifferent}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attIndifferent}
                  />{" "}
                  Indifferent
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attSleepy"
                    checked={this.state.attSleepy}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attSleepy}
                  />{" "}
                  Sleepy/Drowsy
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attPolite"
                    checked={this.state.attPolite}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attPolite}
                  />{" "}
                  Polite
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attSilent"
                    checked={this.state.attSilent}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attSilent}
                  />{" "}
                  Silent
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attReserved"
                    checked={this.state.attReserved}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attReserved}
                  />{" "}
                  Reserved
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attCalm"
                    checked={this.state.attCalm}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attCalm}
                  />{" "}
                  Calm
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attTalkative"
                    checked={this.state.attTalkative}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attTalkative}
                  />{" "}
                  Talkative
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attAnxious"
                    checked={this.state.attAnxious}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attAnxious}
                  />{" "}
                  Anxious
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attExcited"
                    checked={this.state.attExcited}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attExcited}
                  />{" "}
                  Excited
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attConfused"
                    checked={this.state.attConfused}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attConfused}
                  />{" "}
                  Confused
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attUninhibited"
                    checked={this.state.attUninhibited}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attUninhibited}
                  />{" "}
                  Fair
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="attMoodswing"
                    checked={this.state.attMoodswing}
                    onChange={this.handleCheckboxChange}
                    value={this.state.attMoodswing}
                  />{" "}
                  Mood swings
                </Label>
              </Row>
              <h4>Appearance</h4>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="appDisorderly"
                    checked={this.state.appDisorderly}
                    onChange={this.handleCheckboxChange}
                    value={this.state.appDisorderly}
                  />{" "}
                  Disorderly
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="appOrderly"
                    checked={this.state.appOrderly}
                    onChange={this.handleCheckboxChange}
                    value={this.state.appOrderly}
                  />{" "}
                  Orderly
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="appUrine"
                    checked={this.state.appUrine}
                    onChange={this.handleCheckboxChange}
                    value={this.state.appUrine}
                  />{" "}
                  Signs of urine
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="appVomit"
                    checked={this.state.appVomit}
                    onChange={this.handleCheckboxChange}
                    value={this.state.appVomit}
                  />{" "}
                  Signs of vomit
                </Label>
              </Row>
            </Col>

            {/* break */}
            {/* break */}
            {/* break */}
            {/* break */}
            {/* break */}
            <Col md="4">
              <h4>Balance</h4>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="balFalling"
                    checked={this.state.balFalling}
                    onChange={this.handleCheckboxChange}
                    value={this.state.balFalling}
                  />{" "}
                  Falling
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="balUnsteady"
                    checked={this.state.balUnsteady}
                    onChange={this.handleCheckboxChange}
                    value={this.state.balUnsteady}
                  />{" "}
                  Unsteady
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="balSwaying"
                    checked={this.state.appVomit}
                    onChange={this.handleCheckboxChange}
                    value={this.state.appVomit}
                  />{" "}
                  Swaying
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="balSupport"
                    checked={this.state.balSupport}
                    onChange={this.handleCheckboxChange}
                    value={this.state.balSupport}
                  />{" "}
                  Needed Support
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="balFair"
                    checked={this.state.balFair}
                    onChange={this.handleCheckboxChange}
                    value={this.state.balFair}
                  />{" "}
                  Fair
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="balGood"
                    checked={this.state.balGood}
                    onChange={this.handleCheckboxChange}
                    value={this.state.balGood}
                  />{" "}
                  Good
                </Label>
              </Row>
              <h4>Walking</h4>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="walkFalling"
                    checked={this.state.walkFalling}
                    onChange={this.handleCheckboxChange}
                    value={this.state.walkFalling}
                  />{" "}
                  Falling
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="walkSwaying"
                    checked={this.state.walkSwaying}
                    onChange={this.handleCheckboxChange}
                    value={this.state.walkSwaying}
                  />{" "}
                  Swaying
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="walkHeavy"
                    checked={this.state.walkHeavy}
                    onChange={this.handleCheckboxChange}
                    value={this.state.walkHeavy}
                  />{" "}
                  Heavy Footed
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="walkFair"
                    checked={this.state.walkFair}
                    onChange={this.handleCheckboxChange}
                    value={this.state.walkFair}
                  />{" "}
                  Fair
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="walkGood"
                    checked={this.state.walkGood}
                    onChange={this.handleCheckboxChange}
                    value={this.state.walkGood}
                  />{" "}
                  Good
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="walkSupport"
                    checked={this.state.walkSupport}
                    onChange={this.handleCheckboxChange}
                    value={this.state.walkSupport}
                  />{" "}
                  Needed Support
                </Label>
              </Row>
              <h4>Turning</h4>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="turnFalling"
                    checked={this.state.turnFalling}
                    onChange={this.handleCheckboxChange}
                    value={this.state.turnFalling}
                  />{" "}
                  Falling
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="turnStaggering"
                    checked={this.state.turnStaggering}
                    onChange={this.handleCheckboxChange}
                    value={this.state.turnStaggering}
                  />{" "}
                  Staggering
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="turnSwaying"
                    checked={this.state.turnSwaying}
                    onChange={this.handleCheckboxChange}
                    value={this.state.turnSwaying}
                  />{" "}
                  Swaying
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="turnHesitant"
                    checked={this.state.turnHesitant}
                    onChange={this.handleCheckboxChange}
                    value={this.state.turnHesitant}
                  />{" "}
                  Hesitant
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="turnFair"
                    checked={this.state.turnFair}
                    onChange={this.handleCheckboxChange}
                    value={this.state.turnFair}
                  />{" "}
                  Fair
                </Label>
              </Row>
              <Row>
                <Label check>
                  <Input
                    type="checkbox"
                    name="turnGood"
                    checked={this.state.turnGood}
                    onChange={this.handleCheckboxChange}
                    value={this.state.turnGood}
                  />{" "}
                  Good
                </Label>
              </Row>
            </Col>
          </Row>
          <Row className="mt-3">
            <h4>Who conducted SFST's?</h4>
          </Row>
          <Row>
            <Col md="4">
              <Label check>
                <Input
                  type="checkbox"
                  name="sfstAffient"
                  checked={this.state.sfstAffient}
                  onChange={this.handleCheckboxChange}
                  value={this.state.sfstAffient}
                />{" "}
                Affient who is{" "}
                <strong>
                  <u>certified</u>
                </strong>{" "}
                in HGN, WAT, OLS
              </Label>
            </Col>
            <Col md="4">
              <Label check>
                <Input
                  type="checkbox"
                  name="sfstOfficer"
                  checked={this.state.sfstOfficer}
                  onChange={this.handleCheckboxChange}
                  value={this.state.sfstOfficer}
                />{" "}
                Other Officer{" "}
                <strong>
                  <u>certified</u>
                </strong>{" "}
                in HGN, WAT, OLG
              </Label>
            </Col>
            <Col md="4">
              <Label check>
                <Input
                  type="checkbox"
                  name="trainedAffient"
                  checked={this.state.trainedAffient}
                  onChange={this.handleCheckboxChange}
                  value={this.state.trainedAffient}
                />{" "}
                Affient{" "}
                <strong>
                  <u>trained</u>
                </strong>{" "}
                in a variety of sobriety tests
              </Label>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col md="4">
              <Label check>
                <Input
                  type="checkbox"
                  name="sfstOtherTests"
                  checked={this.state.sfstOtherTests}
                  onChange={this.handleCheckboxChange}
                  value={this.state.sfstOtherTests}
                />{" "}
                Other Officer{" "}
                <strong>
                  <u>trained</u>
                </strong>{" "}
                in a variety of sobriety tests
              </Label>
            </Col>
            <Col md="4">
              <Label check>
                <Input
                  type="checkbox"
                  name="suspectRefused"
                  checked={this.state.suspectRefused}
                  onChange={this.handleCheckboxChange}
                  value={this.state.suspectRefused}
                />
                Suspect Refused and made the following statements.
              </Label>
            </Col>
            <Col md="4">
              <Label check>
                <Input
                  type="checkbox"
                  name="suspectInjured"
                  checked={this.state.suspectInjured}
                  onChange={this.handleCheckboxChange}
                  value={this.state.suspectInjured}
                />
                Suspect was injured or unconscious
              </Label>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <h4>HGN Clues</h4>
          </Row>
          <Row>
            <Col md="2">
              <p>Left Eye</p>
            </Col>
            <Col md="2">
              <p>Right Eye</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Label check>
                <Input
                  type="checkbox"
                  name="suspectInjured"
                  checked={this.state.hgnLackLeft}
                  onChange={this.handleCheckboxChange}
                  value={this.state.hgnLackLeft}
                />
                Left
              </Label>
            </Col>

            <Col md="10">
              <Label check>
                <Input
                  type="checkbox"
                  name="suspectInjured"
                  checked={this.state.hgnLackRight}
                  onChange={this.handleCheckboxChange}
                  value={this.state.hgnLackRight}
                />
                Lack of smooth pursuit
              </Label>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <Label check>
                <Input
                  type="checkbox"
                  name="suspectInjured"
                  checked={this.state.hgnDisLeft}
                  onChange={this.handleCheckboxChange}
                  value={this.state.hgnDisRight}
                />
                Left
              </Label>
            </Col>
            <Col md="2">
              <Label check>
                <Input
                  type="checkbox"
                  name="suspectInjured"
                  checked={this.state.hgnDisRight}
                  onChange={this.handleCheckboxChange}
                  value={this.state.hgnDisRight}
                />
                Sus. Nystagmus
              </Label>
            </Col>
          </Row>
          <Row>
            <Col md="2">
              <Label check>
                <Input
                  type="checkbox"
                  name="suspectInjured"
                  checked={this.state.hgnOnsetLeft}
                  onChange={this.handleCheckboxChange}
                  value={this.state.hgnOnsetLeft}
                />
                Left
              </Label>
            </Col>
            <Col md="2">
              <Label check>
                <Input
                  type="checkbox"
                  name="suspectInjured"
                  checked={this.state.hgnOnsetRight}
                  onChange={this.handleCheckboxChange}
                  value={this.state.hgnOnsetRight}
                />
                Prior to 45
              </Label>
            </Col>
          </Row>

          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-primary btn-lg btn-block mt-4"
          >
            Submit
          </button>
        </Form>
      </Container>
    );
  }
}

export default WarrantPage;
