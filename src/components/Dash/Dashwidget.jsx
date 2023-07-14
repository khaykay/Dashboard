import React, { useEffect } from "react";
import "./Dashwidget.css";
import Overview from "../Overview/Overview";
import Asset from "../Asset/Asset";
import { config } from "../../config";
const Dashwidget = () => {
  const onResize = () => window.location.reload(true);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
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
