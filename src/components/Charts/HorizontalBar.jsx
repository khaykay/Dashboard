import React from "react";
import { Data } from "../../db/db";
import { Bar } from "react-chartjs-2";
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

const options = {
  indexAxis: "y",

  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "right",
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
  inflateAmount: -3,
  scales: {
    y: {
      border: {
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
  labels: Data.expenditure?.map((data) => data.label),
  datasets: [
    {
      label: "expenditure",
      data: Data.expenditure.map((data) => data.amount),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
const HorizontalBar = ({ priority }) => {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default HorizontalBar;
