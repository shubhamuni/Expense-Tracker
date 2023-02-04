import ExpenseItem from "./ExpenseItem";
import "../UI/Card.css";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div className="expense">
      <Card>
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
          expenditure={props.items[0].expenditure}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
          expenditure={props.items[1].expenditure}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
          expenditure={props.items[2].expenditure}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
          expenditure={props.items[3].expenditure}
        />
      </Card>
    </div>
  );
};

export default Expenses;
