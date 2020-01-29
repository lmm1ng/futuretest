import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

const DataButtonsComp = ({ dataLoader }) => (
  <div id="data_buttons">
    <Button.Group>
      <Button id="small_data_button" onClick={dataLoader}>
        Small Data
      </Button>
      <Button id="big_data_button" onClick={dataLoader}>
        Big Data
      </Button>
    </Button.Group>
  </div>
);

DataButtonsComp.propTypes = {
  dataLoader: PropTypes.func.isRequired
};

export default DataButtonsComp;
