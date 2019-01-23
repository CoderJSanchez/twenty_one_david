import React, { Component } from "react";
class Register extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
    password2: ""
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="logInJumbo jumbotron">
          <div className="row">
            <div className="col-md-6 m-auto text-center">
              <h2 className="text-white display-4">Sign Up</h2>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    aria-describedby="userName"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password2"
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.handleOnChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;