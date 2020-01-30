import { connect } from "react-redux";
import FilterBlockComp from "../components/FilterBlock";
import { setInputValue, setCurrentInputValue } from "../actions/filterBlock";

export default connect(
  state => ({ currentInputValue: state.filterBlock.currentInputValue }),
  { setInputValue, setCurrentInputValue }
)(FilterBlockComp);
