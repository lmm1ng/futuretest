const initialState = {
  inputValue: "",
  currentInputValue: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: state.currentInputValue
      };
    case "SET_CURRENT_INPUT_VALUE":
      return {
        ...state,
        currentInputValue: action.payload
      };
    default:
      return state;
  }
};
