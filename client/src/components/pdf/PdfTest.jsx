import React, { Component } from "react";
class PdfText extends Component {
  state = {};
  render() {
    return (
      <div className="Container mt-2 page">
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
                <u>AFFIDIAVIT FOR BLOOD SEARCH WARRANT RELATED TO DWI ARREST</u>
              </strong>
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-left">
              The undersigned Affiant, being a peace officer under the laws of
              Texas and being duly sworn, on oath makes the following statements
              and accusations:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-left">
              My name is Officer <span className="afLastName" />,{" "}
              <span className="afId" />, I am a peace officer employed by the
              following law enforcement agency: GARLAND POLICE DEPARTMENT. I
              have successfully completed the State-mandated requirements to
              become a peace officer.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ol>
              <li>
                <p>
                  There is in <span className="showCountyOfExecution" /> County,
                  Texas a suspected person (“suspect”) described as follows:
                </p>
                <br />
              </li>
              <p>
                Name: <u>Julio Sanchez</u>
              </p>
              <div className="row">
                <div className="col-md-3">
                  <p>
                    Race: <u>White</u>
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    Sex: <u>Male</u>
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    DOB: <u>07/12/1980</u>
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    DL/ID: <u>1234567</u>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <p>
                    Height: <u>5'3''</u>
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    Weight: <u>200</u>lbs.
                  </p>
                </div>
                <div className="col-md-3">
                  <p>
                    Hair color: <u>Black</u>
                  </p>
                </div>
              </div>
              <li>
                <p>
                  {" "}
                  Suspect is presently in custody of a law enforcement agency
                  within Dallas County, namely the
                  <br />
                  <strong>
                    <u>GARLAND POLICEDEPARTMENT</u>
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
                  On the <span className="day" /> day of{" "}
                  <span className="month" /> , <span className="year" /> , at or
                  about <span className="time" /> o’clock , the suspect did then
                  and there operate a motor vehicle in a public place in County,
                  Texas while intoxicated by not having the normal use of mental
                  or physical faculties by reason of the introduction of
                  alcohol, a controlled substance, a drug, a dangerous drug, a
                  combination of two or more of those substances, or any other
                  substance into the suspect’s body.
                </p>
              </li>
              <li>
                <p>
                  The suspect was operating a motor vehicle in a public place,
                  to wit: <span className="address" />, which is in
                  <span className="showCountyOfOffense" /> County, Texas, on the
                  above date and time based on the following facts:
                </p>
                <div className="row">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
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
                      value=""
                    />
                    <label className="form-check-label">
                      The suspect admitted to me that the suspect had been
                      operating a motor vehicle in a public place in County,
                      Texas, prior to my arrival at the scene.
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      A witness, <span className="witfirstName" />{" "}
                      <span className="witLastName" />{" "}
                      <span className="ofcrWitLast" />{" "}
                      <span className="ofcrWitId" />, conveyed information to me
                      that he/she witnessed the suspect operating a motor
                      vehicle in a public place in County, Texas, prior to my
                      arrival at the scene.
                    </label>
                  </div>
                </div>
              </li>
              <br />
              <li>
                <p>
                  Driving behavior: Additional facts leading me to believe that
                  the suspect was intoxicated while operating a motor vehicle in
                  a public place include: <span className="drivingBehavior" />{" "}
                  The public place is described as: briefly describe the public
                  place (ex. roadway, public parking lot, etc.).
                </p>
              </li>
              <li>
                <p>
                  During contact with the suspect, the following observations
                  about the suspect were made:
                </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    I observed these observations.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id=""
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    A witness, <span className="witfirstName" />{" "}
                    <span className="witLastName" />{" "}
                    <span className="ofcrWitLast" />{" "}
                    <span className="ofcrWitId" />, conveyed information to me
                    that he/she witnessed these observations.
                  </label>
                </div>
              </li>
              <br />
              <br />
              <br />
              <br />
              <h5 className="text-center">
                DWI BLOOD SEARCH WARRANT, <u>Jason Borne, 07/12/1900</u>
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
                    />
                    <label className="form-check-label">Strong</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Moderate</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Faint</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
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
                    />
                    <label className="form-check-label">Bloodshot</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Red/Pink</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Glassy</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Watery</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Dilated</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Normal</label>
                  </div>
                  {/* speech */}
                  <p>
                    <strong>Eyes</strong>
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Thick-tongued</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Incoherent</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Slurred</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Slow</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Mumbled</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Stuttered</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Talkative</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Rapid</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Repetitive</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Fair</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
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
                    />
                    <label className="form-check-label">Argumentative</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Combative</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Profane</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Sarcastic</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Insulting</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Cooperative</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Cocky</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Laughing</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Carefree</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Indifferent</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Sleepy/Drowsy</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Polite</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Silent</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Reserved</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Calm</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Anxious</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Excited</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Confused</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Uninhibited</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Mood Swings</label>
                  </div>

                  {/* speech */}
                  <p>
                    <strong>Eyes</strong>
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Thick-tongued</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Incoherent</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Slurred</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Slow</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Mumbled</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Stuttered</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Talkative</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Rapid</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Repetitive</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Fair</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Good</label>
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
                    />
                    <label className="form-check-label">Falling</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Unsteady</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Swaying</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Needed Support</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Fair</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
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
                    />
                    <label className="form-check-label">Falling</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Staggering</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Swaying</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Heavy Footed</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Fair</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Good</label>
                  </div>
                  {/* speech */}
                  <p>
                    <strong>Eyes</strong>
                  </p>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Thick-tongued</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Incoherent</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Slurred</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Slow</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Mumbled</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Stuttered</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Talkative</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Rapid</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Repetitive</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Fair</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">Good</label>
                  </div>
                </div>
              </div>
              <br />
              <li>
                <p>
                  During the contact with the suspect, the suspect was requested
                  to perform field sobriety tests. The observations, signs of
                  intoxication, and the results of those test are listed below.
                  Field sobriety tests were conducted by:
                </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">
                    Affiant who is certified and/or trained in the detection of
                    impaired or intoxicated drivers through the use of three
                    standardized field sobriety tests [SFSTs], namely:
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
                    officer, who is known by your Affiant to be certified and/or
                    trained in the detection of impaired or intoxicated drivers
                    through the use of three standardized field sobriety tests
                    [SFSTs], namely: Horizontal Gaze Nystagmus [HGN], One-Leg
                    Stand [OLS], and Walk and Turn [WAT].
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
                    tests, learned during my Basic Garland Police Academy
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
                    variety of field sobriety tests, taught to them during their
                    Basic Garland Police Academy training.
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
                    the following statements: Enter any statements the defendant
                    made on why he refused to do sobriety tests.
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
                    The suspect was injured or unconscious and unable to perform
                    any sobriety tests.
                  </label>
                </div>
              </li>
              <br />
              <br />
              <h5 className="text-center">
                DWI BLOOD SEARCH WARRANT, <u>Jason Borne, 07/12/1900</u>
              </h5>
              <div className="page-break" />
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default PdfText;
