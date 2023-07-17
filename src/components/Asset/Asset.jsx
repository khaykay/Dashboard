import React, { useState, useEffect } from "react";
import "./Asset.css";
import { renderWidget } from "../../renderWidget";

import { getCurrentHighestPriority as orderWidgets } from "./../../helper";
const Asset = ({ widgets }) => {
  const [savedData, setSavedData] = useState([]);
  const [step, setStep] = useState(1);
  const [priority, highestPriority] = useState(3);

  useEffect(() => {
    if (step <= priority) {
      setTimeout(() => {
        const data = orderWidgets(widgets, step, savedData);

        if (data) {
          setStep(data.step);
          setSavedData([...data.widgetArray]);
        }
      }, 1500);
    }
  }, [step]);

  return (
    <div className="asset_wrapper dash">
      <div className="asset_container">
        {savedData?.map((widget, index) => (
          <div key={index} className="widget" style={widget?.position}>
            <div className="widget_title_wrapper">
              {widget?.title && (
                <h4 className="widget_title">{widget?.title}</h4>
              )}
              {widget?.titleDescription && (
                <div className=" grey_text md">{widget?.titleDescription}</div>
              )}
            </div>
            {renderWidget(widget?.type, widget?.dataSource)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Asset;
