import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {
  const data = [
    { title: "ค่ารักษาพยาบาล", amount: "2000" },
    { title: "เงินเดือน", amount: "50000" },
    { title: "ค่าเดินทาง", amount: "200" },
    { title: "ค่าเช่าห้อง", amount: "3000" },
  ];
  return (
    <ul className="item-list">
      <Item title={data[0].title} amount={data[0].amount} />
      <Item title={data[1].title} amount={data[1].amount} />
      <Item title={data[2].title} amount={data[2].amount} />
    </ul>
  );
};

export default Transaction;
