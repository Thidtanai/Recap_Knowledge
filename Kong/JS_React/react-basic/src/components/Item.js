import PropTypes from "prop-types"; //For validate props type

/* Method1 */
const Item = (props) => {
  const { title, amount } = props;
  return (
    <li>
      {title} <span>{amount}</span>
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
