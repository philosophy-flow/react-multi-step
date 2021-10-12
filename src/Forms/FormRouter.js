import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Review from "./Review";

export default function FormRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/1">
          <Form1 />
        </Route>
        <Route path="/2">
          <Form2 />
        </Route>
        <Route path="/3">
          <Form3 />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
      </Switch>
    </Router>
  );
}
