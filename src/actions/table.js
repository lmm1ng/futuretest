export const setLoading = bool => ({
  type: "SET_LOADING",
  payload: bool
});

export const setSortingColumn = string => ({
  type: "SET_SORTING_COLUMN",
  payload: string
});

export const switchOrder = () => ({
  type: "SWITCH_ORDER"
});

export const setSorting = e => {
  return dispatch => {
    dispatch(switchOrder());
    dispatch(setSortingColumn(e.target.id));
  };
};
