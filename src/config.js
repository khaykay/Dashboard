export const config = {
  widgets:
    // Add more widgets to the configuration
    {
      overview: [
        {
          type: "bar",
          title: "income",
          position: {
            gridArea: "2/1/span 1/span 1",
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "10px",
          },
          dataSource: "/api/pie-chart-data",
          priority: 1,
        },
        {
          type: "table",
          title: "title",
          position: {
            gridArea: "1/ 1/ span 1 / span 2",
          },
          dataSource: "/api/pie-chart-data",
          priority: 1,
        },
        {
          type: "table",
          title: "transaction",
          position: {
            gridArea: "3/ 1/ span 2 / span 2",
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "10px",
          },
          dataSource: "/api/pie-chart-data",
          priority: 1,
        },
        {
          type: "line",
          title: "expenditure",
          position: {
            gridArea: "2/ 2 / span 1 / span 1",
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "10px",
          },
          dataSource: "/api/pie-chart-data",
          priority: 1,
        },
      ],
      assets: [
        {
          type: "bar",
          title: "analysis",
          position: {
            gridArea: "2/1/span 1/span 1",
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "10px",
          },
          dataSource: "/api/pie-chart-data",
          priority: 1,
        },
        {
          type: "table",
          title: "title",
          position: {
            gridArea: "1/ 1/ span 1 / span 1",
          },
          dataSource: "/api/pie-chart-data",
          priority: 1,
        },
        {
          type: "table",
          title: "accounts",
          position: {
            gridArea: "3/ 1/ span 1 / span 1",
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "10px",
          },
          dataSource: "/api/pie-chart-data",
          priority: 1,
        },
      ],
    },
};
