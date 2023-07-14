import React from "react";
import { Data } from "../../db/db";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  tension: 0.3,
  scales: {
    y: {
      border: {
        display: false,
      },
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

const BarChart = ({ data }) => {
  const newObject = Object.assign({}, data);
  return (
    <div>
      <Chart type="bar" data={newObject} options={options} />
    </div>
  );
};

export default BarChart;
