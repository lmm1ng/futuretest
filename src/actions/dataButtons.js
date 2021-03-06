import axios from "axios";
import { setLoading } from "../actions/table";
import { setCurrentPage } from "./pageNavigation";

const setDataToState = array => ({
  type: "SET_DATA",
  payload: array
});

export const setFormObj = object => ({
  type: "SET_FORM_OBJ",
  payload: object
});

export const setData = e => {
  return dispatch => {
    dispatch(setLoading(true));
    dispatch(setCurrentPage(1));
    axios
      .get(
        e.target.id === "small_data_button"
          ? "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
          : "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
      )
      .then(response => {
        dispatch(setDataToState(response.data));
        dispatch(setLoading(false));
      })
      .catch(err => {
        console.log(err);
        dispatch(setDataToState([]));
        dispatch(setLoading(false));
      });
  };
};
