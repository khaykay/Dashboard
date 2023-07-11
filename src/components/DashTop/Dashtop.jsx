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
            <i class="material-symbols-outlined ">add_circle</i>Open an account
            or deposit
          </span>
        </div>
      </section>
    </>
  );
};

export default Dashtop;
