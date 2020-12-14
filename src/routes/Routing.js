import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeView } from "../view/homeview/HomeView";
import { AboutView } from "../view/aboutview/AboutView";
import { ContactView } from "../view/contactview/ContactView";
import { LoginView } from "../view/loggainview/LoginView";


export const Routing = (props) => {
  return (
    <Router>
      { props.children }
      <Switch>
        <Route exact path="/about" component={AboutView} />
        <Route excat path="/contact" component={ContactView} />
        <Route exact path="/login" component={LoginView} />
        <Route component={HomeView} />
      </Switch>
    </Router>
  );
}
