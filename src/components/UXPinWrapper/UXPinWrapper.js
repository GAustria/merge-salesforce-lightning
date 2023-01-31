// eslint-disable-next-line no-unused-vars
import React from "react";
import { IconSettings } from "@salesforce/design-system-react";

export default function UXPinWrapper({ children }) {

  return (
    <IconSettings iconPath="/assets/icons">
      {children}
    </IconSettings>
  );
}