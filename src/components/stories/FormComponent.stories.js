import React from "react";
import FormComponent from "../FormComponent";
import withFormik from "storybook-formik";

import TextInput from "../TextInput";
import "../../index.css";
import "../../Forms/Form.css";

export default {
  title: "Form",
  component: FormComponent,
  decorators: [withFormik],
};

const Template = (args) => <FormComponent {...args} />;

export const Form1 = Template.bind({});
Form1.args = {
  title: "Basic Information",
  children: [
    <TextInput name="firstName" label="First Name" />,
    <TextInput name="lastName" label="Last Name" />,
    <TextInput name="email" label="Email Address" />,
  ],
};

export const Form2 = Template.bind({});
Form2.args = {
  title: "Address Information",
  children: [
    <TextInput name="firstName" label="Address Line 1" />,
    <TextInput name="lastName" label="Address Line 2" />,
    <TextInput name="email" label="Zip Code" />,
  ],
};
