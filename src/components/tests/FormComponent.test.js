import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FormComponent from "../FormComponent";
import TextInput from "../TextInput";

test("form component submission", async () => {
  const initialValues = {
    arbitraryVal: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.arbitraryVal) {
      errors.arbitraryVal = "Required";
    }
    return errors;
  };

  const handleSubmit = jest.fn();

  render(
    <FormComponent
      handleSubmit={handleSubmit}
      initialValues={initialValues}
      validate={validate}
    >
      <TextInput label="Arbitrary Input" name="arbitraryVal" />
    </FormComponent>
  );

  userEvent.type(screen.getByLabelText(/Arbitrary/i), "Foo");

  userEvent.click(screen.getByText(/next/i));

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalled();
  });
});
