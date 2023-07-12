import React from "react";
import "./Dashwidget.css";
import Overview from "../Overview/Overview";
import Asset from "../Asset/Asset";
import { config } from "../../config";

const Dashwidget = () => {
  return (
    <div className="dash_wrapper">
      <div className="dash_container">
        <Overview widgets={config.widgets.overview} />
        <Asset widgets={config.widgets.assets} />
      </div>
    </div>
  );
};

export default Dashwidget;
