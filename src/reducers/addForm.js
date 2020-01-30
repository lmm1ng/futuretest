const initialState = {
  isModal: false,
  idField: "1",
  isIdFieldValid: true,
  firstNameField: "Martin",
  isFirstNameFieldValid: true,
  lastNameField: "Potter",
  isLastNameFieldValid: true,
  emailField: "martin@example.com",
  isEmailFieldValid: true,
  phoneField: "(234)534-4790",
  isPhoneFieldValid: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MODAL_STATE":
      return {
        ...state,
        isModal: action.payload
      };
    case "SET_ID_FIELD":
      return {
        ...state,
        idField: action.payload
      };
    case "SET_FIRST_NAME_FIELD":
      return {
        ...state,
        firstNameField: action.payload
      };
    case "SET_LAST_NAME_FIELD":
      return {
        ...state,
        lastNameField: action.payload
      };
    case "SET_EMAIL_FIELD":
      return {
        ...state,
        emailField: action.payload
      };
    case "SET_PHONE_FIELD":
      return {
        ...state,
        phoneField: action.payload
      };
    case "SET_ID_FIELD_STATE":
      return {
        ...state,
        isIdFieldValid: action.payload
      };
    case "SET_EMAIL_FIELD_STATE":
      return {
        ...state,
        isEmailFieldValid: action.payload
      };
    case "SET_PHONE_FIELD_STATE":
      return {
        ...state,
        isPhoneFieldValid: action.payload
      };
    case "SET_FIRST_NAME_FIELD_STATE":
      return {
        ...state,
        isFirstNameFieldValid: action.payload
      };
    case "SET_LAST_NAME_FIELD_STATE":
      return {
        ...state,
        isLastNameFieldValid: action.payload
      };
    case "CLEAR_FORM_FIELDS":
      return {
        ...state,
        idField: "1",
        firstNameField: "Martin",
        lastNameField: "Potter",
        emailField: "martin@example.com",
        phoneField: "(234)534-4790",
        isIdFieldValid: true,
        isFirstNameFieldValid: true,
        isLastNameFieldValid: true,
        isEmailFieldValid: true,
        isPhoneFieldValid: true
      };

    default:
      return state;
  }
};
