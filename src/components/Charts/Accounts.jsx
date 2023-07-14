import React from "react";
// import { Data } from "../../db/db";
import "./Accounts.css";

const Accounts = ({ data }) => {
  return (
    <div className="account_wrapper">
      <div className="account_container">
        {data?.map((accounts, index) => {
          return (
            <div className="account" key={index}>
              <span className="acc_left">
                <span className="user_avi"></span>
                <span className="acc_card">
                  <span className=" md bold">
                    {accounts.card} {accounts.cardType}
                  </span>
                  <span className="sm_text ">{accounts.cardDetails}</span>
                </span>
              </span>
              <span className="acc_right">
                <span className="acc_bal md bold">${accounts.balance}</span>
                <span className="sm_text grey_text ">Account balance</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accounts;
