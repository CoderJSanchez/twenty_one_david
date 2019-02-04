import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/access/Register";
import Login from "./components/access/Login";
import Logout from "./components/access/Logout";
import WarrantPage from "./components/Warrant/WarrantPage";
import NarrativePage from "./components/Narrative/NarrativePage";
import SelectStep from "./components/layout/SelectStep";
import WarrantFinal from "./components/Warrant/WarrantFinal";
import BreathFailed from "./components/Narrative/BreathFailed";

import "./App.css";

class App extends Component {
  state = {};

  componentWillMount = () => {
    try {
      const getToken = localStorage.getItem("token");
      const user = jwtDecode(getToken);
      this.setState({ user });
    } catch (er) {}
  };

  render() {
    const { user } = this.state;
    return (
      <Router>
        <div>
          <Navbar user={user} />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route
              exact
              path="/warrant"
              render={props => {
                console.log(props);
                if (!user) return <Redirect to="/login" />;
                return <WarrantPage {...props} />;
              }}
            />
            <Route
              exact
              path="/narrative"
              render={props => {
                if (!user) return <Redirect to="/login" />;
                return <NarrativePage {...props} />;
              }}
            />

            <Route
              exact
              path="/selectstep"
              render={props => {
                if (!user) return <Redirect to="/login" />;
                return <SelectStep {...props} />;
              }}
            />
            <Route
              exact
              path="/warrantfinal"
              render={props => {
                if (!user) return <Redirect to="/login" />;
                return <WarrantFinal {...props} />;
              }}
            />
            <Route
              exact
              path="/breathfailed"
              render={props => {
                if (!user) return <Redirect to="/login" />;
                return <BreathFailed {...props} />;
              }}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
