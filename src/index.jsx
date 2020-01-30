import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store";
import "./index.css";
import Table from "./containers/Table";
import DataButtons from "./containers/DataButtons";
import AddForm from "./containers/AddForm";
import PageNavigation from "./containers/PageNavigation";
import FilterBlock from "./containers/FilterBlock";

import "semantic-ui-css/semantic.min.css";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <AddForm />
    <FilterBlock />
    <DataButtons />
    <Table />
    <PageNavigation />
  </Provider>,
  document.getElementById("root")
);
