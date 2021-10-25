import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Form4 from "../Form4";

const initialState = {
  activeStep: 4,
  subForm1: {
    data: { firstName: "Test", lastName: "User", email: "test@test.com" },
    complete: true,
  },
  subForm2: {
    data: {
      address1: "123 Main St.",
      address2: "Apt C",
      city: "Springfield",
      zipcode: 12345,
    },
    complete: true,
  },
  subForm3: { data: { product: "Test Item" }, complete: true },
};
const mockStore = configureStore();
const store = mockStore(initialState);

const history = createMemoryHistory();

describe("form 4", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Form4 />
        </Router>
      </Provider>
    );
  });

  test("alert appears after successful submission", async () => {
    window.alert = jest.fn();

    userEvent.click(screen.getByText(/submit form/i));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled();
    });
  });

  test("previous subform appears when back button is clicked", async () => {
    history.push = jest.fn();

    userEvent.click(screen.getByText(/back/i));

    await waitFor(() => {
      expect(history.push).toHaveBeenCalledWith("3");
    });
  });
});
