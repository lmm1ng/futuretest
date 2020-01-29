import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import { Table, Dimmer, Loader } from "semantic-ui-react";

const TableComp = ({ headers, rows, isLoading, setSorting, sortingArrow }) => (
  <div id="table_block">
    <Dimmer active={isLoading} inverted>
      <Loader />
    </Dimmer>
    {Boolean(rows.length) && (
      <Table celled fixed>
        <Table.Header>
          <Table.Row>
            {headers.map(header => (
              <Table.HeaderCell id={header} onClick={setSorting}>
                {`${header} ${sortingArrow(header) || ""} `}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map(row => (
            <Table.Row>
              {headers.map(cell => (
                <Table.Cell id={`cell-${cell}`}>{row[cell]}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )}
  </div>
);

TableComp.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default TableComp;
