import React from "react";
import "./TransactionTable.css";
import { Data } from "../../db/db";

const TransactionTable = ({ data }) => {
  return (
    <div className="transactiontable_wrapper">
      <div className="transaction-mobile">
        <div className="mob_header">
          <span className="mob">
            <span className="md bold ">name</span>
            <span className="sm_text grey_text">phone</span>
          </span>
          <span className="mob">
            <span className="md  bold">amount</span>
            <span className="sm_text grey_text">source</span>
          </span>
          <span className="md bold">status</span>
        </div>
        {data.map((user, index) => {
          return (
            <div className="user-div" key={user.index}>
              <div className="name-phone">
                <p className="bold">{user.name}</p>
                <p className="sm_text">{user.phoneNumber}</p>
              </div>
              <div className="source-amount">
                <p className="bold">-${user.amount}</p>
                <p className="sm_text">{user.source}</p>
              </div>
              <div className="">
                <span className="md status">
                  <i className="material-symbols-outlined md">
                    {user.statusIcon}
                  </i>
                  {user.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <table className="transactiontable">
        <thead className="thead">
          <tr className="table_header">
            <th className="md grey_text">.</th>
            <th className="md grey_text">name, phone</th>
            <th className="md grey_text">status</th>
            <th className="md grey_text">source</th>
            <th className="md grey_text">amount</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((table, index) => {
            return (
              <tr key={index} className="tbody_row">
                <td className="user_avi"></td>
                <span className="name_span">
                  <td className="md bold">{table.name}</td>
                  <td className="grey_text sm_text">{table.phoneNumber}</td>
                </span>
                <td>
                  <span className="status md">
                    <i className="material-symbols-outlined md">
                      {table.statusIcon}
                    </i>
                    {table.status}
                  </span>
                </td>
                <td className="md ">{table.source}</td>
                <td className="md">-${table.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
