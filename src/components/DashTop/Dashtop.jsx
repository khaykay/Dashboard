import React from "react";
import "./Dashtop.css";
const Dashtop = () => {
  return (
    <>
      <section className="balance_wrapper">
        <div className="balance_left">
          <h3 className="balance_header">$120,420.50</h3>
          <span className="grey_text md title">
            Total balance from all accounts
            <span className="denomination">USD</span>
          </span>
        </div>
        <div className="balance_right">
          <span className="new">
            <i className="material-symbols-outlined ">add_circle</i>
            <span className="new_title">account or deposit</span>
          </span>
        </div>
      </section>
    </>
  );
};

export default Dashtop;
