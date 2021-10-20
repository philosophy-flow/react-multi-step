import React from "react";
import Form2 from "../Form2";

import "../Form.css";
import "../../index.css";

export default {
  title: "Form2",
  component: Form2,
};

const Template = (args) => <Form2 {...args} />;

export const Default = Template.bind({});
Default.args = {};
