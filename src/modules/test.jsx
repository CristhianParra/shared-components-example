import React from "react";
import { AppetizeButton } from "./appetize-button/AppetizeButton";
import * as A from "../../dist/bundles/appetize-button.umd";

export function Test() {
  return (
    <div>
      <AppetizeButton label="Button" />
      <A.AppetizeButton label="Hue" />
    </div>
  );
}
