// myForm.test.js
import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Form2 from "../Form2";

// needed because redux actions are dispatched in submit function
const initialState = { subForm2: { data: {}, complete: false } };
const mockStore = configureStore();
const store = mockStore(initialState);

// needed because useHistory is used in submit function
const history = createMemoryHistory();

test("show address 1 field validation on blur", async () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Form2 />
      </Router>
    </Provider>
  );

  const address = getByLabelText(/Address Line 1:/i);
  fireEvent.blur(address);

  let addressError;
  await waitFor(() => {
    addressError = getByText("Required");
  });
  expect(addressError).not.toBeNull();
});

test("show city field validation on blur", async () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Form2 />
      </Router>
    </Provider>
  );

  const city = getByLabelText(/City:/i);
  fireEvent.blur(city);

  let cityError;
  await waitFor(() => {
    cityError = getByText("Required");
  });
  expect(cityError).not.toBeNull();
});

test("show zip code field validation on blur", async () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Form2 />
      </Router>
    </Provider>
  );

  const zipcode = getByLabelText(/Zip Code:/i);
  fireEvent.blur(zipcode);

  let zipcodeError;
  await waitFor(() => {
    zipcodeError = getByText("Required");
  });
  expect(zipcodeError).not.toBeNull();
});

test("show zipcode field validation for incorrect format", async () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Form2 />
      </Router>
    </Provider>
  );

  userEvent.type(screen.getByLabelText(/Zip Code:/i), "123456");

  const zipcode = getByLabelText(/Zip Code:/i);
  fireEvent.blur(zipcode);

  let zipcodeError;
  await waitFor(() => {
    zipcodeError = getByText("Invalid zipcode");
  });

  expect(zipcodeError).not.toBeNull();
});
