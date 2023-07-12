import React from "react";
import "./Asset.css";
const Asset = ({ widgets }) => {
  return (
    <div className="asset_wrapper dash">
      <div className="asset_container">
        {widgets.map((widget, index) => (
          <div key={index} className="widget" style={widget.position}>
            {widget.title && <h2>{widget.title}</h2>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Asset;
