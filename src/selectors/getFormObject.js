import { createSelector } from "reselect";

export const getIdFieldValue = state => state.addForm.idField;
export const getFirstNameFieldValue = state => state.addForm.firstNameField;
export const getLastNameFieldValue = state => state.addForm.lastNameField;
export const getEmailFieldValue = state => state.addForm.emailField;
export const getPhoneFieldValue = state => state.addForm.phoneField;

export const getFormObject = createSelector(
  [
    getIdFieldValue,
    getFirstNameFieldValue,
    getLastNameFieldValue,
    getEmailFieldValue,
    getPhoneFieldValue
  ],
  (
    idFieldValue,
    firstNameFieldValue,
    lastNameFieldValue,
    emailFieldValue,
    phoneFieldValue
  ) => ({
    id: idFieldValue,
    firstName: firstNameFieldValue,
    lastName: lastNameFieldValue,
    email: emailFieldValue,
    phone: phoneFieldValue
  })
);
