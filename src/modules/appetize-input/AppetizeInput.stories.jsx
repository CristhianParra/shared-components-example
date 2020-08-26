import React from "react";
import { AppetizeInput } from "./AppetizeInput";

export default {
  title: "AppetizeInput",
  component: AppetizeInput,
};

const Template = (args) => <AppetizeInput {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  placeholder: "placeholder here",
};
