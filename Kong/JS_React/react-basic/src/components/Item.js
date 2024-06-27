import PropTypes from "prop-types"; //For validate props type
import "./Item.css";

/* Method1 */
const Item = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <li className={status}>
      {title}{" "}
      <span>
        {symbol}
        {formatNumber(Math.abs(amount))}
      </span>
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
