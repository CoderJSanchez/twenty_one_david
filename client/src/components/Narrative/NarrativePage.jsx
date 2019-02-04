import React, { Component } from "react";
import { Link } from "react-router-dom";

class NarrativePage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h3>
          Step<span className="badge badge-secondary ml-1">1</span>
        </h3>
        <button
          className="btn btn-primary mt-4"
          type="button"
          data-toggle="collapse"
          data-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Click for narrative details
        </button>

        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <ol>
              <li>Describe who saw offender on a public roadway</li>
              <li>What suspicious driving behavior was seen?</li>
              <li>Did the offender take long to pull over?</li>
              <li>
                What did Officer observe or smell when contacting driver? Open
                container? Odor of alcoholic beverage?
              </li>
              <li>
                What was observed when having offender exit the vehicle?
                Stumbling? Holding on to vehicle for balance?
              </li>
              <li>Physical observations.</li>
              <ul>
                <li>Bloodshot eyes</li>
                <li>Watery eyes</li>
                <li>Odor of alcoholic beverages from breath</li>
                <li>Poor balance while standing</li>
              </ul>
              <li>
                State if you are certified to conduct Standard Field Sobriety
                Tests (SFST)
              </li>
              <li>State if offender has/does not have injureis</li>
              <li>Is offender wearing glasses or contacts?</li>
              <li>SFST's conducted</li>
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Horizontal Gaze Nystagmus
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        The first test conducted was the Horizontal Gazy
                        Nystagmus. Officer confirmed that subject had equal
                        tracking and equal pupil size. Officer used the tip of
                        his finger/tip of his pen as a stimulus for subject to
                        track with their eyes. Officer observed a lack of smooth
                        pursuit in both eyes, distinct and sustained Nystagmus
                        at maximum deviation in both eyes and the onset of
                        Nystagmus prior to 45 degrees in both eyes. Officer
                        observed a total of six out of six clues.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Walk and Turn
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        The next test conducted was the Walk and Turn. Officer
                        explained and demonstrated for subject how to properly
                        conduct the test and subject stated they understood how
                        to properly conduct the test.
                      </p>

                      <p>
                        During the instruction phase, Officer observed the
                        subject start the test too soon and fail to maintain
                        balance while listening to instructions.
                      </p>

                      <p>
                        During the walking phase, Officer observed the subject
                        to miss touching heel to toe multiple times, step off
                        the line, stop while walking, use their arms for
                        balance, make an improper turn and take the wrong number
                        of steps. Officer observed a total of eight out of eight
                        clues.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        One Leg Stand
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        The last test conducted was the One Leg Stand. Again
                        Officer explained and demonstrated how to properly
                        perform the test and the subject stated they understood
                        how to properly conduct the test. Officer observed the
                        subject place their foot down multiple times, hop, sway
                        side to side and use their arms for balance. Officer
                        observed a total of four out of four clues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <li>Identify the intox operator</li>
              <li>
                State that offender was provided a true and complete copy of the
                DIC-24, Statutory warning
              </li>
            </ol>
          </div>
        </div>
        <br />
        <hr />
        <section id="intoxIsBack">
          <h3>
            Step<span className="badge badge-secondary ml-1 mt-4">2</span>
          </h3>
          <p>Choose the appropriate section below.</p>
          <br />
          <div className="row">
            <div className="col-md-3">
              <div className="card" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Breath - Failed</h5>
                  <Link className="card-link" to="/breathfailed">
                    Card link
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Breath - Passed</h5>
                  <Link className="card-link" to="/breathfailed">
                    Card link
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Voluntary Blood Sample</h5>
                  <Link className="card-link" to="/breathfailed">
                    Card link
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Refused - Blood Warrant</h5>
                  <Link className="card-link" to="/breathfailed">
                    Card link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section />
      </div>
    );
  }
}

export default NarrativePage;
