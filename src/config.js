import { Data } from "./db/db";
import { chartDb } from "./db/chartDb";
// const dataTrans = JSON.parse(Data.transactions);
export const config = {
  widgets:
    // Add more widgets to the configuration
    {
      overview: [
        {
          type: "table",
          title: "Overview",
          titleDescription: "View all your Income and Spendings",
          position: {
            gridArea: "1/ 1/ span 1 / span 2",
            padding: "15px",
          },
          dataSource: "",
          priority: 1,
        },
        {
          type: "bar",
          title: "$9650",
          titleDescription: "Income of March 2023",
          position: {
            gridArea: "2/1/span 1/span 1",
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          },
          dataSource: chartDb.barChart,
          priority: 2,
        },
        {
          type: "horizontal",
          title: "$7,485.00",
          titleDescription: "Spendings of March 2023",
          position: {
            gridArea: "2/ 2 / span 1 / span 1",
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          },
          dataSource: chartDb.horizontalBar,
          priority: 3,
        },
        {
          type: "transaction",
          title: "Latest transactions",

          position: {
            gridArea: "3/ 1/ span 2 / span 2",
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          },
          dataSource: Data.transactions,
          priority: 4,
        },
      ],
      assets: [
        {
          type: "table",
          title: "Assets",
          titleDescription: "View all your assets in one place",
          position: {
            gridArea: "1/ 1/ span 1 / span 1",
            padding: "15px",
          },
          dataSource: "",
          priority: 1,
        },
        {
          type: "dumbell",
          title: "Asset analysis",
          position: {
            gridArea: "2/1/span 1/span 1",
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          },
          dataSource: chartDb.dumbell,
          priority: 2,
        },
        {
          type: "accounts",
          title: "Accounts",
          titleDescription: "View all your accounts",
          position: {
            gridArea: "3/ 1/ span 1 / span 1",
            backgroundColor: "white",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          },
          dataSource: Data.accounts,
          priority: 3,
        },
      ],
    },
};
