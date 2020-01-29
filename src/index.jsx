import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store";
import "./index.css";
import Table from "./containers/Table";
import DataButtons from "./containers/DataButtons";

import "semantic-ui-css/semantic.min.css";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <DataButtons />
    <Table />
  </Provider>,
  document.getElementById("root")
);
