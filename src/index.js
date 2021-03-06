import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import HackathonPage from "views/HackathonPage/HackathonPage.js";
import IntroResourcesPage from "views/IntroResourcesPage/IntroResourcesPage.js";
import AdvancedResourcesPage from "views/AdvancedResourcesPage/AdvancedResourcesPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path={process.env.PUBLIC_URL + '/landing-page'} component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path={process.env.PUBLIC_URL + '/hackandtech'} component={HackathonPage} />
      <Route path={process.env.PUBLIC_URL + '/introstarters'} component={IntroResourcesPage} />
      <Route path={process.env.PUBLIC_URL + '/advancedstarters'} component={AdvancedResourcesPage} />
      <Route path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
