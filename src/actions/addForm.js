export const setModalState = bool => ({
  type: "SET_MODAL_STATE",
  payload: bool
});

export const setIdField = string => ({
  type: "SET_ID_FIELD",
  payload: string
});

export const setFirstNameField = string => ({
  type: "SET_FIRST_NAME_FIELD",
  payload: string
});
export const setLastNameField = string => ({
  type: "SET_LAST_NAME_FIELD",
  payload: string
});
export const setEmailField = string => ({
  type: "SET_EMAIL_FIELD",
  payload: string
});
export const setPhoneField = string => ({
  type: "SET_PHONE_FIELD",
  payload: string
});
export const clearFormFields = () => ({
  type: "CLEAR_FORM_FIELDS"
});

export const setIdFieldState = bool => ({
  type: "SET_ID_FIELD_STATE",
  payload: bool
});

export const setEmailFieldState = bool => ({
  type: "SET_EMAIL_FIELD_STATE",
  payload: bool
});

export const setPhoneFieldState = bool => ({
  type: "SET_PHONE_FIELD_STATE",
  payload: bool
});

export const setFirstNameFieldState = bool => ({
  type: "SET_FIRST_NAME_FIELD_STATE",
  payload: bool
});

export const setLastNameFieldState = bool => ({
  type: "SET_LAST_NAME_FIELD_STATE",
  payload: bool
});

export const onIdFieldChange = (e, data) => {
  return dispatch => {
    dispatch(setIdField(data.value));
    if (/^[0-9]+$/.test(data.value)) {
      dispatch(setIdFieldState(true));
    } else {
      dispatch(setIdFieldState(false));
    }
  };
};

export const onEmailFieldChange = (e, data) => {
  return dispatch => {
    dispatch(setEmailField(data.value));
    if (/.+@.+\..+/i.test(data.value)) {
      dispatch(setEmailFieldState(true));
    } else {
      dispatch(setEmailFieldState(false));
    }
  };
};

export const onPhoneFieldChange = (e, data) => {
  return dispatch => {
    dispatch(setPhoneField(data.value));
    if (
      /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(
        data.value
      )
    ) {
      dispatch(setPhoneFieldState(true));
    } else {
      dispatch(setPhoneFieldState(false));
    }
  };
};

export const onFirstNameFieldChange = (e, data) => {
  return dispatch => {
    dispatch(setFirstNameField(data.value));
    if (data.value.trim() !== "") {
      dispatch(setFirstNameFieldState(true));
    } else {
      return dispatch(setFirstNameFieldState(false));
    }
  };
};

export const onLastNameFieldChange = (e, data) => {
  return dispatch => {
    dispatch(setLastNameField(data.value));
    if (data.value.trim() !== "") {
      dispatch(setLastNameFieldState(true));
    } else {
      return dispatch(setLastNameFieldState(false));
    }
  };
};
