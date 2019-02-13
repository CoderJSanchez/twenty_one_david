import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import dic23 from "../../img/dic-23.png";
import dic24 from "../../img/dic-24.png";
import dic23A from "../../img/DIC-23A.png";
import dpsSub from "../../img/dpsSubmission.png";
import bpf from "../../img/bloodProcedureForm.png";
import envelope from "../../img/envelope.jpg";

class BreathFailed extends Component {
  state = {
    modal: false,
    modal2: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  toggleNarrative = () => {
    this.setState({
      modal2: !this.state.modal2
    });
  };

  render() {
    return (
      <div className="container containerMargin">
        <h1 className="text-center mt-3">DWI with Blood Warrant</h1>
        <div className="alert alert-danger text-center" role="alert">
          Incident reports are NOT used for DWI arrests.
        </div>
        <div className="jumbotron jumboBackground">
          <div className="row mb-4">
            <div className="col-md-3">
              <Link to="/warrant">
                <Button color="danger">Create Warrant</Button>
              </Link>
            </div>
            <div className="col-md-3">
              <Button color="primary" onClick={this.toggle}>
                See sample packet
              </Button>
            </div>
            <div className="col-md-3">
              <Button color="primary" onClick={this.toggleNarrative}>
                Narrative sample
              </Button>
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#narrativeDetails"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Narrative break-down
              </button>
            </div>
            <div className="collapse" id="narrativeDetails">
              <div className="card card-body">
                <ol>
                  <li>Describe who saw offender on a public roadway</li>
                  <li>What suspicious driving behavior was seen?</li>
                  <li>Did the offender take long to pull over?</li>
                  <li>
                    What did Officer observe or smell when contacting driver?
                    Open container? Odor of alcoholic beverage?
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
                    State if you are certified to conduct Standard Field
                    Sobriety Tests (SFST)
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
                            tracking and equal pupil size. Officer used the tip
                            of his finger/tip of his pen as a stimulus for
                            subject to track with their eyes. Officer observed a
                            lack of smooth pursuit in both eyes, distinct and
                            sustained Nystagmus at maximum deviation in both
                            eyes and the onset of Nystagmus prior to 45 degrees
                            in both eyes. Officer observed a total of six out of
                            six clues.
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
                            The next test conducted was the Walk and Turn.
                            Officer explained and demonstrated for subject how
                            to properly conduct the test and subject stated they
                            understood how to properly conduct the test.
                          </p>

                          <p>
                            During the instruction phase, Officer observed the
                            subject start the test too soon and fail to maintain
                            balance while listening to instructions.
                          </p>

                          <p>
                            During the walking phase, Officer observed the
                            subject to miss touching heel to toe multiple times,
                            step off the line, stop while walking, use their
                            arms for balance, make an improper turn and take the
                            wrong number of steps. Officer observed a total of
                            eight out of eight clues.
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
                            perform the test and the subject stated they
                            understood how to properly conduct the test. Officer
                            observed the subject place their foot down multiple
                            times, hop, sway side to side and use their arms for
                            balance. Officer observed a total of four out of
                            four clues.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <li>Identify the intox operator</li>
                  <li>
                    State that offender was provided a true and complete copy of
                    the DIC-24, Statutory warning
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <h4 className="text-center text-white">
            Intox operator will give you the following documents.
          </h4>
          <div className="row">
            <div className="col-md-6">
              <div className="card" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">DIC-23A</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Specimen Routing Report
                  </h6>
                  <p className="card-text">
                    This will go to the hospital with you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card mb-4" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">DIC-24</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Statutory Warning
                  </h6>
                  <p className="card-text">
                    Intox will print 2 copes. One goes to offender and one in
                    your packet. Set aside, you're done with this.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">THP-51A</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Affidavit of person who withdrew blood
                  </h6>
                  <p className="card-text">
                    This will go to the hospital with you.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6" />
          </div>
        </div>
        <div className="jumbotron jumboBackground">
          <h4 className="text-center text-white">
            Arresting Officer will complete the following.
          </h4>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">DWI Module</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Completed in i/LEADS
                  </h6>
                  <p className="card-text">
                    Under the breath sample tab you will add the results and
                    times taken.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Arrest Module</h5>
                  <h6 className="card-subtitle mb-2 text-muted">PER SOP</h6>
                  <p className="card-text">
                    Complete like any other arrest. No futher action required in
                    the module.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Prosecution</h5>
                  <h6 className="card-subtitle mb-2 text-muted">PER SOP</h6>
                  <p className="card-text">
                    Complete like any other prosecution. No futher action
                    required in the module.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Driving Record</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Two copies required
                  </h6>
                  <p className="card-text">
                    Print two copies even if offender has no DL. Print the empty
                    return. Place in packet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">PC Affidavit</h5>
                  <h6 className="card-subtitle mb-2 text-muted">PER SOP</h6>
                  <p className="card-text">
                    Complete like any other PC Affidavit. No futher action
                    required in the module.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">DWI Envelope</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Two copies required
                  </h6>
                  <p className="card-text">
                    Place seized DL in envelope. If no DL then write " No DL" on
                    envelope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumboBackground">
          <h4 className="text-center text-white">
            Take these documents to the hospital
          </h4>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">DIC-23A</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Specimen Routing Report
                  </h6>
                  <p className="card-text">
                    Fill out from "Defendant Name" to Section 3.
                  </p>
                  <uo>
                    <li>
                      <small>If nurse draws blood, check the nurse box.</small>
                    </li>
                    <li>
                      <small>
                        If tech or phlebotomist, check Qualified Tech
                      </small>
                    </li>
                  </uo>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">DPS Lab Submission</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Print from CADWEB
                  </h6>
                  <p className="card-text">
                    Attach to outside of blood kit. Fill out all appropriate
                    boxes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-3" style={{ width: 18 + "rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Blood Draw Procedure Form</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Comes from Warrant packet.
                  </h6>
                  <p className="card-text">
                    Make sure person whe drew blood signs this form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              <h5>
                DWI Envelope - <small>Get from Report Writing Room</small>
              </h5>
              <img className="dwiEnvelope" src={envelope} alt="dic-24" />
              <h5>
                DIC 23 - <small>Printed by officer after narrative</small>
              </h5>
              <img className="dicPic" src={dic23} alt="dic-23" />
              <h5>
                DIC 24 - <small>Given to officer by Intox</small>
              </h5>
              <img className="dicPic" src={dic24} alt="dic-24" />
              <h5>
                DPS Submission - <small>Printed from CADWEB</small>
              </h5>
              <img className="dicPic" src={dpsSub} alt="dic-24" />
              <h5>
                Blood Draw Procedure Formn - <small>Printed with warrant</small>
              </h5>
              <img className="dicPic" src={bpf} alt="dic-24" />
              <h5>
                DIC-23A - <small>Given to officer by Intox</small>
              </h5>
              <img className="dicPic" src={dic23A} alt="dic-24" />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <Modal
          isOpen={this.state.modal2}
          toggle={this.toggleNarrative}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleNarrative}>
            Sample DWI Narrative
          </ModalHeader>
          <ModalBody>
            <p>
              On 1/1/2030 at 5:00pm Officer Friendly was dispatched to the 2000
              block of Pleasant Street in Garland, Dallas County, Texas in
              reference to an accident. While enroute to the call, officeres
              were informed via police radio that an A/M subject had driven his
              vehicle over the curb, flattening all four tires. Officers were
              further advised the male was wearing a purple shirt and was laying
              on the ground and the witness was still on scene waiting for
              officers to arrive. Officer Friendly arrived and spoke with a
              witness who identified himself and Jone Doe WM 1/1/2001. Witness
              Doe told Officer Friendly that he was traveling eastbound in the
              2000 block of Some Street on this date at approximately 4:55pm.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleNarrative}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BreathFailed;
