import { combineReducers } from "redux";
import table from "./table";
import dataButtons from "./dataButtons";
import addForm from "./addForm";
import pageNavigation from "./pageNavigation";
import filterBlock from "./filterBlock";

export default combineReducers({
  table,
  dataButtons,
  addForm,
  pageNavigation,
  filterBlock
});
