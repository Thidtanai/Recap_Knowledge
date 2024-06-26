import PropTypes from "prop-types"; //For validate props type
import "./Item.css";
import DataContext from "../data/DataContext";

/* Method1 */
const Item = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  return (
    <li className={status}>
      {title}{" "}
      <span>
        {symbol}
        {Math.abs(amount)}
      </span>
      {/* Consumer */}
      <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

/* Method2 */
// const Item = ({title, amount}) => {
//   return (
//     <li>
//       {title} <span>{amount}</span>
//     </li>
//   );
// };

export default Item;
