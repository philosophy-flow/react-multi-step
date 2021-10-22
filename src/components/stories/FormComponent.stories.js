import React from "react";
import withFormik from "storybook-formik";

import FormComponent from "../FormComponent";
import TextInput from "../TextInput";
import RadioInput from "../RadioInput";

import "../../index.css";
import "../../Forms/Form.css";

export default {
  title: "Form",
  component: FormComponent,
  decorators: [withFormik],
};

function validationFunc(values) {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}

const handleSubmit = (values) => {
  console.log(values);
};

const Template = (args) => <FormComponent {...args} />;

export const TextForm = Template.bind({});
TextForm.args = {
  title: "Text Form",
  initialValues: {},
  validate: validationFunc,
  onSubmit: handleSubmit,
  children: [
    <TextInput name="firstName" label="First Name" />,
    <TextInput name="lastName" label="Last Name" />,
    <TextInput name="email" label="Email Address" />,
  ],
};

export const RadioForm = Template.bind({});
RadioForm.args = {
  title: "Radio Form",
  initialValues: { radio: "" },
  children: [
    <RadioInput name="radio" value="1" />,
    <RadioInput name="radio" value="2" />,
    <RadioInput name="radio" value="3" />,
  ],
};

export const HybridForm = Template.bind({});
HybridForm.args = {
  title: "Hybrid Form",
  initialValues: { firstName: "", lastName: "", radio: "" },
  children: [
    <TextInput name="firstName" label="First Name" />,
    <TextInput name="lastName" label="Last Name" />,
    <RadioInput name="radio" value="1" />,
    <RadioInput name="radio" value="2" />,
    <RadioInput name="radio" value="3" />,
  ],
};
