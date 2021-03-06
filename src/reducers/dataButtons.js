const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload
      };
    case "SET_FORM_OBJ":
      return {
        ...state,
        data: state.data.concat(action.payload)
      };
    default:
      return state;
  }
};
