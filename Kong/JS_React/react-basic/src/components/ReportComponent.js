import { useContext } from "react";
import DataContext from "../data/DataContext";

const ReportComponent = () => {
  /* Consumer */
  const { income, expense } = useContext(DataContext);
  return (
    <div>
      {/* <DataContext.Consumer>
        {(context) => (
          <p>
            income: {context.income} expnese: {context.expense}
          </p>
        )}
      </DataContext.Consumer> */}
      <p>income: {income}</p>
      <p>expnese: {expense}</p>
    </div>
  );
};

export default ReportComponent;
