import React from "react";
import "./Overview.css";
const Overview = ({ widgets }) => {
  return (
    <div className="overview_wrapper dash">
      <div className="overview_container">
        {widgets.map((widget, index) => (
          <div key={index} className="widget" style={widget.position}>
            {widget.title && <h2>{widget.title}</h2>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
