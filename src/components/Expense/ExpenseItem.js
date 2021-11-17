import { useState } from "react";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickExpense = () => {
    setTitle('update!!')
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickExpense}>Click Change</button>
      </div>
    </div>
  );
};

export default ExpenseItem;