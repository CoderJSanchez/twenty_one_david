import React, { Component } from "react";
import axios from "axios";
import PrintButton from "./Button";

class WarrantFinal extends Component {
  state = {
    reportNumber: "",
    countyOfWarrant: "",
    countyOfOffense: "",
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
    walkStagg: false
  };

  componentDidMount = () => {
    axios.get("api/warrantData/warrant").then(response => {
      console.log(response.data);
      const {
        reportNumber,
        drivingBehaviorTextBox,
        countyOfOffense,
        countyOfWarrant,
        month,
        day,
        year,
        time,
        address,
        officerLast,
        officerID,
        officerWitnessLast,
        officerWitnessID,
        civilianWitnessFull,
        civilianWitnessDOB,
        offenderLast,
        offenderFirst,
        race,
        sex,
        dob,
        dl,
        height,
        weight,
        hair,
        civilianCheckBox,
        officerCheckBox,
        suspectAdmittedBox,
        alcoholStrong,
        alcoholModerate,
        alcoholFaint,
        alcoholNone,
        eyesBloodshot,
        eyesRedPink,
        eyesGlassy,
        eyesWatery,
        eyesDilated,
        eyesNormal,
        speechThick,
        speechIncoherent,
        speechSlurred,
        speechSlow,
        speechMumbled,
        speechStuttered,
        speechTalkative,
        speechRapid,
        speechRepetitive,
        speechFair,
        speechGood,
        attArgumentative,
        attCombative,
        attProfane,
        attSarcastic,
        attInsulting,
        attCooperative,
        attCocky,
        attLaughing,
        attCarefree,
        attIndifferent,
        attSleepy,
        attPolite,
        attSilent,
        attReserved,
        attCalm,
        attTalkative,
        attAnxious,
        attExcited,
        attConfused,
        attUninhibited,
        attMoodswing,
        appDisorderly,
        appOrderly,
        appUrine,
        appVomit,
        balFalling,
        balUnsteady,
        balSwaying,
        balSupport,
        balFair,
        balGood,
        walkFalling,
        walkSwaying,
        walkHeavy,
        walkFair,
        walkGood,
        walkSupport,
        turnFalling,
        turnStaggering,
        turnSwaying,
        turnHesitant,
        turnFair,
        turnGood,
        walkStagg
      } = response.data;

      this.setState({
        reportNumber,
        countyOfOffense,
        countyOfWarrant,
        drivingBehaviorTextBox,
        month: month,
        day: day,
        year: year,
        time: time,
        address: address,
        officerLast: officerLast,
        officerID: officerID,
        officerWitnessLast: officerWitnessLast,
        officerWitnessID: officerWitnessID,
        civilianWitnessFull: civilianWitnessFull,
        civilianWitnessDOB: civilianWitnessDOB,
        offenderLast: offenderLast,
        offenderFirst: offenderFirst,
        race: race,
        sex: sex,
        dob: dob,
        dl: dl,
        height: height,
        weight: weight,
        hair: hair,
        civilianCheckBox: civilianCheckBox,
        officerCheckBox: officerCheckBox,
        suspectAdmittedBox: suspectAdmittedBox,
        alcoholStrong: alcoholStrong,
        alcoholModerate: alcoholModerate,
        alcoholFaint: alcoholFaint,
        alcoholNone: alcoholNone,
        eyesBloodshot,
        eyesRedPink,
        eyesGlassy,
        eyesWatery,
        eyesDilated,
        eyesNormal,
        speechThick,
        speechIncoherent,
        speechSlurred,
        speechSlow,
        speechMumbled,
        speechStuttered,
        speechTalkative,
        speechRapid,
        speechRepetitive,
        speechFair,
        speechGood,
        attArgumentative,
        attCombative,
        attProfane,
        attSarcastic,
        attInsulting,
        attCooperative,
        attCocky,
        attLaughing,
        attCarefree,
        attIndifferent,
        attSleepy,
        attPolite,
        attSilent,
        attReserved,
        attCalm,
        attTalkative,
        attAnxious,
        attExcited,
        attConfused,
        attUninhibited,
        attMoodswing,
        appDisorderly,
        appOrderly,
        appUrine,
        appVomit,
        balFalling,
        balUnsteady,
        balSwaying,
        balSupport,
        balFair,
        balGood,
        walkFalling,
        walkSwaying,
        walkHeavy,
        walkFair,
        walkGood,
        walkSupport,
        turnFalling,
        turnStaggering,
        turnSwaying,
        turnHesitant,
        turnFair,
        turnGood,
        walkStagg
      });
    });
  };

