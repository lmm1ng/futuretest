const initialState = {
  sortingColumn: "id",
  order: "asc",
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORTING_COLUMN":
      return {
        ...state,
        sortingColumn: action.payload
      };
    case "SWITCH_ORDER":
      return {
        ...state,
        order: state.order === "asc" ? "desc" : "asc"
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};
