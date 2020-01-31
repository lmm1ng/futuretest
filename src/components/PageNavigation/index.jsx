import React from "react";
import "./index.css";
import PropTypes from "prop-types";

import { Pagination } from "semantic-ui-react";

const PageNavigationComp = ({ rows, maxPage, setCurrentPage }) =>
  Boolean(rows.length) && (
    <div id="pagination_block">
      <Pagination
        defaultActivePage={1}
        totalPages={maxPage}
        onPageChange={(e, data) => setCurrentPage(data.activePage)}
      />
    </div>
  );

PageNavigationComp.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  maxPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default PageNavigationComp;
