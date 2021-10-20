import store from "../../redux/store";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const withProvider = (story) => (
  <Provider store={store}>
    <Router>{story()}</Router>
  </Provider>
);

export default withProvider;
