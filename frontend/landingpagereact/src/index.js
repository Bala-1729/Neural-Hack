import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import InstantUser from "views/InstantUserPage/InstantUser.js"
import LoginPage from "views/LoginPage/LoginPage";
import Dashboard from "views/Dashboard/Dashboard";
import Profile from "views/Profile/Profile";
import Predict from "views/Predict/Predict"
import PatientHistory from "views/PatientHistory/PatientHistory"
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/instantUser" component={InstantUser} />
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/profile" component={Profile}/>  
      <Route path="/predict" component={Predict}/>
      <Route path="/patientHistory" component={PatientHistory}/>
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
