import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { RolesContextProvider } from "./store/roles-context";

ReactDOM.render(
  <RolesContextProvider>
    <App />
  </RolesContextProvider>,
  document.getElementById("root")
);
