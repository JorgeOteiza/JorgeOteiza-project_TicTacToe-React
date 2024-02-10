//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "../styles/App.css";

//import your own components
import App from "./component/App.jsx";
import Home from "./component/home.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("home")
);
