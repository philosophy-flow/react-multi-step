import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Form2 from "../Form2";

// needed because redux actions are dispatched in submit function
const initialState = {
  activeStep: 2,
  subForm2: { data: {}, complete: false },
};
const mockStore = configureStore();
const store = mockStore(initialState);

// needed because useHistory is used in submit function
const history = createMemoryHistory();

describe("form 2 validation", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Form2 />
        </Router>
      </Provider>
    );
  });

  test("show address 1 field validation on blur", async () => {
    const address = screen.getByLabelText(/Address Line 1:/i);
    fireEvent.blur(address);

    let addressError;
    await waitFor(() => {
      addressError = screen.getByText("Required");
    });
    expect(addressError).not.toBeNull();
  });

  test("show city field validation on blur", async () => {
    const city = screen.getByLabelText(/City:/i);
    fireEvent.blur(city);

    let cityError;
    await waitFor(() => {
      cityError = screen.getByText("Required");
    });
    expect(cityError).not.toBeNull();
  });

  test("show zip code field validation on blur", async () => {
    const zipcode = screen.getByLabelText(/Zip Code:/i);
    fireEvent.blur(zipcode);

    let zipcodeError;
    await waitFor(() => {
      zipcodeError = screen.getByText("Required");
    });
    expect(zipcodeError).not.toBeNull();
  });

  test("show zipcode field validation for incorrect format", async () => {
    userEvent.type(screen.getByLabelText(/Zip Code:/i), "123456");

    const zipcode = screen.getByLabelText(/Zip Code:/i);
    fireEvent.blur(zipcode);

    let zipcodeError;
    await waitFor(() => {
      zipcodeError = screen.getByText("Invalid zipcode");
    });

    expect(zipcodeError).not.toBeNull();
  });
});
