// myForm.test.js
import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Form1 from "../Form1";

// needed because redux actions are dispatched in submit function
const initialState = { subForm1: { data: {}, complete: false } };
const mockStore = configureStore();
const store = mockStore(initialState);

// needed because useHistory is used in submit function
const history = createMemoryHistory();

// test("rendering and submitting form", async () => {
//   const handleSubmit = jest.fn();

//   render(
//     <Provider store={store}>
//       <Router history={history}>
//         <Form1 onSubmit={handleSubmit} />
//       </Router>
//     </Provider>
//   );

//   // user enters inputs into each field
//   userEvent.type(screen.getByLabelText(/First Name:/i), "John");
//   userEvent.type(screen.getByLabelText(/Last Name:/i), "Doe");
//   userEvent.type(screen.getByLabelText(/Email:/i), "test@test.com");

//   // user clicks next button (type=submit)
//   userEvent.click(screen.getByRole("button"));

//   await waitFor(() =>
//     expect(handleSubmit).toHaveBeenCalledWith({
//       email: "test@test.com",
//       firstName: "John",
//       lastName: "Doe",
//     })
//   );
// });

test("show first name field validation on blur", async () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Form1 />
      </Router>
    </Provider>
  );

  const firstName = getByLabelText(/First Name:/i);
  fireEvent.blur(firstName);

  let firstNameError;
  await waitFor(() => {
    firstNameError = getByText("Required");
  });
  expect(firstNameError).not.toBeNull();
});

test("show last name field validation on blur", async () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Form1 />
      </Router>
    </Provider>
  );

  const lastName = getByLabelText(/Last Name:/i);
  fireEvent.blur(lastName);

  let lastNameError;
  await waitFor(() => {
    lastNameError = getByText("Required");
  });
  expect(lastNameError).not.toBeNull();
});

test("show email field validation on blur", async () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Form1 />
      </Router>
    </Provider>
  );

  const email = getByLabelText(/Email:/i);
  fireEvent.blur(email);

  let emailError;
  await waitFor(() => {
    emailError = getByText("Required");
  });
  expect(emailError).not.toBeNull();
});

test("show email field validation for incorrect format", async () => {
  const { getByLabelText, getByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Form1 />
      </Router>
    </Provider>
  );

  userEvent.type(screen.getByLabelText(/Email:/i), "invalid email");

  const email = getByLabelText(/Email:/i);
  fireEvent.blur(email);

  let emailError;
  await waitFor(() => {
    emailError = getByText("Invalid email address");
  });

  expect(emailError).not.toBeNull();
});
