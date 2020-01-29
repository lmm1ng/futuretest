import { connect } from "react-redux";
import TableComp from "../components/Table";
import { setSorting } from "../actions/table";
import { getSortedData } from "../selectors/getSortedData";

const headers = ["id", "firstName", "lastName", "email", "phone"];

export default connect(
  state => ({
    headers,
    rows: getSortedData(state),
    isLoading: state.table.isLoading,
    sortingColumn: state.table.sortingColumn,
    sortingArrow: header => {
      if (header === state.table.sortingColumn) {
        if (state.table.order === "asc") {
          return "▲";
        } else {
          return "▼";
        }
        return null;
      }
    }
  }),
  { setSorting }
)(TableComp);
