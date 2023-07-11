import React from "react";
import "./Dashwidget.css";
import Overview from "../Overview/Overview";
import Asset from "../Asset/Asset";

const Dashwidget = () => {
  return (
    <div className="dash_wrapper">
      <div className="dash_container">
        <Overview />
        <Asset />
      </div>
    </div>
  );
};

export default Dashwidget;
