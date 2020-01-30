import { createSelector } from "reselect";
import * as R from "ramda";
import { headers } from "../containers/Table";

export const getData = state => state.dataButtons.data;
export const getSortingColumn = state => state.table.sortingColumn;
export const getOrder = state => state.table.order;
export const getInputValue = state => state.filterBlock.inputValue;

export const getSortedData = createSelector(
  [getData, getSortingColumn, getOrder, getInputValue],
  (data, sortingColumn, order, inputValue) => {
    let sortedData = [];
    if (order === "asc") {
      sortedData = R.sort(R.ascend(R.prop(sortingColumn)), data);
    } else {
      sortedData = R.sort(R.descend(R.prop(sortingColumn)), data);
    }
    return sortedData.filter(row => {
      let isValid = false;
      if (inputValue === "") return true;
      headers.forEach(cell => {
        if (
          row[cell]
            .toString()
            .toLowerCase()
            .indexOf(inputValue.toLowerCase()) > -1
        ) {
          isValid = true;
        }
      });
      return isValid;
    });
  }
);
