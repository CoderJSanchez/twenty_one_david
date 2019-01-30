import React, { Component } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Jumbotron
} from "reactstrap";

class SelectStep extends Component {
  goToNarrative = e => {
    e.preventDefault();
    window.location = "/narrative";
  };
  goToWarrant = e => {
    e.preventDefault();
    window.location = "/warrant";
  };

  render() {
    return (
      <div>
        <h2 className="text-center mt-4">Welcome to Crystal</h2>
        <Jumbotron className="mt-4 bg-dark">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle className="text-center font-weight-bold">
                  Start Narrative
                </CardTitle>
                <CardText>
                  This willl walk you though completing the narrative portion of
                  your report.
                </CardText>
                <Button onClick={this.goToNarrative} color="info">
                  Go to Narrative
                </Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle className="text-center font-weight-bold">
                  Start Warrant
                </CardTitle>
                <CardText>
                  This willl walk you though completing the warrant portion of
                  your report.
                </CardText>
                <Button onClick={this.goToWarrant} color="info">
                  Go to Warrant
                </Button>
              </Card>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}

export default SelectStep;
