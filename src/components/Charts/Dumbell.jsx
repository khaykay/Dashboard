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
  elements: {
    bar: {
      borderWidth: 1,
    },
  },
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Dumbell floating Chart",
    },
  },
  //   inflateAmount: -1,
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
  borderRadius: 4,
};

const Dumbell = ({ data }) => {
  const newObject = Object.assign({}, data);
  return (
    <div>
      <Bar options={options} data={newObject} />
    </div>
  );
};

export default Dumbell;
