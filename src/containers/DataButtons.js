import { connect } from "react-redux";
import DataButtonsComp from "../components/DataButtons";
import { setData } from "../actions/dataButtons";

export default connect(() => ({}), { dataLoader: setData })(DataButtonsComp);
