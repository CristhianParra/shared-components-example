import * as React from "react";

type Props = {
  label: string;
};

export function AppetizeButton(props: Props) {
  return <button className="button">{props.label}</button>;
}
