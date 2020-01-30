import { connect } from "react-redux";
import TableComp from "../components/Table";
import { setSorting, setUserSubInfo } from "../actions/table";
import { getSortedData } from "../selectors/getSortedData";

export const headers = ["id", "firstName", "lastName", "email", "phone"];

export default connect(
  state => ({
    headers,
    rows: getSortedData(state),
    inputValue: state.filterBlock.inputValue,
    userSubInfo: state.table.userSubInfo,
    isLoading: state.table.isLoading,
    sortingColumn: state.table.sortingColumn,
    currentPage: state.pageNavigation.currentPage,
    sortingArrow: header => {
      if (header === state.table.sortingColumn) {
        if (state.table.order === "asc") {
          return "▼";
        } else {
          return "▲";
        }
      }
    }
  }),
  { setSorting, setUserSubInfo }
)(TableComp);
