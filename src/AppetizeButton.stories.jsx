import React from "react";
import { AppetizeButton } from "./AppetizeButton";

export default {
  title: "AppetizeButton",
  component: AppetizeButton,
};

const Template = (args) => <AppetizeButton {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    label: "Click me!"
};
