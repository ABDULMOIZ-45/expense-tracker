import { useState } from "react";
import SalaryInput from "./components/SalaryInput";
import Summary from "./components/Summary";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";


function App() {
  const [salary, setSalary] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  // Add or Update Expense
  const addOrUpdateExpense = (expense) => {
    if (editingExpense) {
      setExpenses(
        expenses.map((exp) => (exp.id === editingExpense.id ? expense : exp))
      );
      setEditingExpense(null);
    } else {
      setExpenses([...expenses, expense]);
    }
  };

  // Delete Expense
  const deleteExpense = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this expense?");
    if (confirmDelete) {
      setExpenses(expenses.filter((exp) => exp.id !== id));
    }
  };

  // Edit Expense
  const editExpense = (expense) => {
    setEditingExpense(expense);
  };

  // Total Expenses
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Expense Tracker
        </h1>

        {/* Salary Input */}
        <SalaryInput salary={salary} setSalary={setSalary} />


        {/* Summary Section */}
        <Summary salary={salary} totalExpenses={totalExpenses} />

        {/* Expense Input */}
        <ExpenseForm addOrUpdateExpense={addOrUpdateExpense} editingExpense={editingExpense} />

        {/* Expense List */}
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} editExpense={editExpense} />

      </div>
    </div>
  );
}

export default App;
