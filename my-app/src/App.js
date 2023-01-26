import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      expenditure: "Somewhere",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      expenditure: "Somewhere",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      expenditure: "Somewhere",
    },

    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      expenditure: "Somewhere",
    },
  ];
  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        expenditure={expenses[0].expenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        expenditure={expenses[1].expenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        expenditure={expenses[2].expenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        expenditure={expenses[3].expenditure}
      ></ExpenseItem>
    </div>
  );
}
export default App;
