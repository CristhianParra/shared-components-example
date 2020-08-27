import React from "react";
import { AppetizeButton } from "./components/appetize-button/AppetizeButton";
import * as A from "../../ui/bundles/appetize-button.umd";

export function Test() {
  return (
    <div>
      <AppetizeButton label="Button" />
      <A.AppetizeButton label="Hue" />
    </div>
  );
}
