import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/access/Register";
import Login from "./components/access/Login";
import Logout from "./components/access/Logout";
import WarrantPage from "./components/Warrant/WarrantPage";
import NarrativePage from "./components/Narrative/NarrativePage";
import WarrantFinal from "./components/Warrant/WarrantFinal";

import "./App.css";

class App extends Component {
  state = {};

  componentDidMount = () => {
    try {
      const getToken = localStorage.getItem("token");
      const user = jwtDecode(getToken);
      this.setState({ user });
    } catch (er) {}
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar user={this.state.user} />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/warrant" component={WarrantPage} />
            <Route exact path="/narrative" component={NarrativePage} />
            <Route exact path="/warrantfinal" component={WarrantFinal} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