  render() {
    const { officerCheckBox, civilianCheckBox } = this.state;
    return (
      <React.Fragment>
        <div className="container containerMargin page">
          <PrintButton />
          <div className="row">
            <div className="col-md-12">
              <h6 className="text-left">THE STATE OF TEXAS</h6>
              <h6 className="text-right">Docket No ______________</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h6 className="text-left">
                COUNTY OF {this.state.countyOfWarrant}
              </h6>
              <h6 className="text-right">COURT: _____________</h6>
              <br />
              <h6 className="text-right">
                GPD CASE NO:<u>{this.state.reportNumber}</u>
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <br /> <br />
              <h6 className="text-center">
                <strong>
                  <u>
                    AFFIDIAVIT FOR BLOOD SEARCH WARRANT RELATED TO DWI ARREST
                  </u>
                </strong>
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="text-left">
                The undersigned Affiant, being a peace officer under the laws of
                Texas and being duly sworn, on oath makes the following
                statements and accusations:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="text-left">
                My name is Officer {this.state.officerLast},{" "}
                {this.state.officerID}, I am a peace officer employed by the
                following law enforcement agency: Acme POLICE DEPARTMENT. I have
                successfully completed the State-mandated requirements to become
                a peace officer.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ol>
                <li>
                  <p>
                    There is in {this.state.countyOfWarrant} County, Texas a
                    suspected person (“suspect”) described as follows:
                  </p>
                  <br />
                </li>
                <p>
                  Name:{" "}
                  <u>
                    {this.state.offenderFirst} {this.state.offenderLast}
                  </u>
                </p>
                <div className="row">
                  <div className="col-md-3">
                    <p>
                      Race: <u>{this.state.race}</u>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p>
                      Sex: <u>{this.state.sex}</u>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p>
                      DOB: <u>{this.state.dob}</u>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p>
                      DL/ID: <u>{this.state.dl}</u>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <p>
                      Height: <u>{this.state.height}</u>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p>
                      Weight: <u>{this.state.height}</u>lbs.
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p>
                      Hair color: <u>{this.state.hair}</u>
                    </p>
                  </div>
                </div>
                <li>
                  <p>
                    {" "}
                    Suspect is presently in custody of a law enforcement agency
                    within {this.state.countyOfOffense} County, namely the
                    <br />
                    <strong>
                      <u>Acme POLICEDEPARTMENT</u>
                    </strong>
                    , which will present the suspect to execute the warrant
                    requested herein.
                  </p>
                </li>
                <li>
                  <p>
                    The suspect has possession of and is concealing human blood,
                    which constitutes evidence that the suspect committed the
                    offense described in paragraph 4 below.
                  </p>
                </li>
                <li>
                  <p>
                    On the {this.state.day} day of {this.state.month},{" "}
                    {this.state.year} , at or about {this.state.time} o’clock ,
                    the suspect did then and there operate a motor vehicle in a
                    public place in {this.state.countyOfOffense} County, Texas
                    while intoxicated by not having the normal use of mental or
                    physical faculties by reason of the introduction of alcohol,
                    a controlled substance, a drug, a dangerous drug, a
                    combination of two or more of those substances, or any other
                    substance into the suspect’s body.
                  </p>
                </li>
                <li>
                  <p>
                    The suspect was operating a motor vehicle in a public place,
                    to wit: {this.state.address}, which is in
                    {this.state.countyOfOffense} County, Texas, on the above
                    date and time based on the following facts:
                  </p>
                  <div className="row">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={this.state.officerCheckBox}
                        value=""
                      />
                      <label className="form-check-label">
                        I observed the suspect doing so.
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={this.state.suspectAdmittedBox}
                        value=""
                      />
                      <label className="form-check-label">
                        The suspect admitted to me that the suspect had been
                        operating a motor vehicle in a public place in{" "}
                        {this.state.countyOfOffense} County, Texas, prior to my
                        arrival at the scene.
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={this.state.civilianCheckBox}
                        value=""
                      />
                      <label className="form-check-label">
                        A witness, {this.state.civilianWitnessFull},
                        {this.state.civilianWitnessDOB}
                        {this.state.officerLast}, {this.state.officerWitnessID},
                        conveyed information to me that he/she witnessed the
                        suspect operating a motor vehicle in a public place in
                        {this.state.countyOfOffense} County, Texas, prior to my
                        arrival at the scene.
                      </label>
                    </div>
                  </div>
                </li>
                <br />
                <li>
                  <p>
                    Driving behavior: Additional facts leading me to believe
                    that the suspect was intoxicated while operating a motor
                    vehicle in a public place include:{" "}
                    {this.state.drivingBehaviorTextBox}
                    The public place is described as: briefly describe the
                    public place (ex. roadway, public parking lot, etc.).
                  </p>
                </li>
                <li>
                  <p>
                    During contact with the suspect, the following observations
                    about the suspect were made:
                  </p>
                  {officerCheckBox && (
                    <React.Fragment>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={this.state.officerCheckBox}
                          value=""
                        />
                        <label className="form-check-label">
                          I observed these observations.
                        </label>
                      </div>
                    </React.Fragment>
                  )}
                  {civilianCheckBox && (
                    <React.Fragment>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={this.state.civilianCheckBox}
                          value=""
                        />
                        <label className="form-check-label">
                          A witness, {this.state.civilianWitnessFull},
                          {this.state.civilianWitnessDOB}
                          {this.state.officerLast}, {this.state.officerID},
                          conveyed information to me that he/she witnessed these
                          observations.
                        </label>
                      </div>
                    </React.Fragment>
                  )}
                </li>
                <br />
                <br />
                <br />
                <br />
                <h5 className="text-center">
                  DWI BLOOD SEARCH WARRANT,
                  <u>
                    {this.state.offenderFirst} {this.state.offenderLast},{" "}
                    {this.state.dob}
                  </u>
                </h5>
                <div className="page-break" />
                <div className="row">
                  <div className="col-md-4">
                    <p>
                      <strong>Odor of alcohol</strong>
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.alcoholStrong}
                      />
                      <label className="form-check-label">Strong</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.alcoholModerate}
                      />
                      <label className="form-check-label">Moderate</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.alcoholFaint}
                      />
                      <label className="form-check-label">Faint</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.alcoholNone}
                      />
                      <label className="form-check-label">None</label>
                    </div>
                    {/* eyes */}
                    <p>
                      <strong>Eyes</strong>
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.eyesBloodshot}
                      />
                      <label className="form-check-label">Bloodshot</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.eyesRedPink}
                      />
                      <label className="form-check-label">Red/Pink</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.eyesGlassy}
                      />
                      <label className="form-check-label">Glassy</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.eyesWatery}
                      />
                      <label className="form-check-label">Watery</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.eyesDilated}
                      />
                      <label className="form-check-label">Dilated</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.eyesNormal}
                      />
                      <label className="form-check-label">Normal</label>
                    </div>
                    {/* speech */}
                    <p>
                      <strong>Speech</strong>
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.speechThick}
                      />
                      <label className="form-check-label">Thick-tongued</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.speechIncoherent}
                      />
                      <label className="form-check-label">Incoherent</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.speechSlurred}
                      />
                      <label className="form-check-label">Slurred</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.speechSlow}
                      />
                      <label className="form-check-label">Slow</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.speechMumbled}
                      />
                      <label className="form-check-label">Mumbled</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.speechStuttered}
                      />
                      <label className="form-check-label">Stuttered</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.speechTalkative}
                      />
                      <label className="form-check-label">Talkative</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.speechRapid}
                      />
                      <label className="form-check-label">Rapid</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.speechRepetitive}
                      />
                      <label className="form-check-label">Repetitive</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.speechFair}
                      />
                      <label className="form-check-label">Fair</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.speechGood}
                      />
                      <label className="form-check-label">Good</label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <strong>Attitude/Conduct</strong>
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attArgumentative}
                      />
                      <label className="form-check-label">Argumentative</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attCombative}
                      />
                      <label className="form-check-label">Combative</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attProfane}
                      />
                      <label className="form-check-label">Profane</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attSarcastic}
                      />
                      <label className="form-check-label">Sarcastic</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attInsulting}
                      />
                      <label className="form-check-label">Insulting</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attCooperative}
                      />
                      <label className="form-check-label">Cooperative</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attCocky}
                      />
                      <label className="form-check-label">Cocky</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attLaughing}
                      />
                      <label className="form-check-label">Laughing</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attCarefree}
                      />
                      <label className="form-check-label">Carefree</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attIndifferent}
                      />
                      <label className="form-check-label">Indifferent</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attSleepy}
                      />
                      <label className="form-check-label">Sleepy/Drowsy</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attPolite}
                      />
                      <label className="form-check-label">Polite</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attSilent}
                      />
                      <label className="form-check-label">Silent</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attReserved}
                      />
                      <label className="form-check-label">Reserved</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attCalm}
                      />
                      <label className="form-check-label">Calm</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attAnxious}
                      />
                      <label className="form-check-label">Anxious</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attExcited}
                      />
                      <label className="form-check-label">Excited</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attConfused}
                      />
                      <label className="form-check-label">Confused</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attUninhibited}
                      />
                      <label className="form-check-label">Uninhibited</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.attMoodswing}
                      />
                      a<label className="form-check-label">Mood Swings</label>
                    </div>

                    {/* speech */}
                    <p>
                      <strong>Appearance</strong>
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.appDisorderly}
                      />
                      <label className="form-check-label">Disorderly</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.appOrderly}
                      />
                      <label className="form-check-label">Orderly</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.appUrine}
                      />
                      <label className="form-check-label">Signs of urine</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.appVomit}
                      />
                      <label className="form-check-label">Signs of vomit</label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <strong>Balance</strong>
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.balFalling}
                      />
                      <label className="form-check-label">Falling</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.balUnsteady}
                      />
                      <label className="form-check-label">Unsteady</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.balSwaying}
                      />
                      <label className="form-check-label">Swaying</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.balSupport}
                      />
                      <label className="form-check-label">Needed Support</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.balFair}
                      />
                      <label className="form-check-label">Fair</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.balGood}
                      />
                      <label className="form-check-label">Good</label>
                    </div>
                    {/* eyes */}
                    <p>
                      <strong>Walking</strong>
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.walkFalling}
                      />
                      <label className="form-check-label">Falling</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.walkStagg}
                      />
                      <label className="form-check-label">Staggering</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.walkSwaying}
                      />
                      <label className="form-check-label">Swaying</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.walkHeavy}
                      />
                      <label className="form-check-label">Heavy Footed</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.walkFair}
                      />
                      <label className="form-check-label">Fair</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.walkGood}
                      />
                      <label className="form-check-label">Good</label>
                    </div>
                    {/* speech */}
                    <p>
                      <strong>Turning</strong>
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.turnFalling}
                      />
                      <label className="form-check-label">Falling</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.turnStaggering}
                      />
                      <label className="form-check-label">Staggering</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.turnSwaying}
                      />
                      <label className="form-check-label">Swaying</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.turnHesitant}
                      />
                      <label className="form-check-label">Hesitant</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.turnFair}
                      />
                      <label className="form-check-label">Fair</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        checked={this.state.turnGood}
                      />
                      <label className="form-check-label">Good</label>
                    </div>
                  </div>
                </div>
                <br />
                <li>
                  <p>
                    During the contact with the suspect, the suspect was
                    requested to perform field sobriety tests. The observations,
                    signs of intoxication, and the results of those test are
                    listed below. Field sobriety tests were conducted by:
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      Affiant who is certified and/or trained in the detection
                      of impaired or intoxicated drivers through the use of
                      three standardized field sobriety tests [SFSTs], namely:
                      Horizontal Gaze Nystagmus [HGN], One-Leg Stand [OLS], and
                      Walk and Turn [WAT].
                    </label>
                  </div>
                  <br />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      SFST Officer including emplyee ID number, a fellow peace
                      officer, who is known by your Affiant to be certified
                      and/or trained in the detection of impaired or intoxicated
                      drivers through the use of three standardized field
                      sobriety tests [SFSTs], namely: Horizontal Gaze Nystagmus
                      [HGN], One-Leg Stand [OLS], and Walk and Turn [WAT].
                    </label>
                  </div>
                  <br />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      Affiant who was trained in the detection of impaired or
                      intoxicated drivers, by using a variety of field sobriety
                      tests, learned during my Basic Acme Police Academy
                      training.
                    </label>
                  </div>
                  <br />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      SFST Officer including emplyee ID number, a fellow peace
                      officer, who is known by your Affiant to be trained in the
                      detection of impaired or intoxicated drivers, using a
                      variety of field sobriety tests, taught to them during
                      their Basic Acme Police Academy training.
                    </label>
                  </div>
                  <br />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      The suspect refused to perform any sobriety tests and made
                      the following statements: Enter any statements the
                      defendant made on why he refused to do sobriety tests.
                    </label>
                  </div>
                  <br />
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      The suspect was injured or unconscious and unable to
                      perform any sobriety tests.
                    </label>
                  </div>
                </li>
                <br />
                <br />
                <h5 className="text-center">
                  DWI BLOOD SEARCH WARRANT,{" "}
                  <u>
                    {this.state.offenderFirst} {this.state.offenderLast},{" "}
                    {this.state.dob}
                  </u>
                </h5>
                <div className="page-break" />
                <div className="row">
                  <div className="col-md-12">
                    <h6>
                      <u>Horizontal Gaze Nystagmus Test</u>
                    </h6>
                    <p>
                      The suspect was first qualified as a candidate by checking
                      the suspect's eyes for equal tracking and equal pupil
                      size. I have indicated below the clues that were present
                      in the left eye (L) and the right eye (R):
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">L</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">L</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">L</label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">R</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">R</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">R</label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Lack of smooth pursuit
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Distinct and sustained nytagmus at maximum deviation
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Onset of nystagus prior to 45 degrees
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    Vertical nystagmus: <br />
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label className="form-check-label">No</label>
                    </div>
                    <br />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="mt-4">
                      HGN: Total number of observed clues: 6 of 6 clues.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Refused to perform test
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Too intoxicated to perform test
                      </label>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <h6>
                      <u>Walk and Turn Test</u>
                    </h6>
                    <p>
                      I have indicated below the clues that were present during
                      the suspect's performance of this test:{" "}
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Cannot keep balance while listening to instructions
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Starts before the instructions are finished
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Stops while walking
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Does not touch heel to toe
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Steps off the line
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Uses arms to balance (raises arms over six inches)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">Improper turn</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Incorrect number of steps
                      </label>
                    </div>
                    <p className="mt-4">
                      WAT: Total number of observed clues: 8 of 8 clues.
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Refused to perform test
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Too intoxicated to perform test
                      </label>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-md-12">
                    <h6>
                      <u>One Leg Stand Test</u>
                    </h6>
                    <p>
                      I have indicated below the clues that were present during
                      the suspect's performance of this test:{" "}
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Sways while balancing
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">Hops</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">Puts foot down</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Uses arms for balance (raises arms over six inchex)
                      </label>
                    </div>

                    <p className="mt-4">
                      OLS: Total number of observed clues: 4 of 4 clues.
                    </p>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Refused to perform test
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Too intoxicated to perform test
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="mt-2">
                      I have learned through my training and experience that the
                      National Highway Transportation Safety Administration has
                      determined from studies that were conducted that 4 or more
                      clues on the HGN test and 2 or more clues on the OLS test
                      and the WAT test are reliable indicators of intoxication.
                    </p>
                  </div>
                </div>
                <li>
                  <p>
                    Other tests: If indicated below, the supsect performed
                    additional tests for intoxication and I recorded the results
                    as shown below.
                  </p>
                </li>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Recited a portion of the alphabet; result: ABC results
                        and include the spsect's education level if known.
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Rhomberg: Close your eyes. Tilt your head back, hands at
                        your side, stop after 30 seconds. Result:{" "}
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Portable breath test; result:{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <h5 className="text-center">
                  DWI BLOOD SEARCH WARRANT,{" "}
                  <u>
                    {this.state.offenderFirst} {this.state.offenderLast},{" "}
                    {this.state.dob}
                  </u>
                </h5>
                <div className="page-break" />
                <li>
                  <p>
                    Suspect’s oral statements and additional observations of
                    intoxication: The suspect made the following statements:
                    Include any incriminating statements referencing
                    intoxciation, consuming alcohol or drugs, and any additional
                    information leading affiant to believe suspect was
                    intoxicated that hasn't been documented already.
                  </p>
                </li>
                <li>
                  <p>Open container evidence</p>
                </li>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        An open container of an alcoholic beverage was present
                        at the scene.
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        An open container of an alcoholic beverage, namely: List
                        the acohol found, was found by: Name and DOB of witness
                        OR Ofcr and Employee ID in the following location: State
                        where the alcohol was located.
                      </label>
                    </div>
                  </div>
                </div>
                <li>Drug/Controlled substance evidence.</li>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        No evidence of possible drug/controlled substance use
                        was found or detected.
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        The following drugs/drug paraphernalia: Identifiy any
                        drugs or paraphernaila found, were found by:{" "}
                        <span className="witfirstName" />{" "}
                        <span className="witLastName" />{" "}
                        <span className="ofcrWitLast" />{" "}
                        <span className="ofcrWitId" /> in the following
                        location: Identify exact location of drugs or
                        paraphernalia.
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        I detected the odor of marijuana
                      </label>
                    </div>
                    <div className="form-check ml-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        on the suspect’s person
                      </label>
                    </div>
                    <div className="form-check ml-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        inside the suspects vehicle
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        Statements made by the suspect or others indicating
                        possible drug usage:
                      </label>
                    </div>
                  </div>
                </div>
                <br />
                <li>
                  <p>
                    Refusal evidence: After placing the suspect under arrest for
                    Driving While Intoxicated, I requested a sample of the
                    suspect’s breath and/or blood, and the suspect refused to
                    provide a sample in violation of the Texas Implied Consent
                    law. This is an indication to me that the suspect is
                    attempting to hide evidence of his/her intoxication. Other
                    relevant statements made by the suspect when refusing
                    include: Indicate which chemical tests were offered and what
                    the suspect said when he refused or that the subject was
                    unconscious.
                  </p>
                </li>
                <li>
                  As a peace officer I have successfully completed courses
                  and/or training in the field of alcohol detection and
                  intoxication-related offenses. I have seen intoxicated persons
                  in the past and, during the course of my employment, I have
                  observed numerous people who were under the influence of
                  alcohol or other substances. Additionally, I have formed
                  opinions on intoxication on many occasions and have had my
                  suspicions confirmed by breath or blood samples that were
                  analyzed after I performed my law enforcement duties relating
                  to the detection of intoxicated drivers.
                </li>
                <br />
                <li>
                  {" "}
                  Summary: Based upon my experiences, my training in
                  intoxication-related offenses, and my observations of the
                  suspect and the results of the tests performed by the suspect,
                  if any, during my contact with the suspect, I believe that the
                  suspect is intoxicated by not having the normal use of mental
                  or physical faculties by reason of the introduction of
                  alcohol, a controlled substance, a drug, a dangerous drug, a
                  combination of two or more of those substances, or any other
                  substance into the suspect’s body.
                </li>
                <br />
                <li>
                  I know from my training and experience that alcohol and other
                  intoxicating substances are absorbed into the bloodstream of
                  an intoxicated person and that the blood of such person can be
                  analyzed for the presence of alcohol and other intoxicating
                  substances.
                </li>
                <br />
                <li>
                  Further, Affiant requests the authority to forensically
                  analyze the blood seized pursuant to this search warrant for
                  the presence of intoxicating substances.
                </li>
              </ol>
              <br />
              <br />
              <br />
              <br />
              <h5 className="text-center">
                DWI BLOOD SEARCH WARRANT,{" "}
                <u>
                  {this.state.offenderFirst} {this.state.offenderLast},{" "}
                  {this.state.dob}
                </u>
              </h5>
              <div className="page-break" />
            </div>
            <div className="row">
              <div className="col-md-12 indent">
                <p>
                  WHEREFORE, based upon this affidavit Affiant asks for a search
                  warrant that will authorize Affiant or Affiant’s agent to
                  search the person of the suspect for the blood evidence
                  described above and seize and forensically analyze the same as
                  evidence that the offense described was committed and that the
                  suspect committed the said offense.
                </p>
                <p>
                  Further Affiant asks for issuance of an order to appropriate
                  third parties directing them to assist Affiant in the
                  execution of said warrant.
                </p>
                <br />
                <br />
                <br />
                <p className="text-right">
                  _____________________________________________________
                </p>
                <p className="text-right">Affiant, Officer Sanchez, 8938</p>
                <p className="mt-1 mb-3">
                  Subscribed and sworn to before me on this _______ day of
                  _____________________, 20_____.
                </p>
                <p className="mt-4 text-right">
                  ___________________________________________________________
                </p>
              </div>
            </div>
          </div>
          <div className="form-check d-flex p-2 bd-highlight">
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label ">
              Notary Public State of Texas
            </label>
          </div>
          <div className="form-check d-flex p-2 bd-highlight">
            <input className="form-check-input " type="checkbox" value="" />
            <label className="form-check-label ">
              Municipal Judge, City of Acme,
              <p>Magistrate in and for Dallas and Collin Counties, Texas</p>
            </label>
          </div>
          <div className="form-check d-flex p-2 bd-highlight">
            <input className="form-check-input " type="checkbox" value="" />
            <label className="form-check-label ">
              Other Magistrate:
              <p>Title and County __________________________________________</p>
            </label>
          </div>
          <br />
          <br />
          <h5 className="text-center">
            DWI BLOOD SEARCH WARRANT,{" "}
            <u>
              {this.state.offenderFirst} {this.state.offenderLast},{" "}
              {this.state.dob}
            </u>
          </h5>
          <div className="page-break" />
          <div className="row">
            <div className="col-md-12">
              <h6 className="text-left">THE STATE OF TEXAS</h6>
              <h6 className="text-right">Docket No ______________</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h6 className="text-left">COUNTY OF DALLAS</h6>
              <h6 className="text-right">COURT: _____________</h6>
              <br />
              <h6 className="text-right">GPD CASE NO: _________________</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <br /> <br />
              <h6 className="text-center">
                <strong>
                  <u>SEARCH WARRANT</u>
                </strong>
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                The State Of Texas: To any Sheriff or any Peace Officer of
                County, Texas, or any Peace Officer of the State of Texas:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Whereas, the Affiant, whose name appears on the Affidavit
                attached hereto is a peace officer under the laws of Texas and
                did heretofore this day subscribed and swore to said affidavit
                before me, (which said Affidavit is here now made a part hereof
                for all purposes and incorporated herein as if written verbatim
                within the confines of this warrant) and whereas I find that the
                verified facts stated by Affiant in said Affidavit show that
                Affiant has probable cause for the belief Affiant expresses
                herein and establishes the existence of proper grounds for the
                issuance of this Warrant:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Now, therefore, you are commanded to take custody of the
                suspect. You shall search for, seize and maintain as evidence
                the property described in said Affidavit, to-wit: human blood
                from the body of the following described individual:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Name:{" "}
                <u>
                  {this.state.offenderFirst} {this.state.offenderLast}
                </u>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <p>
                Race: <u>{this.state.race}</u>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                Sex: <u>{this.state.sex}</u>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                DOB: <u>{this.state.dob}</u>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                DL/ID: <u>{this.state.dl}</u>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <p>
                Height: <u>{this.state.height}</u>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                Weight: <u>{this.state.weight}</u>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                Hair Color: <u>{this.state.hair}</u>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Further, authority is hereby granted to forensically analyze the
                blood seized pursuant to this search warrant for the presence of
                intoxicating substances.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Herein fail not, but have you then and there this warrant within
                three days, exclusive of the day of its issuance, with your
                return thereon, showing how you have executed the same.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Issued on this the {this.state.day} of {this.state.year}, at{" "}
                {this.state.time} o'clock P.M / A.M. to certify which witness my
                hand this day.
              </p>
            </div>
          </div>
          <div className="sigBox">
            <p>__________________________________</p>
            <div className="form-check d-flex p-2 bd-highlight">
              <input className="form-check-input " type="checkbox" value="" />
              <label className="form-check-label ">
                Municipal Judge, City of Acme,
                <p>Magistrate in and for Dallas and Collin Counties, Texas</p>
              </label>
            </div>
            <div className="form-check d-flex p-2 bd-highlight">
              <input className="form-check-input " type="checkbox" value="" />
              <label className="form-check-label ">
                Other Magistrate:
                <p>
                  Title and County __________________________________________
                </p>
              </label>
            </div>
          </div>
          <br />
          <br />
          <h5 className="text-center">
            DWI BLOOD SEARCH WARRANT,{" "}
            <u>
              {this.state.offenderFirst} {this.state.offenderLast},{" "}
              {this.state.dob}
            </u>
          </h5>
          <div className="page-break" />
          <div className="row">
            <div className="col-md-12">
              <h6 className="text-left">THE STATE OF TEXAS</h6>
              <h6 className="text-right">Docket No ______________</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h6 className="text-left">COUNTY OF DALLAS</h6>
              <h6 className="text-right">COURT: _____________</h6>
              <br />
              <h6 className="text-right">GPD CASE NO: _________________</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <br /> <br />
              <h6 className="text-center">
                <strong>
                  <u>ORDER FOR ASSISTANCE IN EXECUTION OF SEARCH WARRANT</u>
                </strong>
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                To any physician, nurse, medical technician, or phlebotomist,
                licensed by the State of Texas, or other person qualified in the
                intravenous removal of human blood:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Whereas, the affiant whose name appears on the affidavit
                attached hereto is a peace officer under the laws of Texas and
                did heretofore this day subscribe and swear to said affidavit
                before me (which said affidavit is here now made a part hereof
                for all purposes and incorporated herein as if written verbatim
                within the confines of this Order), and whereas I find that the
                verified facts stated by affiant in said Affidavit show that
                affiant has probable cause for the belief he/she expresses
                herein and establishes existence of proper grounds for issuance
                of a search warrant
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                And whereas, this court has issued a warrant to search for and
                seize blood from the suspect named and described in the
                Affidavit, to-wit:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Name:{" "}
                <u>
                  {this.state.offenderFirst} {this.state.offenderLast}
                </u>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <p>
                Race: <u>{this.state.race}</u>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                Sex: <u>{this.state.sex}</u>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                DOB: <u>{this.state.dob}</u>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                DL/ID: <u>{this.state.dl}</u>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <p>
                Height: <u>{this.state.height}</u>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                Weight: <u>{this.state.weight}</u>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                Hair Color: <u>{this.state.hair}</u>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                <strong>
                  Therefore you are hereby ordered and commanded to cooperate
                  with any peace officer requesting your professional assistance
                  in the execution of this warrant.
                </strong>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Herein fail not, as this order is directed to any individual
                whose aid and assistance is requested by the officer bearing the
                accompanying search warrant, is authorized by the full authority
                of this Court to issue warrants and orders to enforce the laws
                of the State of Texas, and Article 18.08 of the Texas Code of
                Criminal Procedure.{" "}
                <strong>
                  Any individual who fails to comply with this Order when
                  requested shall be liable for contempt of this Court and
                  subject to all penalties authorized by law.
                </strong>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                Ordered on this the {this.state.day} of {this.state.year}, at{" "}
                {this.state.time} o'clock P.M / A.M. to certify which witness my
                hand this day.
              </p>
            </div>
          </div>
          <div className="sigBox">
            <p>__________________________________</p>
            <div className="form-check d-flex p-2 bd-highlight">
              <input className="form-check-input " type="checkbox" value="" />
              <label className="form-check-label ">
                Municipal Judge, City of Acme,
                <p>Magistrate in and for Dallas and Collin Counties, Texas</p>
              </label>
            </div>
            <div className="form-check d-flex p-2 bd-highlight">
              <input className="form-check-input " type="checkbox" value="" />
              <label className="form-check-label ">
                Other Magistrate:
                <p>
                  Title and County __________________________________________
                </p>
              </label>
            </div>
          </div>
          <br />
          <br />
          <h5 className="text-center">
            DWI BLOOD SEARCH WARRANT,{" "}
            <u>
              {this.state.offenderFirst} {this.state.offenderLast},{" "}
              {this.state.dob}
            </u>
          </h5>
        </div>
      </React.Fragment>
    );
  }
}

export default WarrantFinal;
