const initialState = {
  currentPage: 1
};

export default (state = initialState, action) => {
  if (action.type === "SET_CURRENT_PAGE") {
    return {
      ...state,
      currentPage: action.payload
    };
  } else {
    return state;
  }
};
