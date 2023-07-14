import { Data } from "./db";

export const chartDb = {
  dumbell: {
    labels: Data.assets?.map((data) => data.label),
    datasets: [
      {
        label: "assets",
        data: Data.assets.map((data) => [data.high, data.low]),
        borderColor: "rgba(36,114,253,0.9)",
        backgroundColor: "rgba(36,114,253,0.7)",
      },
    ],
  },
  barChart: {
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
  },

  horizontalBar: {
    labels: Data.expenditure?.map((data) => data.label),
    datasets: [
      {
        label: "expenditure",
        data: Data.expenditure.map((data) => data.amount),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  },
};
