import { createSelector } from "reselect";
import * as R from "ramda";

export const getData = state => state.dataButtons.data;
export const getSortingColumn = state => state.table.sortingColumn;
export const getOrder = state => state.table.order;

export const getSortedData = createSelector(
  [getData, getSortingColumn, getOrder],
  (data, sortingColumn, order) => {
    let sortedData = [];
    if (order === "asc") {
      sortedData = R.sort(R.ascend(R.prop(sortingColumn)), data);
    } else {
      sortedData = R.sort(R.descend(R.prop(sortingColumn)), data);
    }
    return sortedData;
  }
);
