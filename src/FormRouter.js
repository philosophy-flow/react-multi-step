import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";
import Form3 from "./Forms/Form3";
import Form4 from "./Forms/Form4";

export default function FormRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/1" />
        </Route>
        <Route path="/1">
          <Form1 />
        </Route>
        <Route path="/2">
          <Form2 />
        </Route>
        <Route path="/3">
          <Form3 />
        </Route>
        <Route path="/4">
          <Form4 />
        </Route>
        <Route>
          <Redirect to="/1" />
        </Route>
      </Switch>
    </Router>
  );
}
