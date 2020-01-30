import { createSelector } from "reselect";

export const getIdFieldState = state => state.addForm.isIdFieldValid;
export const getEmailFieldState = state => state.addForm.isEmailFieldValid;
export const getPhoneFieldState = state => state.addForm.isPhoneFieldValid;
export const getFirstNameFieldState = state =>
  state.addForm.isFirstNameFieldValid;
export const getLastNameFieldState = state =>
  state.addForm.isLastNameFieldValid;

export const getFormState = createSelector(
  [
    getIdFieldState,
    getFirstNameFieldState,
    getLastNameFieldState,
    getEmailFieldState,
    getPhoneFieldState
  ],
  (
    idFieldState,
    firstNameFieldState,
    lastNameFieldState,
    emailFieldState,
    phoneFieldState
  ) => {
    return (
      idFieldState &&
      firstNameFieldState &&
      lastNameFieldState &&
      emailFieldState &&
      phoneFieldState
    );
  }
);
