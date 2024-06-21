import Item from "./Item";
import "./Transaction.css";
import { v4 as uuidv4 } from "uuid";  //Use id for key

const Transaction = () => {
  const data = [
    { title: "ค่ารักษาพยาบาล", amount: 2000 },
    { title: "เงินเดือน", amount: 50000 },
    { title: "ค่าเดินทาง", amount: 200 },
    { title: "ค่าเช่าห้อง", amount: 3000 },
    { title: "ค่ารถ", amount: 6000 },
  ];
  return (
    <ul className="item-list">
      {data.map((element) => {
        //return <Item title={element.title} amount={element.amount}/>
        return <Item {...element} key={uuidv4()} />;
      })}
    </ul>
  );
};

export default Transaction;
