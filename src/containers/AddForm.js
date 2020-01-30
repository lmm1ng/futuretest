import { connect } from "react-redux";
import AddFormComp from "../components/AddForm";
import { headers } from "./Table";
import { clearFormFields } from "../actions/addForm";
import { getFormState } from "../selectors/isFormValid";
import { getFormObject } from "../selectors/getFormObject";
import {
  onIdFieldChange,
  onFirstNameFieldChange,
  onLastNameFieldChange,
  onEmailFieldChange,
  onPhoneFieldChange,
  setModalState
} from "../actions/addForm";
import { setFormObj } from "../actions/dataButtons";

export default connect(
  state => ({
    headers,
    isModal: state.addForm.isModal,
    idField: state.addForm.idField,
    isIdFieldValid: state.addForm.isIdFieldValid,
    firstNameField: state.addForm.firstNameField,
    isFirstNameFieldValid: state.addForm.isFirstNameFieldValid,
    lastNameField: state.addForm.lastNameField,
    isLastNameFieldValid: state.addForm.isLastNameFieldValid,
    emailField: state.addForm.emailField,
    isEmailFieldValid: state.addForm.isEmailFieldValid,
    phoneField: state.addForm.phoneField,
    isPhoneFieldValid: state.addForm.isPhoneFieldValid,
    isFormValid: getFormState(state),
    formObj: getFormObject(state)
  }),
  {
    closeModal: clearFormFields,
    onIdFieldChange,
    onFirstNameFieldChange,
    onLastNameFieldChange,
    onEmailFieldChange,
    onPhoneFieldChange,
    setFormObj,
    setModalState
  }
)(AddFormComp);
