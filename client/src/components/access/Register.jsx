import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";

class Register extends Component {
  state = {
    name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
    errors: {}
  };

  validate = () => {
    const errors = {};
    if (this.state.name.trim() === "") errors.name = "name is required";
    if (this.state.email.trim() === "") errors.email = "Email is required";
    if (this.state.password.trim() === "")
      errors.password = "Password is required";
    if (this.state.password2.trim() === "")
      errors.password2 = "Confirm password is required";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const newOfficer = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    const errors = this.validate();
    //this line makes sure that the errors property is always set to an object, otherwise app crashes
    this.setState({ errors: errors || {} });
    if (errors) return;

    //call server
    axios
      .post("/api/users/register", newOfficer)
      .then(res => (window.location = "/login"))
      .catch(err => console.log(err));
  };

  validateProperty = input => {
    if (input.name === "name") {
      if (input.value.trim() === "") return "Name is required";
    }
    if (input.email === "email") {
      if (input.value.trim() === "") return "Email is required";
    }
    if (input.password === "password") {
      if (input.value.trim() === "") return "Password is required";
    }
    if (input.password2 === "password2") {
      if (input.value.trim() === "") return "Confirm password is required";
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="logInJumbo jumbotron">
          <div className="row">
            <div className="col-md-6 m-auto text-center">
              <h2 className="text-white display-4">Sign Up</h2>
              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control", {
                      "is-invalid": errors.name
                    })}
                    id="userName"
                    aria-describedby="userName"
                    placeholder="First & Last Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleOnChange}
                  />
                  {errors.name && (
                    <div className="alert alert-danger">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
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
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleOnChange}
                  />
                  {errors.password && (
                    <div className="alert alert-danger">{errors.password}</div>
                  )}
                  <small className="form-text text-muted text-left">
                    minimum of 6 charcters.
                  </small>
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
                  {errors.password2 && (
                    <div className="alert alert-danger">{errors.password2}</div>
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

export default Register;
