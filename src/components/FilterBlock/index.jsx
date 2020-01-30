import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import { Input, Button } from "semantic-ui-react";

const FilterBlockComp = ({
  setInputValue,
  currentInputValue,
  setCurrentInputValue
}) => (
  <div id="filter_block">
    <Input
      value={currentInputValue}
      placeholder='Введите данные...'
      onChange={(e, data) => setCurrentInputValue(data.value)}
    />
      <Button onClick={setInputValue}>Найти</Button>
  </div>
);

FilterBlockComp.propTypes = {
  setInputValue: PropTypes.func.isRequired,
  setCurrentInputValue: PropTypes.func.isRequired,
  currentInputValue: PropTypes.string.isRequired
};

export default FilterBlockComp;
