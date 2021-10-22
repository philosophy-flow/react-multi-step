import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormComponent from "../FormComponent";
import TextInput from "../TextInput";

test("form component submission", async () => {
  const initialValues = {
    arbitrayVal: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.arbitrayVal) {
      errors.arbitrayVal = "Required";
    }
    return errors;
  };

  const handleSubmit = jest.fn();

  render(
    <FormComponent
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validate={validate}
    >
      <TextInput label="Arbitrary Input" name="arbitraryVal" />
    </FormComponent>
  );

  userEvent.type(screen.getByLabelText(/Arbitrary/i), "Foo");

  userEvent.click(screen.getByRole("button"));

  screen.debug();

  await waitFor(() => expect(handleSubmit).toHaveBeenCalled());
});
