import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import { Table, Dimmer, Loader, TextArea, Segment } from "semantic-ui-react";

const TableComp = ({
  headers,
  rows,
  isLoading,
  setSorting,
  sortingArrow,
  currentPage,
  setUserSubInfo,
  userSubInfo
}) => (
  <div id="table_block">
    <Dimmer page active={isLoading} inverted>
      <Loader />
    </Dimmer>
    {(Boolean(rows.length) && (
      <Table selectable celled fixed compact={false}>
        <Table.Header>
          <Table.Row>
            {headers.map(header => (
              <Table.HeaderCell
                key={`header-${header}`}
                id={header}
                onClick={setSorting}
              >
                {`${header} ${sortingArrow(header) || ""} `}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows
            .slice(50 * (currentPage - 1), 50 + 50 * (currentPage - 1))
            .map(row => (
              <Table.Row
                key={`row${row.id}-${row.firstName}`}
                onClick={() =>
                  setUserSubInfo({
                    ...row.address,
                    description: row.description,
                    firstName: row.firstName,
                    lastName: row.lastName
                  })
                }
              >
                {headers.map(cell => (
                  <Table.Cell key={`cell-${cell}`}>{row[cell]}</Table.Cell>
                ))}
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    )) || <Segment id='table_alt_block'>Не выбран объём данных или ничего не найдено.</Segment>}
    {Object.keys(userSubInfo).length !== 0 && (
      <Segment id="userSub_block">
        <header>
          <span>Выбран пользователь: </span>
          <b>{`${userSubInfo.firstName} ${userSubInfo.lastName}`}</b>
        </header>
        <section id="userSub_block_description">
          <span>Описание: </span>
          <TextArea value={userSubInfo.description || "Нет данных"} />
          <span>
            Адрес проживания: <b>{userSubInfo.streetAddress || "Нет данных"}</b>
          </span>
          <span>
            Город: <b>{userSubInfo.city || "Нет данных"}</b>
          </span>
          <span>
            Провинция: <b>{userSubInfo.state || "Нет данных"}</b>
          </span>
          <span>
            Индекс: <b>{userSubInfo.zip || "Нет данных"}</b>
          </span>
        </section>
      </Segment>
    )}
  </div>
);

TableComp.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  isLoading: PropTypes.bool.isRequired,
  setSorting: PropTypes.func.isRequired,
  sortingArrow: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setUserSubInfo: PropTypes.func.isRequired,
  userSubInfo: PropTypes.objectOf(PropTypes.any).isRequired
};

export default TableComp;
