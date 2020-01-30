import { connect } from "react-redux";
import PageNavigationComp from "../components/PageNavigation";
import { getMaxPageValue } from "../utils/getMaxPageValue";
import { setCurrentPage } from "../actions/pageNavigation";
import { getSortedData } from "../selectors/getSortedData";

export default connect(
  state => ({
    maxPage: getMaxPageValue(getSortedData(state)),
    rows: getSortedData(state)
  }),
  { setCurrentPage }
)(PageNavigationComp);
