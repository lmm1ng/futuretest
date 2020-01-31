import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import { Button, Input, Modal, Form } from "semantic-ui-react";

const AddFormComp = ({
  isModal,
  closeModal,
  idField,
  isIdFieldValid,
  onIdFieldChange,
  firstNameField,
  onFirstNameFieldChange,
  isFirstNameFieldValid,
  lastNameField,
  isLastNameFieldValid,
  onLastNameFieldChange,
  emailField,
  isEmailFieldValid,
  onEmailFieldChange,
  phoneField,
  isPhoneFieldValid,
  onPhoneFieldChange,
  isFormValid,
  setFormObj,
  formObj,
  setModalState
}) => (
  <Modal
    open={isModal}
    trigger={
      <Button
        id="modal_trigger_button"
        color="green"
        onClick={() => setModalState(true)}
      >
        Добавить
      </Button>
    }
    onClose={() => {
      closeModal();
      setModalState(false);
    }}
  >
    <Modal.Content>
      <Form>
        <Form.Field error={!isIdFieldValid}>
          <label>id</label>
          <Input value={idField} onChange={onIdFieldChange} />
        </Form.Field>
        <Form.Field error={!isFirstNameFieldValid}>
          <label>firstName</label>
          <Input value={firstNameField} onChange={onFirstNameFieldChange} />
        </Form.Field>
        <Form.Field error={!isLastNameFieldValid}>
          <label>lastName</label>
          <Input value={lastNameField} onChange={onLastNameFieldChange} />
        </Form.Field>
        <Form.Field error={!isEmailFieldValid}>
          <label>email</label>
          <Input value={emailField} onChange={onEmailFieldChange} />
        </Form.Field>
        <Form.Field error={!isPhoneFieldValid}>
          <label>phone</label>
          <Input value={phoneField} onChange={onPhoneFieldChange} />
        </Form.Field>
        <Button
          disabled={!isFormValid}
          type="submit"
          onClick={() => {
            setFormObj(formObj);
            setModalState(false);
          }}
        >
          Добавить в таблицу
        </Button>
      </Form>
    </Modal.Content>
  </Modal>
);

AddFormComp.propTypes = {
  isModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  idField: PropTypes.string.isRequired,
  firstNameField: PropTypes.string.isRequired,
  lastNameField: PropTypes.string.isRequired,
  emailField: PropTypes.string.isRequired,
  phoneField: PropTypes.string.isRequired,
  isIdFieldValid: PropTypes.bool.isRequired,
  isFirstNameFieldValid: PropTypes.bool.isRequired,
  isLastNameFieldValid: PropTypes.bool.isRequired,
  isEmailFieldValid: PropTypes.bool.isRequired,
  isPhoneFieldValid: PropTypes.bool.isRequired,
  onIdFieldChange: PropTypes.func.isRequired,
  onFirstNameFieldChange: PropTypes.func.isRequired,
  onLastNameFieldChange: PropTypes.func.isRequired,
  onEmailFieldChange: PropTypes.func.isRequired,
  onPhoneFieldChange: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
  setFormObj: PropTypes.func.isRequired,
  formObj: PropTypes.object.isRequired
};

export default AddFormComp;
