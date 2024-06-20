/* Method1 */
const Item = (props) => {
  const {title, amount} = props;
  return (
    <li>
      {title} <span>{amount}</span>
    </li>
  );
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
