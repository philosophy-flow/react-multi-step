import React from "react";
import Form1 from "../Form1";

import "../Form.css";
import "../../index.css";

export default {
  title: "Form1",
  component: Form1,
};

const Template = (args) => <Form1 {...args} />;

export const Default = Template.bind({});
Default.args = {};
