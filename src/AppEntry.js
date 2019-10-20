import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./components/App";
// import Store from './Store';

ReactDOM.render(<App/>,
  document.getElementById("app")
);
