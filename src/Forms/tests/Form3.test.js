import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Form3 from "../Form3";

// needed because redux actions are dispatched in submit function
const initialState = {
  activeStep: 3,
  subForm3: { data: {}, complete: false },
  products: [
    { id: 1, title: "Test Product #1", price: 10 },
    { id: 2, title: "Test Product #2", price: 20 },
  ],
};
const mockStore = configureStore();
const store = mockStore(initialState);

// needed because useHistory is used in submit function
const history = createMemoryHistory();

describe("form 3", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Form3 />
        </Router>
      </Provider>
    );
  });

  test("show product validation if submitted without selection", async () => {
    userEvent.click(screen.getByText(/next/i));

    let productError;
    await waitFor(() => {
      productError = screen.getByText("Select a product");
    });

    expect(productError).not.toBeNull();
  });

  test("next subform appears after successful submission", async () => {
    history.push = jest.fn();
    userEvent.click(screen.getByLabelText(/Test Product #1/i));

    userEvent.click(screen.getByText(/next/i));

    await waitFor(() => {
      expect(history.push).toHaveBeenCalledWith("4");
    });
  });

  test("previous subform appears when back button is clicked", async () => {
    history.push = jest.fn();

    userEvent.click(screen.getByText(/back/i));

    await waitFor(() => {
      expect(history.push).toHaveBeenCalledWith("2");
    });
  });
});
