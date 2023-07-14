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
const data = {
  labels: Data.income?.map((data) => data.label),
  datasets: [
    {
      label: "Income",
      data: Data.income.map((data) => data.amount),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      type: "line",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
    },
    {
      type: "bar",
      label: "Income",
      data: Data.income.map((data) => data.amount),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const BarChart = ({ priority }) => {
  return (
    <div>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default BarChart;
