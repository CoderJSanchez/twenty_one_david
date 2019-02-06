import React, { Component } from "react";
import { Link } from "react-router-dom";
import intox from "../../img/Intoxilyzer9000.png";
import blood from "../../img/bloodDraw.jpeg";

class NarrativePage extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="jumbotron text-white text-center mt-4 jumboBackground">
          <h1>Select the DWI to complete.</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/breathfailed">
              <div className="card cardStyle" style={{ width: 18 + "rem" }}>
                <img
                  src={intox}
                  className="card-img-top dwiImage"
                  alt="Intox"
                />
                <div className="card-body">
                  <h5 className="card-title">Breath Sample Provided</h5>
                  <p className="card-text">
                    <ul>
                      <li>Any DWI type</li>
                      <li>Mandatory</li>
                      <li>Felony</li>
                    </ul>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/warrantguide">
              <div className="card cardStyle" style={{ width: 18 + "rem" }}>
                <img
                  src={blood}
                  className="card-img-top dwiImage"
                  alt="Intox"
                />
                <div className="card-body">
                  <h5 className="card-title">Blood Warrant</h5>
                  <p className="card-text">
                    <ul>
                      <li>Mandatory for refusal</li>
                      <li>Recommend for SBI</li>
                      <li>Manslaughter</li>
                    </ul>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NarrativePage;
