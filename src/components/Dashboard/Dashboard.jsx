import React from "react";
import "./Dashboard.css";
import Dashtop from "../DashTop/Dashtop";
import Dashwidget from "../Dash/Dashwidget";
const Dashboard = () => {
  return (
    <div className="dashboard_wrapper">
      <div className="dashboard_container">
        <Dashtop />
        <Dashwidget />
      </div>
    </div>
  );
};

export default Dashboard;
