import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { internalIP } from "webpack-dev-server";

internalIP("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
