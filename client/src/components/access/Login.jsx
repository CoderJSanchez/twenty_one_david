import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  validate = () => {
    const errors = {};
    if (this.state.email.trim() === "") errors.email = "email is required";
    if (this.state.password.trim() === "")
      errors.password = "password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const officer = {
      email: this.state.email,
      password: this.state.password
    };

    const errors = this.validate();
    console.log(errors);
    //this line makes sure that the errors property is always set to an object, otherwise app crashes
    this.setState({ errors: errors || {} });
    if (errors) return;

    //call the server
    axios
      .post("/api/users/login", officer)
      .then(res => {
        localStorage.setItem("token", JSON.stringify(res.data));
        window.location = "/warrant";
      })
      .catch(err => console.log(err));
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, password, errors } = this.state;
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
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    value={name}
                    onChange={this.handleOnChange}
                  />
                  {errors.email && (
                    <div className="alert alert-danger">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleOnChange}
                  />
                  {errors.password && (
                    <div className="alert alert-danger">{errors.password}</div>
                  )}
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
