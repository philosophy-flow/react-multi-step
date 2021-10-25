import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Form1 from "../Form1";

// needed because redux actions are dispatched in submit function
const initialState = {
  activeStep: 1,
  subForm1: { data: {}, complete: false },
};
const mockStore = configureStore();
const store = mockStore(initialState);

// needed because useHistory is used in submit function
const history = createMemoryHistory();

describe("form 1 validation", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Form1 />
        </Router>
      </Provider>
    );
  });

  test("show first name field validation on blur", async () => {
    const firstName = screen.getByLabelText(/First Name:/i);
    fireEvent.blur(firstName);

    let firstNameError;
    await waitFor(() => {
      firstNameError = screen.getByText("Required");
    });
    expect(firstNameError).not.toBeNull();
  });

  test("show last name field validation on blur", async () => {
    const lastName = screen.getByLabelText(/Last Name:/i);
    fireEvent.blur(lastName);

    let lastNameError;
    await waitFor(() => {
      lastNameError = screen.getByText("Required");
    });
    expect(lastNameError).not.toBeNull();
  });

  test("show email field validation on blur", async () => {
    const email = screen.getByLabelText(/Email:/i);
    fireEvent.blur(email);

    let emailError;
    await waitFor(() => {
      emailError = screen.getByText("Required");
    });
    expect(emailError).not.toBeNull();
  });

  test("show email field validation for incorrect format", async () => {
    userEvent.type(screen.getByLabelText(/Email:/i), "invalid email");

    const email = screen.getByLabelText(/Email:/i);
    fireEvent.blur(email);

    let emailError;
    await waitFor(() => {
      emailError = screen.getByText("Invalid format");
    });

    expect(emailError).not.toBeNull();
  });
});
