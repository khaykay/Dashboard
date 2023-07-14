import BarChart from "./components/Charts/BarChart";
import HorizontalBar from "./components/Charts/HorizontalBar";
import Dumbell from "./components/Charts/Dumbell";
import TransactionTable from "./components/Charts/TransactionTable";
import Accounts from "./components/Charts/Accounts";

export const renderWidget = (type, data) => {
  if (type === "bar") {
    return <BarChart data={data} />;
  }
  if (type === "horizontal") {
    return <HorizontalBar data={data} />;
  }
  if (type === "dumbell") {
    return <Dumbell data={data} />;
  }
  if (type === "transaction") {
    return <TransactionTable data={data} />;
  }
  if (type === "accounts") {
    return <Accounts data={data} />;
  }
  // return null;
};
