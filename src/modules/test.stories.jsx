import React from "react";
import { Test } from "./test";

export default {
  title: "Test",
  component: Test,
};

const Template = (args) => <Test {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {};
