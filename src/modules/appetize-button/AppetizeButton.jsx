import React from "react";

export function AppetizeButton(props) {
  return <button className="button">{props.label}</button>;
}

//
import { AppetizeButton } from "@appetize";
import "~@appetize/styles/AppetizeButton.style.scss";
