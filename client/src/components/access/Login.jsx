import React, { Component } from "react";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const officer = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(officer);
  };

  render() {
    return (
      <div className="container">
        <div className="logInJumbo jumbotron">
          <div className="row">
            <div className="col-md-6 m-auto text-center">
              <h2 className="text-white display-4">Log In</h2>
              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.name}
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

export default Login;
