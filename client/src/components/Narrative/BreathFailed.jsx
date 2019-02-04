import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import dic from "../../img/dic24Pic.png";

class BreathFailed extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-3">Breath Test Failed</h1>
        <h4>What you'll need complete.</h4>
        <div className="alert alert-danger" role="alert">
          Incident reports are NOT used for DWI arrests.
        </div>
        <ol>
          <li>Narrative</li>
          <li>Arrest Module</li>
          <li>DUI module</li>
          <li>PC Affidavit</li>
          <li>Prosecution Report</li>
          <li>
            DIC-23 (printed by you after narrative is in Arrest Module -
            automatically prints two copies)
          </li>
          <li>DIC-24 (printed by Intox operator)</li>
          <ul>
            <li>
              Intox operator will give offender one copy and bring a copy to
              you.
            </li>
          </ul>
          <li>DIC-25 (printed by Intox operator)</li>
          <ul>
            <li>
              Intox operator will give offender one copy and bring a copy to
              you.
            </li>
          </ul>
          <li>Criminal Complaint (printed by Intox operator)</li>
          <li>Two copies of breath test results (printed by Intox operator)</li>
          <li>Two copies of driving record</li>
          <li>DWI Envelope</li>
          <ul>
            <li>Place DL inside</li>
            <li>Write "No DL" if not seized</li>
          </ul>
        </ol>
        <div>
          <Button color="danger" onClick={this.toggle}>
            Sample Packet
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              <h5>DIC 24</h5>
              <img className="dic24pic" src={dic} alt="dic-24" />
              <h5>DIC 25</h5>
              <img className="dic24pic" src={dic} alt="dic-24" />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default BreathFailed;
