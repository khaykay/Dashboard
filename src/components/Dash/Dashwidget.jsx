import React, { useState, useEffect } from "react";
import "./Dashwidget.css";
import Overview from "../Overview/Overview";
import Asset from "../Asset/Asset";
import { config } from "../../config";
const Dashwidget = () => {
  const [isResizing, setIsResizing] = useState(false);

  useEffect(() => {
    let resizeTimer;

    function handleResize() {
      if (!isResizing) {
        setIsResizing(true);

        window.location.reload(true);

        resizeTimer = setTimeout(() => {
          setIsResizing(false);
        }, 200);
      }
    }

    function handleScroll() {
      setIsResizing(false);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isResizing]);

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
